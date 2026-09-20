//  send Data requests
// http://www.omdbapi.com/?apikey=d3fd2ab
// poster API requests
// http://img.omdbapi.com/?apikey=d3fd2ab

function processText(input) {
  inputField = document.getElementById('myText');
  return inputField.value;
}

async function main() {
  const movies = await fetch(`http://www.omdbapi.com/?apikey=d3fd2ab&s=${processText(input)}`);
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


main ();






