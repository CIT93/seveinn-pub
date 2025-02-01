let carbonfootprintPoints = 0;
const numberInHousehold =(5)
function determineHouseHPoints(numberInHousehold) {
    console.log("Inside the function")
    if (numberInHousehold === 1) {
        carbonfootprintPoints = carbonfootprintPoints + 14;
    } else if(numberInHousehold === 2) {
        carbonfootprintPoints = carbonfootprintPoints + 12;
    } else if(numberInHousehold === 3) {
        carbonfootprintPoints = carbonfootprintPoints + 10;
    } else if(numberInHousehold === 4) {
        carbonfootprintPoints = carbonfootprintPoints + 8;
    } else if(numberInHousehold === 5) {  
        carbonfootprintPoints = carbonfootprintPoints + 6;
    } else if(numberInHousehold === 6) {
        carbonfootprintPoints = carbonfootprintPoints + 4;
    } else if(numberInHousehold > 6) {
        carbonfootprintPoints = carbonfootprintPoints + 2;
    }
}
console.log(`Based on the number of members of the houshold of ${numberInHousehold} The points would be ${carbonfootprintPoints}.`);

determineHouseHPoints(3)
determineHouseHPoints(4)

function calculateHomeFprint (size, efficiency) {
homeCarbonPoints = 0;
if (efficiency === "low") {
    homeCarbonPoints + (size * 10);
} else if (efficiency === "med") {
homeCarbonPoints + (size * 7);
} else if (efficiency === "high") {
    homeCarbonPoints + (size * 4);
} else {
    console.log(`For a ${size} sq. ft home with ${efficiency} efficiency, the carbon footprint is ${homeCarbonPoints} kg CO2!`)
} }

calculateHomeFprint(1500, "medium")
calculateHomeFprint(2000, "low")

    console.log("lets see your score")

// don't forget to use ` instead of '
//I messed up by having the terminal stuck on my pri rather than my pub.