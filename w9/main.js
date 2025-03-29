import { renderTBL} from "./render.js";
import { determineHouseHoldPts,determineHouseSizePts } from "./cfp.js";
import {FORM, TBL} from "./global.js";
import {saveLs, cfpData} from "./storage.js";

const firstNameEl = document.getElementById('firstName');
const lastNameEl = document.getElementById('lastName');
const submitEl = document.getElementById("submitError");


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

renderTBL(cfpData); // Update the table with the new user input

function validatField(event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add('invalid');
  } else {
    fieldError.textContent = '';
    event.target.classList.add('invalid');
  }
}

firstNameEl.addEventListener('blur', validatField);
lastNameEl.addEventListener('blur', validatField);



FORM.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the page from refreshing when the form is submitted
  const firstName = FORM.firstName.value;
  const lastName = FORM.lastName.value;
  const firstNameIsValid = firstNameEl.value !== '';
  const lastNameIsValid = lastNameEl.value !== '';
  if (firstNameIsValid && lastNameIsValid) {
    submitEl.textContent = '';
    const houseMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(firstName, lastName, houseMembers, houseSize); // Store data in cfpData
    saveLs(cfpData);
    FORM.reset(); // Clear form inputs after submission
  } else {
    submitEl.textContent = "Form requires First and Last Name";
  }
  
});



