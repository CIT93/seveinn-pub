// How to Calculate Your Carbon Footprint 
// Method 1

//1. Count the members of your houshold
const myHouseHold = 14;
//2. Consider the size of your home
const myHouseSize = 7;
// 3. Evaluate your food choices
const myFoodChoices = 8;
// 4. Examine your water consumption
const myWaterUsage = 2;
// 5. Determine hiw many purchases you make each year.
const myPurchases = 2;
// 6. Consider how much waste you produce
const myWaste = 30;
// 7. Identify the amount of your transportation scores.
const myRecylcling = 16;
//8. Tally up your annual transportation scores.
const myTransport = 4;
// 9. Add up your points
const cfpTotal = myHouseHold + myHouseSize + myFoodChoices + myPurchases + myRecylcling + myTransport + myWaste + myWaterUsage;
// 10. Write JS to update the rendered html (index.html) with total footprint   
const myHeading = document.querySelector("h2")
myHeading.textContent = cfpTotal; 