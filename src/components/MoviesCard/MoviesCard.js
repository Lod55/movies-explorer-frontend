import "./MoviesCard.css";
import React, { useState } from "react";
import defaultPhoto from "../../images/photo-movie.jpg";

function MoviesCard(props) {
  const { listType, isMovieSave } = props;
  const [isSaved, getIsSaved] = useState(isMovieSave);

  const handleClickSave = () => {
    getIsSaved(!isSaved);
  };
  return (
    <article className="movie">
      <h2 className="movie__title">33 слова о дизайне</h2>
      <p className="movie__time">1ч 47м</p>
      {listType === "main" ? (
        <button
          className={`movie__button-save ${
            isSaved ? "movie__button-save_active" : ""
          }`}
          type="button"
          onClick={handleClickSave}
        />
      ) : (
        <button className={"movie__button-delete"} type="button" />
      )}
      <img className="movie__img" alt="Фотография фильма" src={defaultPhoto} />
    </article>
  );
}

export default MoviesCard;
