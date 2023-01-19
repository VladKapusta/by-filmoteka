const e={cardsList:document.querySelector(".cards__list"),cardsItem:document.querySelector(".cards__item"),modal:document.querySelector(".backdrop"),closeModal:document.querySelector(".modal__close"),modalInform:document.querySelector(".wrraper-inform"),buttonModal:document.querySelector(".modal__buttons"),inputHeader:document.querySelector(".serch-films__input"),btnSearchFilm:document.querySelector(".serch-films__button"),btnEndPage:document.querySelector(".page__button-end"),btnNextPage:document.querySelector(".page__button-next"),btnsLibrary:document.querySelector(".lib__button"),libCardsList:document.querySelector(".library__cards"),listBtnPages:document.querySelector(".page__list"),preBeforeActiveBtn:document.querySelector('[data-numb="1"]'),beforeActiveBtn:document.querySelector('[data-numb="2"]'),activeBtn:document.querySelector('[data-numb="3"]'),afterActivBtn:document.querySelector('[data-numb="4"]'),nextAfterActiveBtn:document.querySelector('[data-numb="5"]')};class t{searchPopularFilms(){return fetch(`${this.API}trending/movie/day?api_key=${this.API_KEY}&page=${this.page}`).then((e=>e.json()))}searchFilmsToId(){return fetch(`${this.API}movie/${this.id}?api_key=${this.API_KEY}`).then((e=>e.json()))}searchFilmsToName(e){return fetch(`${this.API}search/movie?api_key=${this.API_KEY}&language=en-US&query=${e}`).then((e=>e.json()))}setFilmId(e){this.id=e}getId(){return this.id}pageIncr(){this.page+=1}pageDecr(){this.page-=1}setPage(e){this.page=e}getPage(){return this.page}constructor(){this.API="https://api.themoviedb.org/3/",this.API_KEY="f337b3367ff87f6c35f27ef8641676b2",this.page=1,this.id=""}}const n=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function a(e){const t={};for(const e of n)t[e.id]=e.name;const a=e.map((e=>t[e]));return a.length<3?a.join(", "):a.slice(1,3).concat("Other").join(", ")}e.btnNextPage.addEventListener("click",(function(){i.pageIncr();const t=document.querySelector(`[data-numb="${i.getPage()-1}"]`),n=document.querySelector(`[data-numb="${i.getPage()}"]`);i.getPage()<=3?(n.classList.add("btn-page-curr"),t.classList.remove("btn-page-curr")):i.getPage()>3&&o(i.getPage());e.btnEndPage.classList.remove("page__button-end"),s()})),e.btnEndPage.addEventListener("click",(function(){i.pageDecr();const t=document.querySelector(`[data-numb="${i.getPage()}"]`),n=document.querySelector(`[data-numb="${i.getPage()+1}"]`);i.getPage()<3?(t.classList.add("btn-page-curr"),n.classList.remove("btn-page-curr")):i.getPage()>=3&&o(i.getPage());s(),1===i.getPage()&&e.btnEndPage.classList.add("page__button-end")})),e.listBtnPages.addEventListener("click",(function(t){const n=document.querySelector(".btn-page-curr");let a=+t.target.textContent;if("BUTTON"!==t.target.nodeName)return;n&&n.classList.remove("btn-page-curr");a>=3?(e.activeBtn.textContent=a,e.activeBtn.classList.add("btn-page-curr"),e.preBeforeActiveBtn.textContent=a-2,e.beforeActiveBtn.textContent=a-1,e.afterActivBtn.textContent=a+1,e.nextAfterActiveBtn.textContent=a+2):2===a&&(e.beforeActiveBtn.textContent=a,e.beforeActiveBtn.classList.add("btn-page-curr"),e.preBeforeActiveBtn.textContent=a-1,e.activeBtn.textContent=a+1,e.afterActivBtn.textContent=a+2,e.nextAfterActiveBtn.textContent=a+3);if(e.btnEndPage.classList.remove("page__button-end"),i.setPage(a),s(),1===a)return t.target.classList.add("btn-page-curr"),void e.btnEndPage.classList.add("page__button-end")}));const i=new t;async function s(){const t=(await i.searchPopularFilms()).results.map((({original_title:e,genre_ids:t,release_date:n,poster_path:i,id:s})=>` <li class="cards__item" data-id="${s}">\n      <div class="film">\n        <div class="poster__wrraper">\n        <img src="https://image.tmdb.org/t/p/w500${i}" alt="" class="poster">\n        </div>\n        <div class="film__titel">\n        <h2 class="film__name">${e}</h2>\n        <div class="film__pre-info">\n        <p class="film__gener">${a(t)}</p>\n        <span>|</span>\n        <p class="film__reliz">${n.slice(0,4)}</p>\n        </div>\n        </div>\n        </div>\n        </li>`)).join(" ");e.cardsList.innerHTML="",e.cardsList.innerHTML+=t}function o(t){e.preBeforeActiveBtn.textContent=t-2,e.beforeActiveBtn.textContent=t-1,e.activeBtn.textContent=t,e.afterActivBtn.textContent=t+1,e.nextAfterActiveBtn.textContent=t+2}s(),e.closeModal.addEventListener("click",(function(){e.modal.classList.add("is-hidden")}));var r={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}};const l=new t;let c,d;function m(e){if("BUTTON"!==e.target.nodeName)return;let t=e.target.textContent;const n=t.slice(7,t.length);let a=void 0===r.load(n)?[]:r.load(n);const{id:i,original_title:s,genres:o,overview:l,vote_average:d,vote_count:m,poster_path:u,release_date:_}=c;if(e.target.textContent===`remove ${n}`){e.target.textContent=`add to ${n}`;const t=a.filter((e=>e.id!==i));r.save(n,t)}a.map((e=>e.id)).includes(i)||(a.push({id:i,original_title:s,genres:o,overview:l,vote_average:d,vote_count:m,poster_path:u,release_date:_}),e.target.textContent=`remove ${n}`,r.save(n,a))}e.cardsList.addEventListener("click",(async function(t){d=t.target.closest(".cards__item").dataset.id,l.setFilmId(d),c=await l.searchFilmsToId(),""!==e.modalInform.textContent.trim()&&(e.modalInform.innerHTML="");(function({original_title:t,genres:n,overview:a,vote_average:i,vote_count:s,poster_path:o,popularity:r}){const l=n.map((e=>e.name)).slice(0,3).join(", "),c=`\n      <img src="https://image.tmdb.org/t/p/w500${o}" alt="" class="modal__poster" width="240" height="357">\n    </div>\n    <h2 class="modal__titel">${t}</h2>\n    <div class="modal__info-film">\n      <ul class="modal__info-list">\n          <li class="modal__info-item">\n              <p class="modal__vote">Vote / Votes</p>\n          </li>\n          <li class="modal__info-item">\n              <p class="modal__popularity">Popularity</p>\n          </li>\n          <li class="modal__info-item">\n              <p class="modal__origin-titel">Original Title</p>\n          </li>\n          <li class="modal__info-item">\n              <p class="modal__genre">Genre</p>\n          </li>\n      </ul>\n      <ul class="modal__value-list">\n          <li class="modal__value-item">\n              <p class="value-vote"><span>${i}</span>/ ${s}</p>\n          </li>\n          <li class="modal__value-item">\n              <p class="value-popularity">${r}</p>\n          </li>\n          <li class="modal__value-item">\n              <p class="value-origin-titel">${t}</p>\n          </li>\n          <li class="modal__value-item">\n              <p class="value-genre">${l} </p>\n          </li>\n      </ul>\n    </div>\n    <div class="modal__about">\n      <h2 class="modal__about-titel">About</h2>\n      <p class="modal__about-text">${a}</p>\n    </div>\n    <div class="modal__buttons">\n            <button class="modal__button button-watched">add to watched</button>\n            <button class="modal__button button-queue">add to queue</button>\n    </div>`;e.modalInform.innerHTML+=c})(c),e.modal.classList.remove("is-hidden");const n=document.querySelector(".modal__buttons");if(n.addEventListener("click",m),r.load("watched")&&r.load("queue")){const e=r.load("watched"),t=r.load("queue");e.some((e=>e.id===+d))&&(n.querySelector(".button-watched").textContent="remove watched"),t.some((e=>e.id===+d))&&(n.querySelector(".button-queue").textContent="remove queue")}}));const u=new t;e.btnSearchFilm.addEventListener("click",(async function(t){t.preventDefault(),e.cardsList.innerHTML="";const n=(await u.searchFilmsToName(e.inputHeader.value)).results.map((({original_title:e,genre_ids:t,release_date:n,poster_path:i,id:s})=>` <li class="cards__item" data-id="${s}">\n  <div class="film">\n    <div class="poster__wrraper">\n    <img src="https://image.tmdb.org/t/p/w500${i}" alt="" class="poster">\n    </div>\n    <div class="film__titel">\n    <h2 class="film__name">${e}</h2>\n    <div class="film__pre-info">\n    <p class="film__gener">${a(t)}</p>\n    <span>|</span>\n    <p class="film__reliz">${n.slice(0,4)}</p>\n    </div>\n    </div>\n    </div>\n    </li>`)).join(" ");e.cardsList.innerHTML+=n,e.inputHeader.value=""}));
//# sourceMappingURL=index.92461f41.js.map
