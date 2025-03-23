import { renderTBL} from "./render.js";
import { determineHouseHoldPts,determineHouseSizePts } from "./cfp.js";
import {FORM, TBL} from "./global.js";
import{saveLs, cfpData} from "./storage.js";



function start(firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;

  const cfpObj = {
    firstName: firstName,
    lastName: lastName,
    houseHoldMembers: houseHoldMembers,
    houseSize: houseSize,
    houseHoldPoints: houseHoldPTS,
    houseSizePoints: houseSizePts,
    cfpTotal: total,
  };
  cfpData.push(cfpObj);
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the page from refreshing when the form is submitted
  const firstName = FORM.firstName.value;
  const lastName = FORM.lastName.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize); // Store data in cfpData
  saveLs(cfpData);
  renderTBL(cfpData); // Update the table with the new user input
  FORM.reset(); // Clear form inputs after submission
});



