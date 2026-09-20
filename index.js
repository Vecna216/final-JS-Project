//  send Data requests
// http://www.omdbapi.com/?apikey=d3fd2ab
// poster API requests
// http://img.omdbapi.com/?apikey=d3fd2ab



async function main() {
  const movies = await fetch("http://www.omdbapi.com/?apikey=d3fd2ab&s=fast");
  const moviesData = await movies.json();
  const movieData = await Object.values(moviesData);
  const movieListEL = document.querySelector('.movies')
  console.log(movieData)
  movieListEL.innerHTML = movieData.map(movie => `<div class="movie">
    <div class="movie-poster">
      <img src="${movie.poster}" alt="movie">
    </div>
    <h3 class="movie__title">${movie.Title}</h3>
    <h4 class="movie__year">${movie.Year}</h4>
  </div>`).join("")
}

main ();