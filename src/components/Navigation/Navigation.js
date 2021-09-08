import './Navigation.css';
import React from 'react';
import { headerMenu } from '../../utils/constants';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  const { children, isActiveBurger } = props;

  return (
    <nav className={`navigation ${isActiveBurger ? 'active' : ''}`}>
      <ul className={'navigation__list'}>
        {isActiveBurger ? (
          <li className={'navigation__item'}>
            <NavLink
              to="/"
              className={'navigation__link'}
              activeClassName={'navigation__link_active'}
              exact
            >
              Главная
            </NavLink>
          </li>
        ) : (
          <></>
        )}

        {headerMenu.map((item) => (
          <li key={item.id} className={'navigation__item'}>
            <NavLink
              to={item.link}
              className={'navigation__link'}
              activeClassName={'navigation__link_active'}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      {children}
    </nav>
  );
};

export default Navigation;
