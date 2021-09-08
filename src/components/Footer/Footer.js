import './Footer.css';
import React from 'react';
import SocialList from '../SocialList/SocialList';

const Footer = () => {
  return (
    <footer className="footer">
      <p className={'footer__text'}>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className={'footer__container'}>
        <p className="footer__copyright">&copy; {new Date().getFullYear()} Lod55</p>
        <SocialList type={'footer'} />
      </div>
    </footer>
  );
};

export default Footer;
