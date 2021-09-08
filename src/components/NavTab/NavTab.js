import './NavTab.css';
import React from 'react';
import { promoNav } from '../../utils/constants';

const NavTab = () => {
  return (
    <nav className={'tab-nav'}>
      <ul className={'tab-nav__list'}>
        {promoNav.map((item) => (
          <li className={'tab-nav__item'} key={item.id}>
            <a href={item.link} className="tab-nav__link">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavTab;
