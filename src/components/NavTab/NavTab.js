import './NavTab.css';
import React from 'react';
import { NavLink } from "react-router-dom";

const NavTab = () => {
  return (
    <nav className={'tab-nav'}>
      <NavLink to="/" className="tab-nav__link">
        <button className={'tab-nav__button'}>О проекте</button>
      </NavLink>

      <NavLink to="/" className="tab-nav__link">
        <button className={'tab-nav__button'}>Технологии</button>
      </NavLink>

      <NavLink to="/" className="tab-nav__link">
        <button className={'tab-nav__button'}>Студент</button>
      </NavLink>
    </nav>
  );
};

export default NavTab;
