export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const parseMovies = (movies, BASE_URL) =>
  movies.map((movie) => {
    const parsedMovie = {
      ...movie,
      movieId: movie.id,
      saved: false,
      image: movie.image ? BASE_URL + movie.image.url : '',
      thumbnail: movie.image ? BASE_URL + movie.image.formats.thumbnail.url : '',
      trailer: movie.trailerLink,
    };

    return parsedMovie;
  });

export const searchByKeyword = (movies, keyword = '', isCheckbox) => {
  const maxDuration = isCheckbox && 40;
  const lowerCaseKeyword = keyword.toLowerCase();

  const seachedMovies = movies.filter(
    (movie) =>
      (keyword ? movie.nameRU.toLowerCase().includes(lowerCaseKeyword) : true) &&
      (isCheckbox ? movie.duration < maxDuration : movie)
  );

  return seachedMovies.sort((a, b) => {
    if (a.nameRU < b.nameRU) return -1;
    if (a.nameRU > b.nameRU) return 1;
    return 0;
  });
};
