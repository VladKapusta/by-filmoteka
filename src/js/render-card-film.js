export default function renderCardInLibrary(arr) {
  return arr
    .map(({ original_title, genres, release_date, popularity, poster_path, id }) => {
      const genr = genres
        .map(el => el.name)
        .slice(0, 3)
        .join(', ');
      return ` <li class="cards__item" data-id="${id}">
            <div class="film">
              <div class="poster__wrraper">
              <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" class="poster">
              </div>
              <div class="film__titel">
              <h2 class="film__name">${original_title}</h2>
              <div class="film__pre-info">
              <p class="film__gener">${genr}</p>
              <span>|</span>
              <p class="film__reliz">${release_date.slice(0, 4)}</p>
              </div>
              </div>
              </div>
              </li>`;
    })
    .join(' ');
}
