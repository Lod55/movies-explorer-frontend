import React from "react";
import "./AuthForm.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Error from "../Error/Error";

const AuthForm = (props) => {
  const { title, formName, children, textButton, text, pathLink, textLink } =
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
      >
        {children}
        <Error
          className="auth-form__error"
          id={`submit-${formName}-error`}
          text=""
        />
        <button className="auth-form__button">{textButton}</button>
      </form>

      <p className="auth-form__text">
        {text}{" "}
        <Link to={pathLink} className="auth-form__link">
          {textLink}
        </Link>
      </p>
    </section>
  );
};

export default AuthForm;
