let carbonfootprintPoints = 0;
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

// don't forget to use ` instead of '