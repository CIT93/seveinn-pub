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
