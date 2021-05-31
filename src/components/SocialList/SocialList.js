import "./SocialList.css";
import React from "react";
import { socials } from "../../utils/constants";

const SocialList = (props) => {
  const { type = "", sliceItem = 0 } = props;
  return (
    <ul className={`social-nav__list social-nav__list_type_${type}`}>
      {socials.slice(sliceItem).map((social) => (
        <li
          className={`social-nav__item social-nav__item_type_${type}`}
          key={social.id}
        >
          <a
            href={social.link}
            className={`social-nav__link social-nav__link_type_${type}`}
            target={"&lowbar;blank"}
          >
            {social.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
