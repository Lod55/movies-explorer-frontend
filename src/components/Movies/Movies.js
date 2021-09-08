import './Movies.css';
import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = (props) => {
  const {
    isLoggedIn,
    isLoading,
    isSearching,
    searchMovies,
    movies,
    searchValue,
    savedMoviesIds,
    saveMovie,
    removeMovie,
  } = props;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Content>
        <SearchForm searchMovies={searchMovies} searchValue={searchValue} />
        {isSearching ? (
          <MoviesCardList
            listType="main"
            isLoading={isLoading}
            movies={movies}
            saveMovie={saveMovie}
            removeMovie={removeMovie}
            savedMoviesIds={savedMoviesIds}
          />
        ) : (
          <p className="content__text">Воспользуйтесь поиском</p>
        )}
      </Content>
      <Footer />
    </>
  );
};

export default Movies;
