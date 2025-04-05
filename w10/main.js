import { renderTBL} from "./render.js";
import { determineHouseHoldPts,determineHouseSizePts } from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLs, cfpData} from "./storage.js";

const start = (firstName, lastName, houseHoldMembers, houseSize) => {
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

const validatField = event => {
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
FNAME.addEventListener('blur', validatField);
LNAME.addEventListener('blur', validatField);



FORM.addEventListener("submit", e => {
  // e.preventDefault(); // Stop the page from refreshing when the form is submitted
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    const houseMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value); // Store data in cfpData
    saveLs(cfpData);
    FORM.reset(); // Clear form inputs after submission
  } else {
    SUBMIT.textContent = "Form requires First and Last Name";
  }
  
});

//spread argument (mulitple things need to be passed)
// const add2 = function(...a) {
//   return 2 + [a];
// } 

// const result = add2(1, 2, 3, 4);

//arrow function

const add2 = a => 2 + a;

const result = add2(100, ); //if passing more than one through the function we would have to put paranthesis

//IIFE 

const a = 3;

(function(a){
  console.log("inside IIFE ");
  console.log(a);
})(a); 