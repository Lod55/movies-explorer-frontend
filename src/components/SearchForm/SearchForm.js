import "./SearchForm.css";
import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Error from "../Error/Error";

function SearchForm() {
  return (
    <section className="search">
      <form className="search-form">
        <div className="search-form__input-container">
          <input className="search-form__input" placeholder="Фильм" />
          <button className="search-form__button" type="submit" />
        </div>
        <Error className="search-form__error" id="search-form-error" />
        <div className="search-form__labels">
          <FilterCheckbox text="Короткометражки" id="switch-one" />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
