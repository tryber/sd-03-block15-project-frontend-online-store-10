export const readMovies = () => JSON.parse(localStorage.getItem('movies'));

const saveMovies = (movies) => localStorage.setItem('movies', JSON.stringify(movies));

export const getMovies = () => (
  new Promise((resolve) => {
    console.log(resolve);
    setTimeout(() => {
      const movies = readMovies();
      resolve(movies);
    }, 2000);
  })
);

export const getMovie = (movieId) => {
  const movie = readMovies().find((mov) => mov.id === parseInt(movieId, 10));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movie);
    }, 2000);
  });
};

export const updateMovie = (updatedMovie) => {
  const movies = readMovies().map((movie) => {
    if (movie.id === parseInt(updatedMovie.id, 10)) {
      return { ...movie, ...updatedMovie };
    }
    return movie;
  });
  saveMovies(movies);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('OK');
    }, 1000);
  });
};

export const convertItem = (item, qtd = 1) => {
  const { id, title, thumbnail, price } = item;
  return ({ id, title, thumbnail, price, qtd });
};

export const createMovie = (movieData) => {
  let movies = readMovies();
  console.log(movies);
  if (!movies) {
    localStorage.setItem('movies', JSON.stringify([convertItem(movieData)]));
    return;
  }
  const newMovie = convertItem(movieData);
  movies = [...movies, newMovie];
  saveMovies(movies);
};

export const deleteMovie = (movieId) => {
  let movies = readMovies();
  movies = movies.find((movie) => movie.id !== parseInt(movieId, 10));
  saveMovies(movies);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 'OK' });
    }, 1000);
  });
};
