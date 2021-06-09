import { apiFetch } from './apiFetch';

export const BASE_URL = 'https://api.nomoreparties.co';

export const getBeatFilm = () =>
  apiFetch({
    BASE_URL,
    path: 'beatfilm-movies',
    credentials: 'same-origin',
  });
