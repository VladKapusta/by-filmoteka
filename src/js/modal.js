import { refs } from './refs';

refs.closeModal.addEventListener('click', onCloseBtn);
function onCloseBtn() {
  refs.modal.classList.add('is-hidden');
}

// refs.buttons.addEventListener('click', onButtonAddLocalHost);

// function onButtonAddLocalHost(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   if (e.target.classList.contains('button-watched')) {
//     localStorage.setItem('watched', refs.modal);
//   }
//   if (e.target.classList.contains('button-queue')) {
//     localStorage.setItem('queue', '2');
//   }
// }
