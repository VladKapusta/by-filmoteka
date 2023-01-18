import { refs } from './refs';
import fatchFilms from './fetch-films';
import genre from './genre';

const featchFilms = new fatchFilms();


refs.btnSearchFilm.addEventListener('click', onBtnSearchFilm);

async function onBtnSearchFilm(e) {
  e.preventDefault();
  refs.cardsList.innerHTML = '';
  const aa = await featchFilms.searchFilmsToName(refs.inputHeader.value);
  const markupPopularFilms = aa.results
    .map(({ original_title, genre_ids, release_date, poster_path, id }) => {
      return ` <li class="cards__item" data-id="${id}">
  <div class="film">
    <div class="poster__wrraper">
    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" class="poster">
    </div>
    <div class="film__titel">
    <h2 class="film__name">${original_title}</h2>
    <div class="film__pre-info">
    <p class="film__gener">${genre(genre_ids)}</p>
    <span>|</span>
    <p class="film__reliz">${release_date.slice(0, 4)}</p>
    </div>
    </div>
    </div>
    </li>`;
    })
    .join(' ');
  refs.cardsList.innerHTML += markupPopularFilms;

  refs.inputHeader.value = ''

  // console.log(refs.inputHeader.value)
}


