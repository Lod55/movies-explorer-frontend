import "./Portfolio.css";
import React from "react";
import { portfolio } from "../../utils/constants";

const Portfolio = () => {
  return (
    <div className={"portfolio"}>
      <h3 className={"portfolio__title"}>Портфолио</h3>
      <ul className={"portfolio__list"}>
        {portfolio.map((item) => (
          <li className={"portfolio__item"} key={item.id}>
            <a
              className={"portfolio__link"}
              href={item.link}
              target={"&lowbar;blank"}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
