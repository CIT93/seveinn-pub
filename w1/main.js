console.log('hello from inside the main.js file');

//let myVar;
const myVar = "sevein";
const myVarType = typeof(myVar);

console.log("myVarType" + myVarType);
console.log(`myVarType ${myVarType}`);
//below is a code block


function runNow () {
    if(myVarType === "number") {
        console.log(`will 11 this one run`);
    } else {
        console.log(`will 13 this one run`);
    }
}

runNow();
runNow();



