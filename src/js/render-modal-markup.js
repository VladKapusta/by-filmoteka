import { refs } from './refs';
import fatchFilms from './fetch-films';
import localStorade from './local-stor';

const featchFilms = new fatchFilms();
let filmToId;
let filmId;
refs.cardsList.addEventListener('click', onCardItem);

async function onCardItem(e) {
  filmId = e.target.closest('.cards__item').dataset.id;
  featchFilms.setFilmId(filmId);
  filmToId = await featchFilms.searchFilmsToId();

  if (refs.modalInform.textContent.trim() !== '') {
    refs.modalInform.innerHTML = '';
  }
  renderModal(filmToId);

  refs.modal.classList.remove('is-hidden');
  const modalBtn = document.querySelector('.modal__buttons');
  modalBtn.addEventListener('click', onButtonAddLocalStorege);

  if (localStorade.load('watched') && localStorade.load('queue')) {
    const watched = localStorade.load('watched');
    const queue = localStorade.load('queue');
    if (watched.some(el => el.id === +filmId)) {
      modalBtn.querySelector('.button-watched').textContent = 'remove watched';
    }
    if (queue.some(el => el.id === +filmId)) {
      modalBtn.querySelector('.button-queue').textContent = 'remove queue';
    }
  }
}

function renderModal({
  original_title,
  genres,
  overview,
  vote_average,
  vote_count,
  poster_path,
  popularity,
}) {
  const genr = genres
    .map(el => el.name)
    .slice(0, 3)
    .join(', ');

  const markupCardFilm = `
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" class="modal__poster" width="240" height="357">
    </div>
    <h2 class="modal__titel">${original_title}</h2>
    <div class="modal__info-film">
      <ul class="modal__info-list">
          <li class="modal__info-item">
              <p class="modal__vote">Vote / Votes</p>
          </li>
          <li class="modal__info-item">
              <p class="modal__popularity">Popularity</p>
          </li>
          <li class="modal__info-item">
              <p class="modal__origin-titel">Original Title</p>
          </li>
          <li class="modal__info-item">
              <p class="modal__genre">Genre</p>
          </li>
      </ul>
      <ul class="modal__value-list">
          <li class="modal__value-item">
              <p class="value-vote"><span>${vote_average}</span>/ ${vote_count}</p>
          </li>
          <li class="modal__value-item">
              <p class="value-popularity">${popularity}</p>
          </li>
          <li class="modal__value-item">
              <p class="value-origin-titel">${original_title}</p>
          </li>
          <li class="modal__value-item">
              <p class="value-genre">${genr} </p>
          </li>
      </ul>
    </div>
    <div class="modal__about">
      <h2 class="modal__about-titel">About</h2>
      <p class="modal__about-text">${overview}</p>
    </div>
    <div class="modal__buttons">
            <button class="modal__button button-watched">add to watched</button>
            <button class="modal__button button-queue">add to queue</button>
    </div>`;

  refs.modalInform.innerHTML += markupCardFilm;
}

//=====================//=====================
function onButtonAddLocalStorege(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  let text = e.target.textContent;
  const keyWord = text.slice(7, text.length);

  let arrFilms =
    localStorade.load(keyWord) === undefined ? [] : localStorade.load(keyWord);

  const {
    id,
    original_title,
    genres,
    overview,
    vote_average,
    vote_count,
    poster_path,
    release_date,
  } = filmToId;
  if (e.target.textContent === `remove ${keyWord}`) {
    e.target.textContent = `add to ${keyWord}`;
    const aa = arrFilms.filter(el => el.id !== id);
    localStorade.save(keyWord, aa);
  }
  const arrFilmsId = arrFilms.map(el => el.id);
  if (!arrFilmsId.includes(id)) {
    arrFilms.push({
      id,
      original_title,
      genres,
      overview,
      vote_average,
      vote_count,
      poster_path,
      release_date,
    });
    e.target.textContent = `remove ${keyWord}`;
    localStorade.save(keyWord, arrFilms);
  }
}
