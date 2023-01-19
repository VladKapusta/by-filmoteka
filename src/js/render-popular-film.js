import { refs } from './refs';
import fatchFilms from './fetch-films';
import genre from './genre';

const featchFilms = new fatchFilms();
let films;
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

const preBeforeActiveBtn = document.querySelector('button[data-numb="1"]');
const beforeActiveBtn = document.querySelector('button[data-numb="2"]');
const activeBtn = document.querySelector('button[data-numb="3"]');
const afterActivBtn = document.querySelector('button[data-numb="4"]');
const nextAfterActiveBtn = document.querySelector('button[data-numb="5"]');

refs.btnNextPage.addEventListener('click', onNextPage);
function onNextPage() {
  featchFilms.pageIncr();
  //============

  const btnPreActive = document.querySelector(
    `button[data-numb="${featchFilms.getPage() - 1}"]`
  );

  const btnActive = document.querySelector(
    `button[data-numb="${featchFilms.getPage()}"]`
  );

  if (featchFilms.getPage() <= 3) {
    btnActive.classList.add('btn-page-curr');
    btnPreActive.classList.remove('btn-page-curr');
  } else if (featchFilms.getPage() > 3) {
     btnLog(featchFilms.getPage());
  }
  //==============
  refs.btnEndPage.classList.remove('page__button-end');
  refs.cardsList.innerHTML = '';
  renderFilmCards();
}
//-------------------------

refs.btnEndPage.addEventListener('click', onEndPage);
function onEndPage() {
  featchFilms.pageDecr();
  //=======
  const btnActive = document.querySelector(
    `button[data-numb="${featchFilms.getPage()}"]`
  );
  const btnAfterActive = document.querySelector(
    `button[data-numb="${featchFilms.getPage() + 1}"]`
  );

  if (featchFilms.getPage() < 3) {
    btnActive.classList.add('btn-page-curr');
    btnAfterActive.classList.remove('btn-page-curr');
  } else if (featchFilms.getPage() >= 3) {
    btnLog(featchFilms.getPage());
  }
  //=======
  refs.cardsList.innerHTML = '';
  renderFilmCards();
  if (featchFilms.getPage() === 1) {
    refs.btnEndPage.classList.add('page__button-end');
    return;
  }
}

function btnLog(numbPage) {
  preBeforeActiveBtn.textContent = numbPage - 2;
  beforeActiveBtn.textContent = numbPage - 1;
  activeBtn.textContent = numbPage;
  afterActivBtn.textContent = numbPage + 1;
  nextAfterActiveBtn.textContent = numbPage + 2;
}

const listBtnPages = document.querySelector('.page__list');
listBtnPages.addEventListener('click', onBtnNumbPage);

function onBtnNumbPage(e) {
  let numbPage = +e.target.textContent;
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  let currentActivBtn = document.querySelector('.btn-page-curr');
  
  if (currentActivBtn) {
    currentActivBtn.classList.remove('btn-page-curr');
  }
  e.target.classList.add('btn-page-curr');

  featchFilms.setPage(numbPage);
  refs.cardsList.innerHTML = '';
  renderFilmCards();
  if (numbPage === 1) {
    refs.btnEndPage.classList.add('page__button-end');
    return;
  }
  console.log(currentActivBtn)
}
