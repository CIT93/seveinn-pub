const TBL = document.getElementById("tab-data");

function renderTblhead() {
  const existingTable = document.querySelector("#tab-data table");
  if (existingTable) return; // If a table exists, stop execution to prevent duplicate headings

  const table = document.createElement("table"); // Create table
  const thead = document.createElement("thead"); // Create table header
  const tr = document.createElement("tr"); // Create table row for headings

  const headingTextArr = ["Name", "Total"]; // We only need two columns
  headingTextArr.forEach(function (text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
  });

  thead.appendChild(tr); // Add row to the table header
  table.appendChild(thead); // Add header to the table
  TBL.appendChild(table); // Append table to the page inside the `#tab-data` container
}

  
function renderTbl(data) {
  renderTblhead(); // Ensure the table headers exist

  const table = document.querySelector("#tab-data table"); // Find the table
  let tbody = table.querySelector("tbody");

  if (!tbody) { 
      tbody = document.createElement("tbody"); // If tbody doesn't exist, create one
      table.appendChild(tbody);
  }

  tbody.innerHTML = ""; // Clear old rows before adding new ones

  data.forEach(obj => {
      const tr = document.createElement("tr"); // Create a new row

      const tdName = document.createElement("td"); // Create a cell for Name
      tdName.textContent = obj.fullName; // Assign the name from the object

      const tdTotal = document.createElement("td"); // Create a cell for Total
      tdTotal.textContent = obj.cfpTotal; // Assign the total from the object

      tr.appendChild(tdName);
      tr.appendChild(tdTotal);
      tbody.appendChild(tr); // Add the row to tbody
  });

  table.appendChild(tbody); // Ensure tbody is inside the table
}


  export{renderTbl,renderTblhead}