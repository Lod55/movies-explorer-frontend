import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox(props) {
  const { text, id } = props;
  return (
    <div className="search-form__checkbox-container">
      <label className="search-form__checkbox-label" htmlFor={id}>
        <input className="search-form__checkbox" type="checkbox" id={id} />
        <span className="search-form__checkbox-switch" />
      </label>
      <p className="search-form__checkbox-text">{text}</p>
    </div>
  );
}

export default FilterCheckbox;
