import React, { useEffect, useState } from 'react';

import './MoviesCardList.css';

import { renderMoviesNum } from '../../utils/constants';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = (props) => {
  const { listType, isLoading, movies, saveMovie, removeMovie, savedMoviesIds } = props;

  const [displayedMoviesNum, setDisplayedMoviesNum] = useState(0);
  const [displayedMoreMoviesNum, setDisplayedMoreMoviesNum] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMoreClick = () => {
    setDisplayedMoviesNum(displayedMoviesNum + displayedMoreMoviesNum);
  };

  const updateWindowWidth = () => {
    setTimeout(() => setWindowWidth(window.innerWidth), 2000);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    if (windowWidth >= 890) {
      setDisplayedMoviesNum(renderMoviesNum.sizeXL);
      setDisplayedMoreMoviesNum(renderMoviesNum.sizeS);
    } else if (windowWidth >= 480) {
      setDisplayedMoviesNum(renderMoviesNum.sizeL);
      setDisplayedMoreMoviesNum(renderMoviesNum.sizeXS);
    } else {
      setDisplayedMoviesNum(renderMoviesNum.sizeM);
      setDisplayedMoreMoviesNum(renderMoviesNum.sizeXS);
    }

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [windowWidth]);

  return (
    <>
      {!isLoading && movies.length === 0 && <p className="movies__text-void">Ничего не найдено</p>}
      <section className="movies">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <ul className="movies__list">
              {movies.reduce((moviesToRender, movie) => {
                moviesToRender.length < displayedMoviesNum &&
                  moviesToRender.push(
                    <li className="movies__item" key={movie.movieId}>
                      <MoviesCard
                        listType={listType}
                        movie={movie}
                        saveMovie={saveMovie}
                        removeMovie={removeMovie}
                        savedMoviesIds={savedMoviesIds}
                      />
                    </li>
                  );

                return moviesToRender;
              }, [])}
            </ul>
            {!isLoading && movies.length > displayedMoviesNum && (
              <button className="movies__button" type="button" onClick={handleMoreClick}>
                Ещё
              </button>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default MoviesCardList;
