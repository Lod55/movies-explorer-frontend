import { apiFetch } from './apiFetch';

const BASE_URL = 'https://api.app-movies.lod55.nomoredomains.icu';

// ---GET
export const getUser = () =>
  apiFetch({
    BASE_URL,
    path: 'users/me',
  });

export const getMovies = () =>
  apiFetch({
    BASE_URL,
    path: 'movies',
  });

export const checkAuth = () =>
  apiFetch({
    BASE_URL,
    path: 'check-auth',
  });

// ---POST
export const register = ({ name, email, password }) =>
  apiFetch({
    BASE_URL,
    path: 'signup',
    method: 'POST',
    body: { name, email, password },
  });

export const authorize = ({ email, password }) =>
  apiFetch({
    BASE_URL,
    path: 'signin',
    method: 'POST',
    body: { email, password },
  });

export const setMovie = ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailer,
  thumbnail,
  nameRU,
  nameEN,
  movieId,
}) =>
  apiFetch({
    BASE_URL,
    path: 'movies',
    method: 'POST',
    body: {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      thumbnail,
      nameRU,
      nameEN,
      movieId,
    },
  });

// ---PATCH
export const updateUser = ({ name, email }) =>
  apiFetch({
    BASE_URL,
    path: 'users/me',
    method: 'PATCH',
    body: { name, email },
  });

// ---DELETE
export const removeMovie = ({ movieId }) =>
  apiFetch({
    BASE_URL,
    path: `movies/${movieId}`,
    method: 'DELETE',
  });

export const logout = () =>
  apiFetch({
    BASE_URL,
    path: 'signout',
    method: 'DELETE',
  });
