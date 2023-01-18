import localSorege from './local-stor';
import { refs } from './refs';
import renderCardInLibrary from './render-card-film';

refs.btnsLibrary.addEventListener('click', onBtnRenderMarkup)

function onBtnRenderMarkup(e) {
    if(e.target.nodeName !== 'BUTTON') {
       return 
    }
    if(localSorege.load(e.target.textContent)){
        const renderMarkLib = renderCardInLibrary(localSorege.load(e.target.textContent))

    refs.libCardsList.innerHTML = '';
    refs.libCardsList.innerHTML += renderMarkLib;
    }
}
