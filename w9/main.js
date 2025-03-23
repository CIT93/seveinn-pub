import { renderTBL} from "./render.js";
import { determineHouseHoldPts,determineHouseSizePts } from "./cfp.js";
import {FORM, cfpData, TBL} from "./global.js";
function start(houseHoldMembers, houseSize, firstName, lastName) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const fullName = `${firstName} ${lastName}`;
  const total = houseHoldPTS + houseSizePts;

  const cfpObj = {
    fullName: firstName, lastName,
    houseHoldMembers: houseHoldMembers,
    houseSize: houseSize,
    houseHoldPoints: houseHoldPTS,
    houseSizePoints: houseSizePts,
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

displayOutObj();

FORM.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the page from refreshing when the form is submitted

  const firstName = FORM.firstName.value;
  const lastName = FORM.lastName.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize, firstName, lastName); // Store data in cfpData
  renderTBL(cfpData); // Update the table with the new user input
  FORM.reset(); // Clear form inputs after submission
});



