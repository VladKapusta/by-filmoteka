var e={save:(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}};const t={body:document.querySelector("body"),cardsList:document.querySelector(".cards__list"),cardsItem:document.querySelector(".cards__item"),modal:document.querySelector(".backdrop"),closeModal:document.querySelector(".modal__close"),modalInform:document.querySelector(".wrraper-inform"),buttonModal:document.querySelector(".modal__buttons"),inputHeader:document.querySelector(".serch-films__input"),btnSearchFilm:document.querySelector(".serch-films__button"),btnEndPage:document.querySelector(".page__button-end"),btnNextPage:document.querySelector(".page__button-next"),btnsLibrary:document.querySelector(".lib__button"),libCardsList:document.querySelector(".library__cards"),listBtnPages:document.querySelector(".page__list"),preBeforeActiveBtn:document.querySelector('[data-numb="1"]'),beforeActiveBtn:document.querySelector('[data-numb="2"]'),activeBtn:document.querySelector('[data-numb="3"]'),afterActivBtn:document.querySelector('[data-numb="4"]'),nextAfterActiveBtn:document.querySelector('[data-numb="5"]')};t.btnsLibrary.addEventListener("click",(function(r){if("BUTTON"!==r.target.nodeName)return;if(e.load(r.target.textContent)){const n=e.load(r.target.textContent).map((({original_title:e,genres:t,release_date:r,popularity:n,poster_path:o,id:a})=>` <li class="cards__item" data-id="${a}">\n            <div class="film">\n              <div class="poster__wrraper">\n              <img src="https://image.tmdb.org/t/p/w500${o}" alt="" class="poster">\n              </div>\n              <div class="film__titel">\n              <h2 class="film__name">${e}</h2>\n              <div class="film__pre-info">\n              <p class="film__gener">${t.map((e=>e.name)).slice(0,3).join(", ")}</p>\n              <span>|</span>\n              <p class="film__reliz">${r.slice(0,4)}</p>\n              </div>\n              </div>\n              </div>\n              </li>`)).join(" ");t.libCardsList.innerHTML="",t.libCardsList.innerHTML+=n}}));
//# sourceMappingURL=library.94f01abc.js.map