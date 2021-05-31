import "./Login.css";
import React from "react";
import Content from "../Content/Content";
import AuthForm from "../AuthForm/AuthForm";
import Error from "../Error/Error";

const Login = () => {
  return (
    <Content>
      <AuthForm
        title="Рады видеть!"
        formName="login"
        textButton="Войти"
        text="Ещё не зарегистрированы?"
        pathLink="/sign-up"
        textLink="Регистрация"
      >
        <label className="auth-form__label" htmlFor="email-login">
          E-mail
        </label>
        <input
          className="auth-form__input"
          type="email"
          name="email-login"
          id="email-login"
          required
        />
        <Error
          className="auth-form__error"
          id="login-input-email-error"
          text=""
        />

        <label className="auth-form__label" htmlFor="password-login">
          Пароль
        </label>
        <input
          className="auth-form__input"
          type="password"
          name="password-login"
          id="password-login"
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
};

export default Login;
