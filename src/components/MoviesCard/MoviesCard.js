import './MoviesCard.css';
import React, { useEffect, useState } from 'react';
import defaultPhoto from '../../images/photo-movie.jpg';

function MoviesCard(props) {
  const { listType, movie, saveMovie, removeMovie, savedMoviesIds } = props;

  const {
    country,
    director,
    year,
    description,
    image,
    thumbnail,
    nameRU,
    nameEN,
    duration,
    trailer,
    movieId,
  } = movie;

  const [isSaved, getIsSaved] = useState(false);

  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  const durationStr = hours ? `${hours}ч ${minutes}м` : `${minutes}мин`;

  const handleSave = () => {
    saveMovie({
      country: country || 'Данные отсутствуют',
      director: director || 'Данные отсутствуют',
      duration: duration || 0,
      year: year || 'Данные отсутствуют',
      description: description || '',
      image: image || 'https://unsplash.com/photos/49uySSA678U',
      trailer: trailer || 'https://youtube.com',
      thumbnail: thumbnail || 'https://unsplash.com/photos/49uySSA678U',
      nameRU: nameRU || 'Данные отсутствуют',
      nameEN: nameEN || 'Данные отсутствуют',
      movieId,
    });
  };

  const handleRemove = () => {
    removeMovie({ movieId });
  };

  const handleClickImg = () => {
    window.open(trailer);
  };

  useEffect(() => {
    return savedMoviesIds && savedMoviesIds.includes(movieId)
      ? getIsSaved(true)
      : getIsSaved(false);
  }, [savedMoviesIds, movieId]);

  return (
    <article className="movie">
      <h2 className="movie__title">{nameRU}</h2>
      <p className="movie__time">{durationStr}</p>
      {listType === 'main' ? (
        <button
          className={`movie__button-save ${isSaved ? 'movie__button-save_active' : ''}`}
          type="button"
          onClick={!isSaved ? handleSave : handleRemove}
        />
      ) : (
        <button className={'movie__button-delete'} type="button" onClick={handleRemove} />
      )}
      <img
        className="movie__img"
        alt={nameRU}
        src={image || defaultPhoto}
        onClick={handleClickImg}
      />
    </article>
  );
}

export default MoviesCard;
