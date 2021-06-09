import './AboutProject.css';
import React from 'react';
import Section from '../Section/Section';

const AboutProject = () => {
  return (
    <Section
      sectionTitle={'О проекте'}
      classSection={'about-project'}
      classSectionTitle={'about-project__title'}
      sectionId={'about-project'}
    >
      <div className={'about-project__two-columns'}>
        <div className="about-project__column">
          <h3 className={'about-project__subtitle'}>Дипломный проект включал 5 этапов</h3>
          <p className={'about-project__text'}>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>

        <div className="about-project__column">
          <h3 className={'about-project__subtitle'}>На выполнение диплома ушло 5 недель</h3>
          <p className={'about-project__text'}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>

      <div className={'about-project__diagrams'}>
        <span className={'about-project__diagram about-project__diagram_weeks-backend'}>
          1 неделя
        </span>
        <span className={'about-project__diagram about-project__diagram_weeks-frontend'}>
          4 недели
        </span>
        <span className={'about-project__diagram about-project__diagram_caption'}>Back-end</span>
        <span className={'about-project__diagram about-project__diagram_caption'}>Front-end</span>
      </div>
    </Section>
  );
};

export default AboutProject;
