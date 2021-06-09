import React, { useEffect } from 'react';
import './TooltipPopup.css';

const TooltipPopup = ({ image, message, isOpen, setIsOpen }) => {
  const closePopup = () => {
    setIsOpen(false);
  };

  const handleLayoutClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup();
    }
  };

  const handleEscapeTap = (evt) => {
    if (evt.key === 'Escape') {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleEscapeTap);

    return () => {
      document.removeEventListener('keyup', handleEscapeTap);
    };
  });

  return (
    <div
      onClick={handleLayoutClick}
      className={`tooltip-popup ${isOpen && 'tooltip-popup_opened'}`}
    >
      <div className="tooltip-popup__container">
        <img className="tooltip-popup__image" src={image} alt="Результат запроса" />
        <p className="tooltip-popup__text">{message}</p>
        <button className="tooltip-popup__close-button" onClick={closePopup} />
      </div>
    </div>
  );
};

export default TooltipPopup;
