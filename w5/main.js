const cfpData = [];
let cfpObj = {}; // Global object to store the latest calculation

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}

function displayOutObj(obj) {
  console.log(obj);
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
  output.appendChild(newH2);
  const newH3 = document.createElement("h3");
  const newP = document.createElement("p");
  newH3.textContent = "Based on Number in Household and size of Home";
  newP.textContent = `This number is based on the number of members of the household of ${obj.houseHoldMembers} (score: ${obj.houseHoldPoints}) `;
  newP.textContent += `and a ${obj.houseSize} size of home (score: ${obj.houseSizePoints}).`;
  output.appendChild(newH3);
  output.appendChild(newP);
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;

 const cfpObj = {
    houseHoldMembers: houseHoldMembers,
    houseSize: houseSize,
    houseHoldPoints: houseHoldPTS,
    houseSizePoints: houseSizePts,
    cfpTotal: total,
  };
  cfpData.push(cfpObj);
}

function displayOutput() {
  for(obj of cfpData)
    console.log(obj)
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent = `Carbon Footprint ${obk.cfpTotal}`;
  //const newH3 = document.createElement("h3")'
  // newP.textContent = `This number is based on the number of members of the household of ${obj.houseHoldMembers} (score: ${obj.houseHoldPoints}) `;
  // newP.textContent += `and a ${obj.houseSize} size of home (score: ${obj.houseSizePoints}).`;
  output.appendChild(newH2);
  // output.appendChild(newH3);
  // output.appendChild(newP);
}




// Correct function calls
start(3, "medium");
displayOutObj(cfpObj);

// Running multiple test cases
start(1, "apt");
start(2, "apt");
start(3, "apt");
start(4, "apt");
start(5, "apt");
start(6, "apt");
start(7, "apt");
start(1, "small");
start(2, "small");
start(3, "small");
start(4, "small");
start(5, "small");
start(6, "small");
start(7, "small");
start(1, "medium");
start(2, "medium");
start(3, "medium");
start(4, "medium");
start(5, "medium");
start(6, "medium");
start(7, "medium");
start(1, "large");
start(2, "large");
start(3, "large");
start(4, "large");
start(5, "large");
start(6, "large");
start(7, "large");

console.log(cfpData);

// Intro to Objects
const myArr = [];
const myObj = {
  cfpTotal: 18,
  houseSize: "small",
  displayOutput: function () {
    console.log("this is a method call");
    console.log(this.houseSize);
  },
};
console.log(myObj.cfpTotal);
console.log(myObj["houseSize"]);
myObj.displayOutput();

// Standard loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i <= 15; i++) {
  console.log(i);
}

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

