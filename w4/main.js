console.log("top of file")
function determineHouseSizePts(size) {size = "large";
  console.log("inside block scope");
  if (size === "large"){
    carbonfootprintPoints = carbonfootprintPoints + 10;
  } else if (size === "medium") { 
    carbonfootprintPoints = carbonfootprintPoints + 7;
  } else if (size === "small") { 
    carbonfootprintPoints = carbonfootprintPoints + 4;
  } else if (size === "apt") {
    carbonfootprintPoints = carbonfootprintPoints + 2;
  } else {
    console.log("No Points Added");
  }
  console.log( `Based on the size of ${size} home the points would be ${carbonfootprintPoints}`);
}

function determineHouseHoldPts(numberInHouseholdHousehold) {  numberInHousehold = 5
  console.log("inside block scope");
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2
  } else {
    console.log( `Based on the number of members of the houshold of ${numberInHousehold} The points would be ${houseHoldPoints}`)
  }
  return houseHoldPoints
}
console.log("global scope")
let carbonfootprintPoints = 0

// You would put it below function 

function start() {
const houseHoldPts = determineHouseHoldPts(5)
console.log(houseHoldPts)
determineHouseSizePts("large");
}

start();


function determineHouseHoldPts(numberInHousehold) {
  console.log("Inside determineHouseHoldPts");

  // Points table for household sizes 1-6
  const pointsBySize = [0, 14, 12, 10, 8, 6, 4]; 
  let houseHoldPoints = numberInHousehold > 6 ? 2 : (pointsBySize[numberInHousehold] || 0);

  console.log(`For ${numberInHousehold} household members, points awarded: ${houseHoldPoints}`);
  return houseHoldPoints;
}

function determineHouseSizePts(size) {
  console.log("Inside determineHouseSizePts");

  const sizePoints = {
    large: 10,
    medium: 7,
    small: 4,
    apt: 2
  };

  let pointsToAdd = sizePoints[size] || 0;

  console.log(`For ${size} home, points awarded: ${pointsToAdd}`);
  return pointsToAdd;
}

function start() {
  console.log("Starting Calculation...");

  carbonfootprintPoints += determineHouseHoldPts(5);
  carbonfootprintPoints += determineHouseSizePts("large");

  console.log(`Total Carbon Footprint Points: ${carbonfootprintPoints}`);
}

start();

//I tried working on the code challange on my own but it was extremely difficult and after spending some hours on it I decided to try and ask chat gtp for help. I mixed some of my code and with the additional input from chat gtp but after watching the last video I feel I'm not on track with the assignment so I apologize if the code looks extremely different.



//Minimize the amount of things we declare as far as variables on the global scope
//I think since it's "global" that the document recognizes it quicker than any other tags. Like a heiarchy or such.
//My guess on the output is that since we haven't wrote a start for the function, it can't determine the values which won't allow the code to work resulting in an error




function calculateHomeFprint(size, efficiency) {
  homeCarbonPoints = 0;
  if (efficiency === "low") {
    homeCarbonPoints + size * 10;
  } else if (efficiency === "med") {
    homeCarbonPoints + size * 7;
  } else if (efficiency === "high") {
    homeCarbonPoints + size * 4;
  } else {
    console.log(
      `For a ${size} sq. ft home with ${efficiency} efficiency, the carbon footprint is ${homeCarbonPoints} kg CO2!`
    );
  }
}

calculateHomeFprint(1500, "medium");
calculateHomeFprint(2000, "low");

console.log("lets see your score");

// don't forget to use ` instead of '
//I messed up by having the terminal stuck on my pri rather than my pub.

function start(inputs) {
  const houseHoldPts = determineHouseHoldPts(myInputs(0));
  const houseSizePts = determineHouseSizePts(myInputs(1));
  const total = houseHoldPts + houseSizePts
  console.log(`Total carbon footprint score so far ${total}`)
}

start([5, "apt"]);
//I think you have to put something into start() but im unsure of what.
// Honestly this assignment was very confusinng, i understand why arrays are important and why we use them but overall i am having trouble understanding how to implement them and if i were to set it up on my own id have trouble.


const myInputs = [5, "apt"]; // on the global scope
start();

const myArr = [1, 2, 3, 4, 5];
console.log(myArr)
console.log(myArr[1])
console.log(myArr[4])
console.log(myArr[0] = 10)
console.log(myArr.push[1])
