function determineHouseSizePts(size) {size = "large";
  console.log(size);
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

let carbonfootprintPoints = 0;
function determineHouseHoldPts(numberInHouseholdHousehold) {
  console.log("Inside the function");
  if (numberInHousehold === 1) {
    carbonfootprintPoints = carbonfootprintPoints + 14;
  } else if (numberInHousehold === 2) {
    carbonfootprintPoints = carbonfootprintPoints + 12;
  } else if (numberInHousehold === 3) {
    carbonfootprintPoints = carbonfootprintPoints + 10;
  } else if (numberInHousehold === 4) {
    carbonfootprintPoints = carbonfootprintPoints + 8;
  } else if (numberInHousehold === 5) {
    carbonfootprintPoints = carbonfootprintPoints + 6;
  } else if (numberInHousehold === 6) {
    carbonfootprintPoints = carbonfootprintPoints + 4;
  } else if (numberInHousehold > 6) {
    carbonfootprintPoints = carbonfootprintPoints + 2;
  } else {
    console.log( `Based on the number of members of the houshold of ${numberInHousehold} The points would be ${carbonfootprintPoints}.`
    );
  }
}
determineHouseHoldPts("5");
determineHouseSizePts("large");

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
