import "./Techs.css";
import React from "react";
import Section from "../Section/Section";
import { techs } from "../../utils/constants";

const Techs = () => {
  return (
    <Section
      sectionTitle={"Технологии"}
      classSection={"techs"}
      classSectionTitle={"techs__title"}
      sectionId={"techs"}
    >
      <h3 className={"techs__subtitle"}>7 технологий</h3>
      <p className={"techs__text"}>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className={"techs__list"}>
        {techs.map((tech) => (
          <li className={"techs__item"} key={tech.id}>
            <p className={"tech"}>{tech.name}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Techs;
