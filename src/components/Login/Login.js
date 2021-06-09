import './Login.css';
import React from 'react';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

import { patterns } from '../../utils/constants';

import Content from '../Content/Content';
import AuthForm from '../AuthForm/AuthForm';
import Error from '../Error/Error';

const Login = (props) => {
  const { onLogin } = props;

  const { values, handleChange, resetFrom, errors, isValid, isValidInputs } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({
      email: values.emailLog,
      password: values.passwordLog,
    }).then(resetFrom);
  };

  return (
    <Content>
      <AuthForm
        title="Рады видеть!"
        formName="login"
        textButton="Войти"
        text="Ещё не зарегистрированы?"
        pathLink="/sign-up"
        textLink="Регистрация"
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <label className="auth-form__label" htmlFor="emailLog">
          E-mail
        </label>
        <input
          className={`auth-form__input ${
            isValidInputs.emailLog ? 'auth-form__input_state_valid' : ''
          }`}
          type="email"
          name="emailLog"
          id="emailLog"
          value={values.emailLog || ''}
          onChange={handleChange}
          pattern={patterns.email}
          required
        />
        <Error className="auth-form__error" id="login-input-email-error" text={errors.emailLog} />

        <label className="auth-form__label" htmlFor="passwordLog">
          Пароль
        </label>
        <input
          className={`auth-form__input ${
            isValidInputs.passwordLog ? 'auth-form__input_state_valid' : ''
          }`}
          type="password"
          name="passwordLog"
          id="passwordLog"
          value={values.passwordLog || ''}
          onChange={handleChange}
          required
        />
        <Error
          className="auth-form__error"
          id="password-input-email-error"
          text={errors.passwordLog}
        />
      </AuthForm>
    </Content>
  );
};

export default Login;
