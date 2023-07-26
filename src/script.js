// eslint-disable-next-line no-alert
const numberOfFilms = prompt('How many films did you watched?', '0');

const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i += 1) {
  // eslint-disable-next-line no-alert
  const movieName = prompt('What was the name of one of the movies you watched?', '');
  // eslint-disable-next-line no-alert
  const movieRate = prompt('How much would it be rated?', '10');
  personMovieDB.movies[movieName] = movieRate;
}
