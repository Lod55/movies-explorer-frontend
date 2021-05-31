import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const { listType } = props;

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const defaultMovies = [
    { id: generateId(), saved: true },
    { id: generateId(), saved: false },
    { id: generateId(), saved: false },
    { id: generateId(), saved: false },
    { id: generateId(), saved: true },
    { id: generateId(), saved: true },
    { id: generateId(), saved: false },
    { id: generateId(), saved: false },
  ];

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
