const cfpData = getLS();

function saveLs(cfpData){
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
}

function getLS() {
    const retrieveArry = localStorage.getItem("cfp")
    if(retrieveArry !== null) {
        return JSON.parse(retrieveArry)
    } else {
        return[];
    }
}

export {cfpData, saveLs, getLS}