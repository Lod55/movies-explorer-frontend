import React, { useContext } from 'react';
import './Profile.css';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

import { patterns } from '../../utils/constants';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Error from '../Error/Error';

function Profile(props) {
  const { isLoggedIn, onUpdateProfile, onSignout } = props;

  const user = useContext(CurrentUserContext);

  const ucFirst = (str) => (!str ? str : str[0].toUpperCase() + str.slice(1));

  const { values, handleChange, resetFrom, errors, isValid, isValidInputs } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateProfile({
      name: values.nameUpd,
      email: values.emailUpd,
    }).then(resetFrom);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Content>
        <section className="profile">
          <h1 className="profile__title">{`Привет, ${ucFirst(user.name)}!`}</h1>
          <form
            className="profile__form"
            name="form-update"
            id="form-update"
            onSubmit={handleSubmit}
          >
            <Error
              className="profile__form__error"
              id="update-input-name-error"
              text={errors.nameUpd}
            />
            <div
              className={`profile__input-container ${
                isValidInputs.nameUpd ? 'profile__input-container_state_valid' : ''
              }`}
            >
              <input
                className="profile__input"
                placeholder="Имя"
                type="text"
                name="nameUpd"
                id="nameUpd"
                minLength="2"
                maxLength="30"
                pattern={patterns.name}
                value={values.nameUpd || ''}
                onChange={handleChange}
              />
              <p className="profile__text">{ucFirst(user.name)}</p>
            </div>
            <div
              className={`profile__input-container ${
                isValidInputs.emailUpd ? 'profile__input-container_state_valid' : ''
              }`}
            >
              <input
                className="profile__input"
                placeholder="E-mail"
                type="email"
                name="emailUpd"
                id="emailUpd"
                value={values.emailUpd || ''}
                pattern={patterns.email}
                onChange={handleChange}
              />
              <p className="profile__text">{user.email}</p>
            </div>
            <Error
              className="profile__form__error"
              id="update-input-name-error"
              text={errors.emailUpd}
            />
            <button
              className={`profile__button ${!isValid ? 'profile__button_invalid' : ''}`}
              type="submit"
            >
              Изменить данные
            </button>
          </form>
          <button
            className="profile__button profile__button_type_singout"
            type="button"
            onClick={onSignout}
          >
            Выйти из аккаунта
          </button>
        </section>
      </Content>
    </>
  );
}

export default Profile;
