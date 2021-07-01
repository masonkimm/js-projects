const APIURL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const title = document.getElementById('movie__title');
const img = document.getElementById('movie__img');
const rating = document.getElementById('movie__rating');
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(APIURL);

async function getMovies(url) {
  const resp = await fetch(url);
  let data = await resp.json();
  console.log(data);
  showMovies(data.results);
}

function getRating(data) {
  if (data >= 8) {
    return 'green';
  } else if (data >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}
function cutString(string) {}

function showMovies(movies) {
  //clear main
  main.innerHTML = '';
  movies.forEach((movie) => {
    const {
      poster_path,
      original_title,
      vote_average,
      backdrop_path,
      overview,
    } = movie;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
    <img src="${IMGPATH + poster_path}" alt="" id="movie__img" />
        <div class="movie__info">
          <h3 id="movie__title">${original_title}</h3>
          <h3 id="movie__rating" 
          class='${getRating(
            vote_average
          )}'><strong>${vote_average}</strong></h3>
        </div>
        <div class='overview'> 
        <h4>
        <strong> Overview: </strong>
        <br>
        
        </h4>
        ${overview}
        </div>
    
    `;

    main.appendChild(movieElement);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchInput = search.value;
  // console.log(searchInput);
  search.value = '';
  if (searchInput) {
    getMovies(SEARCHAPI + searchInput);
  }
});
