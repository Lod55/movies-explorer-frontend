import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { defaultMovies } from "../../utils/constants";

function MoviesCardList(props) {
  const { listType } = props;

  return (
    <section className="movies">
      <ul className="movies__list">
        {listType === "main"
          ? defaultMovies.map((movie) => (
              <li className="movies__item" key={movie.id}>
                <MoviesCard listType={listType} isMovieSave={movie.saved} />
              </li>
            ))
          : defaultMovies
              .filter((movie) => movie.saved)
              .map((movie) => (
                <li className="movies__item" key={movie.id}>
                  <MoviesCard listType={listType} />
                </li>
              ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
