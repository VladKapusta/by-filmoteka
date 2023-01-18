import { refs } from './refs';
import fatchFilms from './fetch-films';
import genre from './genre';

const featchFilms = new fatchFilms();
let films
async function renderFilmCards() {
   films = await featchFilms.searchPopularFilms();
 

  const markupPopularFilms = films.results
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
}

renderFilmCards();

// =============================

refs.btnNextPage.addEventListener('click', onNextPage);
function onNextPage() {
  featchFilms.pageIncr();
  refs.btnEndPage.classList.remove('page__button-end');
  refs.cardsList.innerHTML = '';
  renderFilmCards();
}

refs.btnEndPage.addEventListener('click', onEndPage);
function onEndPage() {
  featchFilms.pageDecr();
  refs.cardsList.innerHTML = '';
  renderFilmCards();
  if (featchFilms.getPage() === 1) {
    refs.btnEndPage.classList.add('page__button-end');
    return;
  }
}

const aa = document.querySelector('.page__list');
aa.addEventListener('click', onBtnNumbPage);

function onBtnNumbPage(e) {
  if(e.target.nodeName !== 'BUTTON') {
    return
  }
  let numbPage = +e.target.textContent;
  let currentActivBtn = document.querySelector('.btn-page-curr');
  refs.btnEndPage.classList.remove('page__button-end');
  if (currentActivBtn) {
    currentActivBtn.classList.remove('btn-page-curr');
  }
  e.target.classList.add('btn-page-curr');

  featchFilms.setPage(numbPage);
  refs.cardsList.innerHTML = '';
  renderFilmCards();
  if (numbPage === '1') {
    refs.btnEndPage.classList.add('page__button-end');
    return;
  }
}