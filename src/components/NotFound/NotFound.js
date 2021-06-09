import './NotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className={'not-found'}>
      <h1 className={'not-found__title'}>404</h1>
      <p className={'not-found__subtitle'}>Страница не найдена</p>
      <Link to="/" className="not-found__link">
        Назад
      </Link>
    </main>
  );
};

export default NotFound;
