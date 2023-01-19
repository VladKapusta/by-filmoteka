const refs = {
  cardsList: document.querySelector('.cards__list'),
  cardsItem: document.querySelector('.cards__item'),
  modal: document.querySelector('.backdrop'),
  closeModal: document.querySelector('.modal__close'),
  modalInform: document.querySelector('.wrraper-inform'),
  buttonModal: document.querySelector('.modal__buttons'),

  inputHeader: document.querySelector('.serch-films__input'),
  btnSearchFilm: document.querySelector('.serch-films__button'),
  btnEndPage: document.querySelector('.page__button-end'),
  btnNextPage: document.querySelector('.page__button-next'),
  //=====================================
  btnsLibrary: document.querySelector('.lib__button'),
  libCardsList: document.querySelector('.library__cards'),

  listBtnPages: document.querySelector('.page__list'),

  preBeforeActiveBtn: document.querySelector('[data-numb="1"]'),
  beforeActiveBtn: document.querySelector('[data-numb="2"]'),
  activeBtn: document.querySelector('[data-numb="3"]'),
  afterActivBtn: document.querySelector('[data-numb="4"]'),
  nextAfterActiveBtn: document.querySelector('[data-numb="5"]'),
};
export { refs };
