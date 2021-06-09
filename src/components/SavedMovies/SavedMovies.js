import React from 'react';
import './SavedMovies.css';

import Header from '../Header/Header';
import Content from '../Content/Content';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const SavedMovies = (props) => {
  const { isLoggedIn, isLoading, movies, removeMovie, searchMovies } = props;
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Content>
        <SearchForm searchMovies={searchMovies} />
        <MoviesCardList
          listType="save"
          isLoading={isLoading}
          movies={movies}
          removeMovie={removeMovie}
        />
      </Content>
      <Footer />
    </>
  );
};

export default SavedMovies;
