import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Content from "../Content/Content";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

const SavedMovies = () => {
  return (
    <>
      <Header />
      <Content>
        <SearchForm />
        <MoviesCardList listType="save" />
      </Content>
      <Footer />
    </>
  );
};

export default SavedMovies;
