import "./Register.css";
import React from "react";
import Content from "../Content/Content";
import AuthForm from "../AuthForm/AuthForm";
import Error from "../Error/Error";

function Register() {
  return (
    <Content>
      <AuthForm
        title="Добро пожаловать!"
        formName="register"
        textButton="Зарегистрироваться"
        text="Уже зарегистрированы?"
        pathLink="/sign-in"
        textLink="Войти"
      >
        <label className="auth-form__label" htmlFor="name-register">
          Имя
        </label>
        <input
          className="auth-form__input"
          type="text"
          name="name-register"
          id="name-register"
          required
        />
        <Error
          className="auth-form__error"
          id="register-input-email-error"
          text=""
        />

        <label className="auth-form__label" htmlFor="email-register">
          E-mail
        </label>
        <input
          className="auth-form__input"
          type="email"
          name="email-register"
          id="email-register"
          required
        />
        <Error
          className="auth-form__error"
          id="register-input-email-error"
          text=""
        />

        <label className="auth-form__label" htmlFor="password-register">
          Пароль
        </label>
        <input
          className="auth-form__input"
          type="password"
          name="password-register"
          id="password-register"
          required
        />
        <Error
          className="auth-form__error"
          id="password-input-email-error"
          text=""
        />
      </AuthForm>
    </Content>
  );
}

export default Register;
