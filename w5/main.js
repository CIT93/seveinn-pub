function displayMovies() {
  const movies = [
    { title: "The Fighter", year: 2010, rating: 8 },
    { title: "American Me", year: 1992, rating: 7 },
    { title: "Phenomenon", year: 1996, rating: 6 },
    { title: "Heat", year: 1995, rating: 8 }
  ];

  const output = document.getElementById("output");
  output.innerHTML = ""; // Clear previous content

  const table = document.createElement("table");  
  const headerRow = document.createElement("tr");
  ["Title", "Year", "Rating"].forEach(function(text) {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
}