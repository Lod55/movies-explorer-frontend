import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import AuthNav from "../AuthNav/AuthNav";

const Header = () => {
  return (
    <header className={'header'}>
      <Link to="/">
        <img src={logo} alt="Логотип проекта" className="header__logo"/>
      </Link>
      <AuthNav/>
    </header>
  );
};

export default Header;
