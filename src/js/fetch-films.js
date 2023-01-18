export default class fatchFilms {
  constructor() {
    this.API = 'https://api.themoviedb.org/3/';
    this.API_KEY = 'f337b3367ff87f6c35f27ef8641676b2';
    this.page = 1;
    this.id = '';
    // this.URL = `${this.API}?api_key=${this.API_KEY}&page=${this.page}`;
  }

  searchPopularFilms() {
    return fetch(`${this.API}trending/movie/day?api_key=${this.API_KEY}&page=${this.page}`).then(res =>
      res.json()
    );
  }
  searchFilmsToId() {
    return fetch(`${this.API}movie/${this.id}?api_key=${this.API_KEY}`).then(res =>
      res.json()
    );
  }
  searchFilmsToName(inputValue) {
    return fetch(`${this.API}search/movie?api_key=${this.API_KEY}&language=en-US&query=${inputValue}`).then(res =>
    res.json()
  );
  }
  setFilmId(newId){
    this.id = newId
  }
  getId() {
    return this.id
  }
  pageIncr() {
    this.page +=1
  }
  pageDecr() {
    this.page -=1
  }
  setPage(newPage) {
    this.page = newPage
  }
  getPage() {
    return this.page
  }
}

// fetch(
//   'https://api.themoviedb.org/3/movie/popular?api_key=f337b3367ff87f6c35f27ef8641676b2'
// ).then(res => console.log(res));
