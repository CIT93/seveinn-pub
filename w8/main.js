 // function displayMovieRates(movies) {
//     const movieElement = document.getElementById("movies");
//     movies.forEach(function (movie) {
//       let recommendation;
  
//       if (movie.rating >= 8 && movie.watched >= 5) {
//         recommendation = "Highly recommended!";
//       } else if (movie.rating >= 7 || movie.watched >= 3) {
//         recommendation = "Worth watching!";
//       } else {
//         recommendation = "Not recommended.";
//       }
  
//       const movieEl = document.createElement("p"); // Now outside if-else
//       movieEl.textContent = `${movie.title} had a rating of ${movie.rating}, released in ${movie.year}. Watched: ${movie.watched} times. ${recommendation}`;
//       movieElement.appendChild(movieEl);
//     });
//   }
  
//   displayMovieRates([
//     {
//       title: "The Fighter",
//       year: 2010,
//       rating: 8,
//       watched: 7,
//     },
//     {
//       title: "American Me",
//       year: 1992,
//       rating: 8,
//       watched: 5,
//     },
//     {
//       title: "Phenomenon",
//       year: 1996,
//       rating: 6,
//       watched: 2,
//     },
//     {
//       title: "Heat",
//       year: 1995,
//       rating: 6,
//       watched: 9,
//     }
//   ]);
  
import { renderTbl,renderTblhead } from "./render.js";
import { determineHouseHoldPts,determineHouseSizePts } from "./cfp.js";
const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];
let cfpObj = {}; // Global

function start(houseHoldMembers, houseSize, firstName, lastName) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const fullName = `${firstName} ${lastName}`;
  const total = houseHoldPTS + houseSizePts;

  const cfpObj = {
    houseHoldMembers: houseHoldMembers,
    houseSize: houseSize,
    houseHoldPoints: houseHoldPTS,
    houseSizePoints: houseSizePts,
    fullName,
    cfpTotal: total,
  };
  cfpData.push(cfpObj);
}

function displayOutObj() {
  const output = document.getElementById("output");
  for (obj of cfpData) {
    const newH2 = document.createElement("h2");
    const newH3 = document.createElement("h3");
    newH2.textContent = `Hello there ${obj.fullName}`;
    newH3.textContent = `Carbon Footprint ${obj.cfpTotal}`;
    const newH4 = document.createElement("h4");
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of members of the household of ${obj.houseHoldMembers} (score: ${obj.houseHoldPoints}) `;
    newP.textContent += `and a ${obj.houseSize} size of home (score: ${obj.houseSizePoints}).`;
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newH4);
    OUTPUT.appendChild(newP);
  }
}
// start(1, "apt");
// start(2, "apt");
// start(3, "apt");
// start(4, "apt");
// start(5, "apt");
// start(6, "apt");
// start(7, "apt");
// start(1, "small");
// start(2, "small");
// start(3, "small");
// start(4, "small");
// start(5, "small");
// start(6, "small");
// start(7, "small");
// start(1, "medium");
// start(2, "medium");
// start(3, "medium");
// start(4, "medium");
// start(5, "medium");
// start(6, "medium");
// start(7, "medium");
// start(1, "large");
// start(2, "large");
// start(3, "large");
// start(4, "large");
// start(5, "large");
// start(6, "large");
// start(7, "large");

displayOutObj();


FORM.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the page from refreshing when the form is submitted

  const firstName = FORM.firstName.value;
  const lastName = FORM.lastName.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;

  start(houseMembers, houseSize, firstName, lastName); // Store data in cfpData

  OUTPUT.innerHTML = ""; // Clear previous output to avoid duplication

  renderTbl(cfpData); // Update the table with the new user input

  FORM.reset(); // Clear form inputs after submission
});



