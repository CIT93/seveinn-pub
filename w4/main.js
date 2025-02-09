const cfpData = []; // Changed to array to store multiple records

console.log("top of file");

function determineHouseSizePts(size) {
  console.log("inside block scope");
  let carbonfootprintPoints = 0; // Declared locally instead of modifying a global variable

  if (size === "large") {
    carbonfootprintPoints += 10;
  } else if (size === "medium") {
    carbonfootprintPoints += 7;
  } else if (size === "small") {
    carbonfootprintPoints += 4;
  } else if (size === "apt") {
    carbonfootprintPoints += 2;
  } else {
    console.log("No Points Added");
  }
  console.log(
    `Based on the size of ${size} home, the points would be ${carbonfootprintPoints}`
  );
  return carbonfootprintPoints; // Return the computed points
}

function determineHouseHoldPts(numberInHousehold) {
  console.log("inside block scope");
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

  console.log(
    `Based on the number of members (${numberInHousehold}), the points would be ${houseHoldPoints}`
  );
  return houseHoldPoints;
}
//I tried working on the code challange on my own but it was extremely difficult and after spending some hours on it I decided to try and ask chat gtp for help. I mixed some of my code and with the additional input from chat gtp but after watching the last video I feel I'm not on track with the assignment so I apologize if the code looks extremely different.

console.log("global scope");

function start(houseHoldMembers, houseSize) {
  const houseHoldPts = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPts + houseSizePts;

  cfpData.push({
    members: houseHoldMembers,
    size: houseSize,
    householdScore: houseHoldPts,
    sizeScore: houseSizePts,
    total: total,
  });

  console.log(`Total carbon footprint score so far: ${total}`);
}

function calculateHomeFprint(size, efficiency) {
  let homeCarbonPoints = 0; // Declared locally to avoid global issues

  if (efficiency === "low") {
    homeCarbonPoints = size * 10;
  } else if (efficiency === "med") {
    homeCarbonPoints = size * 7;
  } else if (efficiency === "high") {
    homeCarbonPoints = size * 4;
  }

  console.log(
    `For a ${size} sq. ft home with ${efficiency} efficiency, the carbon footprint is ${homeCarbonPoints} kg CO2!`
  );
  return homeCarbonPoints;
}

calculateHomeFprint(1500, "medium");
calculateHomeFprint(2000, "low");

console.log("let's see your score");


//Minimize the amount of things we declare as far as variables on the global scope
//I think since it's "global" that the document recognizes it quicker than any other tags. Like a heiarchy or such.
//My guess on the output is that since we haven't wrote a start for the function, it can't determine the values which won't allow the code to work resulting in an error 102-106
//last code along.it kind of does make sense to keep everything in one array because i think more arrays causes confusion

// Updated function to correctly display results dynamically
function displayOutput() {
    for (arr of cfpData){
    console.log(arr)
    const output = document.getElementById("output")
    const newP = document.createElement("p");
    newP.textContent = `Total Carbon Footprint: ${entry.total} | Household Members: ${entry.members} (Score: ${entry.householdScore}) | House Size: ${entry.size} (Score: ${entry.sizeScore})`;
    output.appendChild(newP);
  }
}

// Start function calls with correct parameters
start(5, "apt");
start(4, "large");
start(3, "medium");
start(2, "small");


// Display results
displayOutput();

//I think you have to put something into start() but im unsure of what.
// Honestly this assignment was very confusinng, i understand why arrays are important and why we use them but overall i am having trouble understanding how to implement them and if i were to set it up on my own id have trouble.

// Example of array operations
const myArr = [1, 2, 3, 4, 5];
console.log(myArr);
console.log(myArr[1]);
console.log(myArr[4]);
myArr[0] = 10;
console.log(myArr);
myArr.push(6); 
console.log(myArr);