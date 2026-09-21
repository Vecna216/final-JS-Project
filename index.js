let movieData = []

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const movieLoad = document.querySelector('.movies')

async function processText() {
  const inputField = document.getElementById('myText');
  const input = inputField.value.trim();
  
  if (!input) return;

  

  main(input);
}

async function main(input) {
  const divByClass = document.querySelector('.movies');
    divByClass.classList.add('movie__loading');
  movieLoad.classlist += ' movie__loading'
  await delay(1000);
  const movies = await fetch(`http://www.omdbapi.com/?apikey=d3fd2ab&s=${encodeURIComponent(input)}`);
  const moviesData = await movies.json();
  divByClass.classList.remove('movie__loading');

  movieData = moviesData.Search.slice(0, 6);

  displayMovies(movieData);
}

function filterMovies(event) {
  if (event.target.value === 'A-Z') {
    movieData.sort((a, b) => a.Title.localeCompare(b.Title));
  }
  else if (event.target.value === 'Z-A') {
    movieData.sort((a, b) => b.Title.localeCompare(a.Title));
  }
  else if (event.target.value === 'Newest') {
    movieData.sort((a, b) => Number(b.Year) - Number(a.Year));
  }
  displayMovies(movieData);
}

function displayMovies(movieData) {
  const movieListEL = document.querySelector('.movies') 
  movieListEL.innerHTML = movieData.map(movie => `<div class="movie">
    <div class="movie-poster">
      <img class="movie__img" src="${movie.Poster}" alt="movie">
    </div>
    <div class="movie__title-wrapper">
      <h3 class="movie__title">${movie.Title}</h3>
    </div>
    <h4 class="movie__year">${movie.Year}</h4>
  </div>`).join("")
}
