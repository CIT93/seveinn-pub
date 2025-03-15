function displayMovies(movies) {
  const movieEl = document.getElementById("movies");
  const table = document.createElement("table");
  const row = document.createElement("tr");

  movies.forEach(function (movie) {
    if (movie.rating >= 7 && movie.watched <= 3) {
      for (const key in movie) {
        console.log(movie[key]);
        const cell = document.createElement("td");
        cell.textContent = movie[key];
        row.appendChild(cell);
      }
      table.appendChild(row);
      movieEl.appendChild(table); 
    }
  });
}

displayMovies([
  {
    title: "The Fighter",
    year: 2010,
    rating: 8,
    watched: 2,
  },
  {
    title: "American Me",
    year: 1992,
    rating: 7,
    watched: 5,
  },
  {
    title: "Phenomenon",
    year: 1996,
    rating: 6,
    watched: 5,
  },
  {
    title: "Heat",
    year: 1995,
    rating: 8,
    watched: 10, 
  },
]);
