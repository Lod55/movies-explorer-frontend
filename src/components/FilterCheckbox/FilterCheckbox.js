import './FilterCheckbox.css';
import React from 'react';

const FilterCheckbox = (props) => {
  const { text, id, onCheckboxChange, isCheckbox } = props;
  return (
    <div className="search-form__checkbox-container">
      <label className="search-form__checkbox-label" htmlFor={id}>
        <input
          className="search-form__checkbox"
          type="checkbox"
          id={id}
          name={id}
          onChange={onCheckboxChange}
          defaultChecked={isCheckbox}
        />
        <span className="search-form__checkbox-switch" />
      </label>
      <p className="search-form__checkbox-text">{text}</p>
    </div>
  );
};

export default FilterCheckbox;
