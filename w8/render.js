const TBL = document.getElementById("tab-data");

function renderTblhead() {
  TBL.innerHTML = "";
  const existingTable = document.querySelector("#tab-data table");
  if (existingTable) return; // If a table exists, stop execution to prevent duplicate headings

  const table = document.createElement("table"); // Create table
  const thead = document.createElement("thead"); // Create table header
  const tr = document.createElement("tr"); // Create table row for headings

  const headingTextArr = ["Name", "FootPrint"]; // We only need two columns
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr); // Add row to the table header
  table.appendChild(thead); // Add header to the table
  TBL.appendChild(table); // Append table to the page inside the `#tab-data` container
  return table;
}

function renderTbl(data) {
  const table = renderTblhead(); // Ensure the table headers exist
  const tbody = document.createElement("tbody")

  data.forEach(function(obj) {
    const tr = document.createElement("tr")
    const tdName = document.createElement("td"); // Create a cell for Name
    tdName.textContent = obj.fullName; // Assign the name from the object
    const tdTotal = document.createElement("td"); // Create a cell for Total
    tdTotal.textContent = obj.cfpTotal; // Assign the total from the object
    tr.appendChild(tdName);
    tr.appendChild(tdTotal);
    tbody.appendChild(tr); // Ensure tbody is inside the table row
  });
  // const td = document.createElement("td");
  // const btnEdit = document.createElement("button");
  // const btnDel = document.createElement("button");
  // btnEdit.textContent = "Edit";
  // btnDel.textContent = "Delete";
  // td.appendChild(btnEdit);
  // td.appendChild(btnDel);
  // tr.appendChild(td);
  table.appendChild(tbody);
  TBL.appendChild(table);  
}

export { renderTbl, renderTblhead };
