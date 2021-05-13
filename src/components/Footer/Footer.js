import './Footer.css';
import React from 'react';
import SocialNav from "../SocialNav/SocialNav";

const Footer = () => {
  return (
    <footer className="footer">
      <p className={'footer__text'}>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className={'footer__container'}>
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <SocialNav/>
      </div>
    </footer>
  );
};

export default Footer;
