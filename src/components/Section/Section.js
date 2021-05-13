import React from 'react';
import './Section.css';

const Section = (props) => {
  const {
    children,
    classSection = '',
    classSectionTitle = '',
    sectionTitle= '',
    sectionId = '',
  } = props;

  return (
    <section className={`section ${classSection}`} id={sectionId}>

      <h2 className={`section__title ${classSectionTitle}`}>
        {sectionTitle}
      </h2>

      {children}
    </section>
  );
};

export default Section;
