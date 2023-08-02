/* eslint-disable no-continue */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line no-alert

const personMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,

  start() {
    while (this.count < 1 || !this.count || Number.isNaN(this.count)) {
      this.count = +prompt('How many films did you watched?', '100');
    }
  },

  rememberMyFilms() {
    let counter;

    this.count > 1 ? counter = 2 : counter = 1;
    for (let i = 0; i < counter; i += 1) {
      const movieName = prompt('What was the name of one of the movies you watched?', `Avatar ${i + 1}`);
      const movieRate = prompt('How much would it be rated?', '10');

      if (!movieName || !movieRate || movieName.length > 50) {
        i -= 1;
        continue;
      }

      this.movies[movieName.trim()] = movieRate;
    }
  },

  writeYourGenres() {
    const userGenres = prompt('Enter your favorite genres separated by commas:', 'Comedy,Horror,Thriller');

    !userGenres ? this.writeYourGenres() : this.genres = userGenres.split(', ');

    this.genres.forEach(((item, i) => console.log(`Your favorite genre #${i + 1} is ${item}`)));
  },

  detectPersonalLevel() {
    if (this.count < 10) {
      alert('Few movies watched!');
    } else if (this.count < 30) {
      alert('You are a classic spectator!');
    } else {
      alert('Are you a cinephile!');
    }
  },

  toggleVisibleMyDB() {
    this.private = !this.private;
  },

  showMyDB() {
    !this.private ? console.dir(this) : null;
  },
};

personMovieDB.start();
personMovieDB.rememberMyFilms();
personMovieDB.writeYourGenres();
personMovieDB.detectPersonalLevel();
// personMovieDB.toggleVisibleMyDB();
personMovieDB.showMyDB();
