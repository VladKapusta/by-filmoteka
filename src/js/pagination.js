// import renderFilmCards from "./render-popular-film";
// import fatchFilms from './fetch-films';
// import { refs } from './refs';

// const featchFilms = new fatchFilms();


// refs.btnNextPage.addEventListener('click', onNextPage);
// refs.btnEndPage.addEventListener('click', onEndPage);
// refs.listBtnPages.addEventListener('click', onBtnNumbPage);

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


