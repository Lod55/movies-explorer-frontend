import "./Movies.css";
import React from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

const Movies = () => {
  const defoultLoading = false;
  return (
    <>
      <Header />
      <Content>
        <SearchForm />
        {defoultLoading ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList listType="main" />
            <button className="movies__button" type="button">
              Ещё
            </button>
          </>
        )}
      </Content>
      <Footer />
    </>
  );
};

export default Movies;
