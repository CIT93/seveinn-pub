function displayMovieRates(movies) {
    const movieElement = document.getElementById("movies");
    movies.forEach(function (movie) {
      let recommendation;
  
      if (movie.rating >= 8 && movie.watched >= 5) {
        recommendation = "Highly recommended!";
      } else if (movie.rating >= 7 || movie.watched >= 3) {
        recommendation = "Worth watching!";
      } else {
        recommendation = "Not recommended.";
      }
  
      const movieEl = document.createElement("p"); // Now outside if-else
      movieEl.textContent = `${movie.title} had a rating of ${movie.rating}, released in ${movie.year}. Watched: ${movie.watched} times. ${recommendation}`;
      movieElement.appendChild(movieEl);
    });
  }
  
  displayMovieRates([
    {
      title: "The Fighter",
      year: 2010,
      rating: 8,
      watched: 7,
    },
    {
      title: "American Me",
      year: 1992,
      rating: 8,
      watched: 5,
    },
    {
      title: "Phenomenon",
      year: 1996,
      rating: 6,
      watched: 2,
    },
    {
      title: "Heat",
      year: 1995,
      rating: 6,
      watched: 9,
    }
  ]);
  