//  send Data requests
// http://www.omdbapi.com/?apikey=d3fd2ab
// poster API requests
// http://img.omdbapi.com/?apikey=d3fd2ab

function processText() {
  const inputField = document.getElementById('myText');
  const input = inputField.value.trim();

  if (!input) return;

  main(input);
}

async function main(input) {
  const movies = await fetch(`http://www.omdbapi.com/?apikey=d3fd2ab&s=${encodeURIComponent(input)}`);
  const moviesData = await movies.json();
  const movieData = await Object.values(moviesData);
  const firstSix = movieData[0].slice(0, 6)
  const movieListEL = document.querySelector('.movies')
  movieListEL.innerHTML = firstSix.map(movie => `<div class="movie">
    <div class="movie-poster">
      <img class="movie__img" src="${movie.Poster}" alt="movie">
    </div>
    <div class="movie__title-wrapper">
      <h3 class="movie__title">${movie.Title}</h3>
    </div>
    <h4 class="movie__year">${movie.Year}</h4>
  </div>`).join("")
}






