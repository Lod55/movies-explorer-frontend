import React from 'react';
import './Preloader.css';

const Preloader = ({ typeClass = '' }) => {
  return (
    <div className={`preloader ${typeClass}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
