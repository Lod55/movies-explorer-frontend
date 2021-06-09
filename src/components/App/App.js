import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import './App.css';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import * as api from '../../utils/api';
import * as apiBeatFilm from '../../utils/apiBeatFilm';
import * as utils from '../../utils/utils';
import { messageSuccess, fetchErrorMessage } from '../../utils/constants';

import imgSuccess from '../../images/success.svg';
import imgFail from '../../images/fail.svg';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import TooltipPopup from '../TooltipPopup/TooltipPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

const App = () => {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({});
  const [searchValue, setSearchValue] = useState({});

  const [messageTooltipPopup, setMessageTooltipPopup] = useState('');
  const [imgTooltipPopup, setImgTooltipPopup] = useState('');

  const [movies, setMovies] = useState([]);
  const [savedMovieIds, setSavedMovieIds] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  // ---Функции попапа
  const showError = (message) => {
    setMessageTooltipPopup(message);
    setImgTooltipPopup(imgFail);
    setIsTooltipPopupOpen(true);
  };

  const showSuccess = (message) => {
    message ? setMessageTooltipPopup(message) : setMessageTooltipPopup(messageSuccess);
    setImgTooltipPopup(imgSuccess);
    setIsTooltipPopupOpen(true);
  };

  // ---Функции аутентификации
  const successfulAuth = async () => {
    setIsLoggedIn(true);
    setIsLoading(true);

    try {
      const [user, savedMovies, apiMovies] = await Promise.all([
        api.getUser(),
        api.getMovies(),
        apiBeatFilm.getBeatFilm(),
      ]);
      setCurrentUser(user);
      setSavedMovies(savedMovies);
      setSearchedSavedMovies(savedMovies);

      const saveIds = savedMovies.map((movie) => movie.movieId);
      setSavedMovieIds(saveIds);

      const resParsed = utils.parseMovies(apiMovies, apiBeatFilm.BASE_URL);
      setMovies(resParsed);
    } catch {
      setIsLoading(false);
      showError(fetchErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const checkAuth = async () => {
    try {
      const res = await api.checkAuth();
      res.message === 'Пользователь авторизован!' ? successfulAuth() : setIsLoggedIn(false);
    } catch {
      setIsLoggedIn(false);
    }
  };

  const handleLogin = async ({ password, email }) => {
    try {
      const res = await api.authorize({ password, email });
      await successfulAuth();
      history.push('/');
      showSuccess(res.message);
    } catch (err) {
      showError(err.message);
      setIsLoggedIn(false);
    }
  };

  const handleRegister = async ({ name, email, password }) => {
    try {
      const res = await api.register({ name, email, password });
      history.push('/sign-in');
      showSuccess(res.message);
    } catch (err) {
      showError(err.message);
    }
  };

  const handleSignout = async () => {
    try {
      const res = await api.logout();
      setIsLoggedIn(false);
      showSuccess(res.message);
      setIsSearching(false);
    } catch (err) {
      showError(err.message);
    }
  };

  // ---Функции запросов к основному Api
  const handleUpdateProfile = async ({ name, email }) => {
    try {
      const updateUser = await api.updateUser({ name, email });
      setCurrentUser(updateUser);
      showSuccess(updateUser.massage);
    } catch (err) {
      showError(err.message);
    }
  };

  const saveMovie = async (movieData) => {
    try {
      const savedMovie = await api.setMovie(movieData);

      setSavedMovies([savedMovie, ...savedMovies]);
      setSavedMovieIds([...savedMovieIds, savedMovie.movieId]);
      setSearchedSavedMovies([savedMovie, ...savedMovies]);
    } catch (err) {
      showError(err.message);
    }
  };

  const removeMovie = async ({ movieId }) => {
    try {
      const removedMovie = await api.removeMovie({ movieId });

      if (removedMovie.message === 'Фильм удалён') {
        const filteredMovies = savedMovies.filter((movie) => movie.movieId !== movieId);
        const filteredMoviesIds = savedMovieIds.filter((id) => id !== movieId);

        setSavedMovies(filteredMovies);
        setSavedMovieIds(filteredMoviesIds);
        setSearchedSavedMovies(filteredMovies);
      }

      return;
    } catch (err) {
      showError(err.message);
    }
  };

  // ---Функции поиска
  const searchSavedMovies = (keyword, isCheckbox) => {
    setIsLoading(true);

    try {
      const filteredMovies = utils.searchByKeyword(savedMovies, keyword, isCheckbox);
      setSearchedSavedMovies(filteredMovies);
    } catch (err) {
      showError(fetchErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const searchMovies = (keyword, isCheckbox) => {
    setIsLoading(true);
    setIsSearching(true);

    try {
      const filteredMovies = utils.searchByKeyword(movies, keyword, isCheckbox);
      setSearchedMovies(filteredMovies);
      setSearchValue({ ...searchValue, keyword: keyword });
      localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
      localStorage.setItem('searchValue', JSON.stringify({ isCheckbox, keyword }));
    } catch (err) {
      showError(fetchErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Проверка автризации
  useEffect(() => {
    setIsAuthChecking(true);
    checkAuth().then(setIsAuthChecking(false));
  }, []);

  // Проверка наличия данных в localStorage
  useEffect(() => {
    const localSearchMovies = localStorage.getItem('searchedMovies');
    const localSearchValue = localStorage.getItem('searchValue');

    if (isLoggedIn && localSearchValue && localSearchMovies) {
      setSearchedMovies(JSON.parse(localSearchMovies));
      setSearchValue(JSON.parse(localSearchValue));
      setIsSearching(true);
    }
    return;
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route path="/" exact>
          <Main isLoggedIn={isLoggedIn} />
        </Route>

        <ProtectedRoute
          path="/movies"
          component={Movies}
          isLoggedIn={isLoggedIn}
          isLoading={isLoading}
          isChecking={isAuthChecking}
          isSearching={isSearching}
          movies={searchedMovies}
          searchValue={searchValue}
          savedMoviesIds={savedMovieIds}
          searchMovies={searchMovies}
          saveMovie={saveMovie}
          removeMovie={removeMovie}
        />

        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          isLoggedIn={isLoggedIn}
          isChecking={isAuthChecking}
          movies={searchedSavedMovies}
          searchMovies={searchSavedMovies}
          removeMovie={removeMovie}
        />

        <ProtectedRoute
          path="/profile"
          isLoggedIn={isLoggedIn}
          component={Profile}
          isChecking={isAuthChecking}
          onUpdateProfile={handleUpdateProfile}
          onSignout={handleSignout}
        />

        <Route path="/sign-in">
          {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Redirect to="/" />}
        </Route>

        <Route path="/sign-up">
          {!isLoggedIn ? <Register onRegister={handleRegister} /> : <Redirect to="/" />}
        </Route>

        <Route path="*" component={NotFound} />
      </Switch>

      <TooltipPopup
        image={imgTooltipPopup}
        message={messageTooltipPopup}
        isOpen={isTooltipPopupOpen}
        setIsOpen={setIsTooltipPopupOpen}
      />
    </CurrentUserContext.Provider>
  );
};

export default App;
