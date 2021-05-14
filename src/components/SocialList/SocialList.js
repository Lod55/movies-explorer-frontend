import './SocialList.css';
import React from 'react';
import { socials } from '../../utils/constants';

const SocialList = (props) => {
 const {
   typeLinkClass = ''
 } = props;
  return (
      <ul className={'social-nav__list'}>
        {socials.map((social, index) => (
          <li className={'social-nav__item'} key={index}>
            <a href={social.link} className={`social-nav__link ${typeLinkClass}`} target={'&lowbar;blank'}>
              {social.name}
            </a>
          </li>
        ))}
      </ul>
  );
};

export default SocialList;
