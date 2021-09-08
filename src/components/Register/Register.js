import './Register.css';
import React from 'react';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

import { patterns } from '../../utils/constants';

import Content from '../Content/Content';
import AuthForm from '../AuthForm/AuthForm';
import Error from '../Error/Error';

const Register = (props) => {
  const { onRegister } = props;

  const { values, handleChange, resetFrom, errors, isValid, isValidInputs } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({
      name: values.nameReg,
      email: values.emailReg,
      password: values.passwordReg,
    }).then(resetFrom);
  };

  return (
    <Content>
      <AuthForm
        title="Добро пожаловать!"
        formName="register"
        textButton="Зарегистрироваться"
        text="Уже зарегистрированы?"
        pathLink="/sign-in"
        textLink="Войти"
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <label className="auth-form__label" htmlFor="nameReg">
          Имя
        </label>
        <input
          className={`auth-form__input ${
            isValidInputs.nameReg ? 'auth-form__input_state_valid' : ''
          }`}
          type="text"
          name="nameReg"
          id="nameReg"
          minLength="2"
          maxLength="30"
          value={values.nameReg || ''}
          onChange={handleChange}
          pattern={patterns.name}
          required
        />
        <Error className="auth-form__error" id="register-input-email-error" text={errors.nameReg} />

        <label className="auth-form__label" htmlFor="emailReg">
          E-mail
        </label>
        <input
          className={`auth-form__input ${
            isValidInputs.emailReg ? 'auth-form__input_state_valid' : ''
          }`}
          type="email"
          name="emailReg"
          id="emailReg"
          value={values.emailReg || ''}
          onChange={handleChange}
          pattern={patterns.email}
          required
        />
        <Error
          className="auth-form__error"
          id="register-input-email-error"
          text={errors.emailReg}
        />

        <label className="auth-form__label" htmlFor="passwordReg">
          Пароль
        </label>
        <input
          className={`auth-form__input ${
            isValidInputs.passwordReg ? 'auth-form__input_state_valid' : ''
          }`}
          type="password"
          name="passwordReg"
          id="passwordReg"
          value={values.passwordReg || ''}
          onChange={handleChange}
          required
        />
        <Error
          className="auth-form__error"
          id="password-input-email-error"
          text={errors.passwordReg}
        />
      </AuthForm>
    </Content>
  );
};

export default Register;
