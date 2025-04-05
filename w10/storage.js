
const saveLs = function(cfpData){
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
}
 
const getLS = function() {
    const retrieveArry = localStorage.getItem("cfp")
    if(retrieveArry !== null) {
        return JSON.parse(retrieveArry)
    } else {
        return[];
    }
}

const cfpData = getLS();


export {cfpData, saveLs, getLS}