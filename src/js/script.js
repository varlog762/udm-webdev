/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  const promoContainer = document.querySelector('.promo__content');
  const bgElem = promoContainer.querySelector('.promo__bg');
  const genreElem = promoContainer.querySelector('.promo__genre');
  const advCollection = document.querySelectorAll('.promo__adv img');
  const moviesList = promoContainer.querySelector('.promo__interactive-list');
  const addMovieForm = document.forms[1];
  const { addMovieInput } = addMovieForm;
  const { submitBtn } = addMovieForm;
  const { favMovieChckbx } = addMovieForm;

  const makeChanges = () => {
    genreElem.innerHTML = 'Драма';
    bgElem.style.backgroundImage = 'url("./img/bg.jpg")';
  };

  makeChanges();

  const deleteAdv = (container) => container.forEach((item) => item.remove());

  deleteAdv(advCollection);

  function sortAndAddMovies(films, parent) {
    films.sort();
    parent.innerHTML = '';
    films.forEach((item, i) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${item}
        <div class="delete"></div>
      </li>
    `;
    });
  }

  sortAndAddMovies(movieDB.movies, moviesList);

  document.body.addEventListener('click', (event) => {
    const { target } = event;

    switch (target) {
      case (submitBtn):
        event.preventDefault();

        (addMovieInput.value.length > 21) ? addMovieInput.value = `${addMovieInput.value.slice(0, 18)}...` : null;

        movieDB.movies.push(addMovieInput.value);
        sortAndAddMovies(movieDB.movies, moviesList);

        favMovieChckbx.checked ? console.log('It\'s Favorite Movie!') : null;
        break;
      case (target.closest('.delete')):
        const movieName = target.parentElement.innerText;
        let idx;

        movieDB.movies.forEach((item, index) => {
          movieName.toLowerCase().includes(item.toLowerCase()) ? idx = index : null;
        });
        movieDB.movies.splice(idx, 1);
        sortAndAddMovies(movieDB.movies, moviesList);
        break;
    }
  });
});
