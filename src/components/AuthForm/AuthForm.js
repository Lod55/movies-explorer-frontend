import React from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const AuthForm = (props) => {
  const { title, formName, children, textButton, text, pathLink, textLink, onSubmit, isValid } =
    props;

  return (
    <section className="auth-form">
      <Link to="/" className="auth-form__link-logo">
        <img src={logo} alt="Логотип проекта" className="auth-form__logo" />
      </Link>

      <h1 className="auth-form__title">{title}</h1>
      <form
        name={`form-${formName}`}
        id={`form-${formName}`}
        className="auth-form__form"
        onSubmit={onSubmit}
      >
        {children}
        <button className={`auth-form__button ${!isValid ? 'auth-form__button_invalid' : ''}`}>
          {textButton}
        </button>
      </form>

      <p className="auth-form__text">
        {text}{' '}
        <Link to={pathLink} className="auth-form__link">
          {textLink}
        </Link>
      </p>
    </section>
  );
};

export default AuthForm;
