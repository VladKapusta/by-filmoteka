import { refs } from './refs';
import fatchFilms from './fetch-films';
import genre from './genre';

refs.btnNextPage.addEventListener('click', onNextPage);
refs.btnEndPage.addEventListener('click', onEndPage);
refs.listBtnPages.addEventListener('click', onBtnNumbPage);

const featchFilms = new fatchFilms();

async function renderFilmCards() {
  const films = await featchFilms.searchPopularFilms();

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
  refs.cardsList.innerHTML = '';
  refs.cardsList.innerHTML += markupPopularFilms;
}
renderFilmCards();
// =============================

function onNextPage() {
  featchFilms.pageIncr();
  const btnPreActive = document.querySelector(
    `[data-numb="${featchFilms.getPage() - 1}"]`
  );
  const btnActive = document.querySelector(
    `[data-numb="${featchFilms.getPage()}"]`
  );
  if (featchFilms.getPage() <= 3) {
    btnActive.classList.add('btn-page-curr');
    btnPreActive.classList.remove('btn-page-curr');
  } else if (featchFilms.getPage() > 3) {
    btnLog(featchFilms.getPage());
  }
  //==============
  refs.btnEndPage.classList.remove('page__button-end');
  renderFilmCards();
}

function onEndPage() {
  featchFilms.pageDecr();
  const btnActive = document.querySelector(
    `[data-numb="${featchFilms.getPage()}"]`
  );
  const btnAfterActive = document.querySelector(
    `[data-numb="${featchFilms.getPage() + 1}"]`
  );

  if (featchFilms.getPage() < 3) {
    btnActive.classList.add('btn-page-curr');
    btnAfterActive.classList.remove('btn-page-curr');
  } else if (featchFilms.getPage() >= 3) {
    btnLog(featchFilms.getPage());
  } 
  //=======
  renderFilmCards();
  if (featchFilms.getPage() === 1) {
    refs.btnEndPage.classList.add('page__button-end');
  }
}

function btnLog(numbPage) {
  refs.preBeforeActiveBtn.textContent = numbPage - 2;
  refs.beforeActiveBtn.textContent = numbPage - 1;
  refs.activeBtn.textContent = numbPage;
  refs.afterActivBtn.textContent = numbPage + 1;
  refs.nextAfterActiveBtn.textContent = numbPage + 2;
}

function onBtnNumbPage(e) {
  const currentActivBtn = document.querySelector('.btn-page-curr');
  let numbPage = +e.target.textContent;
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (currentActivBtn) {
    currentActivBtn.classList.remove('btn-page-curr');
  }
  if (numbPage >= 3) {
    refs.activeBtn.textContent = numbPage;
    refs.activeBtn.classList.add('btn-page-curr');

    refs.preBeforeActiveBtn.textContent = numbPage - 2;
    refs.beforeActiveBtn.textContent = numbPage - 1;
    refs.afterActivBtn.textContent = numbPage + 1;
    refs.nextAfterActiveBtn.textContent = numbPage + 2;
  } else if (numbPage === 2) {
    refs.beforeActiveBtn.textContent = numbPage;
    refs.beforeActiveBtn.classList.add('btn-page-curr');

    refs.preBeforeActiveBtn.textContent = numbPage - 1;
    refs.activeBtn.textContent = numbPage + 1;
    refs.afterActivBtn.textContent = numbPage + 2;
    refs.nextAfterActiveBtn.textContent = numbPage + 3;
  } 
  refs.btnEndPage.classList.remove('page__button-end');
  featchFilms.setPage(numbPage);
  renderFilmCards();
  if (numbPage === 1) {
    e.target.classList.add('btn-page-curr');
    refs.btnEndPage.classList.add('page__button-end');
    return
  }
}