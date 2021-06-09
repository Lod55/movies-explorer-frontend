import './SearchForm.css';
import React, { useEffect, useState } from 'react';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { searchVoidMessage } from '../../utils/constants';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Error from '../Error/Error';

const SearchForm = ({ searchMovies, searchValue }) => {
  const { values, handleChange } = useFormWithValidation();

  const [voidMessage, setVoidMessage] = useState('');
  const [isCheckbox, setIsCheckbox] = useState(searchValue?.isCheckbox);

  const handleCheckboxChange = (e) => {
    setIsCheckbox(!isCheckbox);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.movieSearch) {
      searchMovies(values.movieSearch, isCheckbox);
      setVoidMessage('');
    } else {
      setVoidMessage(searchVoidMessage);
    }
    return;
  };

  useEffect(() => {}, [searchValue]);

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit} name="form-search" id="form-search">
        <div className="search-form__input-container">
          <input
            className="search-form__input"
            placeholder={searchValue?.keyword || 'Фильм'}
            type="text"
            name="movieSearch"
            id="movieSearch"
            value={values.movieSearch || ''}
            onChange={handleChange}
          />
          <button className="search-form__button" type="submit" />
        </div>
        <Error className="search-form__error" id="search-form-error" text={voidMessage} />
        <div className="search-form__labels">
          <FilterCheckbox
            text="Короткометражки"
            id="switchShortMovie"
            onCheckboxChange={handleCheckboxChange}
            isCheckbox={isCheckbox}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
