import './SocialNav.css';
import React from 'react';
import { telegram, github, praktikum } from '../../utils/constants';

const SocialNav = () => {
  return (
    <nav className="social-nav">
      <a href={praktikum} className="social-nav__link">
        Яндекс.Практикум
      </a>
      <a href={github} className="social-nav__link">
        Github
      </a>
      <a href={telegram} className="social-nav__link">
        Telegram
      </a>
    </nav>
  );
};

export default SocialNav;
