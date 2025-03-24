const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");

function renderTblHeading() {
  //TBL.innerHTML = "";
  const existingTable = document.querySelector("#tab-data table");
  if (existingTable) return; // If a table exists, stop execution to prevent duplicate headings

  const table = document.createElement("table"); // Create table
  const thead = document.createElement("thead"); // Create table header
  const tr = document.createElement("tr"); // Create table row for headings

  const headingTextArr = [
    "Name",
    "HouseHold",
    "HouseSize",
    "Footprint",
    "Actions",
  ]; // We only need two columns
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr); // Add row to the table header
  table.appendChild(thead); // Add header to the table
  return table;
}

function renderTBLBtn(obj, index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");

  btnEdit.textContent = "Edit";
  
  btnDel.textContent = "Delete";

  td.appendChild(btnEdit);
  
  td.appendChild(btnDel);
  btnDel.addEventListener("click", function (e){
    console.log("hello from the delete button");
    console.log(e);
    data.splice(index, 1,);
    saveLs(data); 
    renderTBL(data);    
  })
  btnEdit.addEventListener('click', function(e){
      FORM[1].value = obj.firstName;
      FORM[2].value = obj.lastName;
      FORM[3].value = obj.houseHoldMembers;
      FORM[4].value = obj.houseSize;
      data.splice(index, 1);
      saveLs(data); 
      renderTBL(data);    
    });
    
  return td;
}

function renderTblBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index);
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (
        key !== "lastName" &&
        key !== "houseHoldPoints" &&
        key !== "houseSizePoints"
      ) {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderTBLBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

function renderTBL(data){
  TBL.innerHTML = "";
  if(data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  } 
}

export {renderTBL};
