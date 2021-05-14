import './AuthNav.css';
import React from "react";
import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav className={'auth-nav'}>
      <ul className={'auth-nav__list'}>
        <li className={'auth-nav__item'}>
          <Link to={'/'} className={'auth-nav__link'}>Регистрация</Link>
        </li>
        <li className={'auth-nav__item_type_login'}>
          <Link to={'/'} className={'auth-nav__link auth-nav__link_type_login'}>Войти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;

