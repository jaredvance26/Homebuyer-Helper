import { convertInt } from "./calculate-amortization-content.ts";

export const downloadCSV = () => {
  // Get the table element
  var table = document.querySelector("table");
  var csv = [];

  // Get the headers
  if (table) {
    var headers = [];
    var headerCells = table.querySelectorAll("th");
    for (var i = 0; i < headerCells.length; i++) {
      headers.push(headerCells[i].innerText);
    }
    csv.push(headers.join(","));

    // Get the data rows
    var rows = table.querySelectorAll("tbody tr");
    for (var i = 0; i < rows.length; i++) {
      var row = [];
      var cells = rows[i].querySelectorAll("td");
      for (var j = 0; j < cells.length; j++) {
        const num = convertInt(cells[j].innerText);
        row.push(num);
      }
      csv.push(row.join(","));
    }

    // Download the CSV file
    var csvContent = "data:text/csv;charset=utf-8," + csv.join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "amortization-table.csv");
    document.body.appendChild(link);
    link.click();
  }
};
