import './AuthNav.css';
import React from "react";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav className={'auth-nav'}>
      <NavLink to="/" className="auth-nav__link">
        Регистрация
      </NavLink>

      <NavLink to="/" className="auth-nav__link">
        <button className={'auth-nav__button'}>
          Войти
        </button>
      </NavLink>
    </nav>
  );
};

export default AuthNav;

