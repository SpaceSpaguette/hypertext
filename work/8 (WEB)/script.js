let names = ["Praha", "Brno", "Ostrava"];
let population = [100, 50, 30];
const tbl = document.getElementById("table");


for (let i = 0; i < names.length; i++) {
    const row = document.createElement("tr"); // We create a row

    const idCell = document.createElement("td"); // We create thing to the row
    const idText = document.createTextNode(i); // WE add text to row
    idCell.appendChild(idText);
    row.appendChild(idCell);
    
    const nameCell = document.createElement("td");
    const nameText = document.createTextNode(names[i]);
    nameCell.appendChild(nameText);
    row.appendChild(nameCell);

    const popCell = document.createElement("td");
    const popText = document.createTextNode(population[i]);
    popCell.appendChild(popText);
    row.appendChild(popCell);

    tbl.appendChild(row);
}
function filterTable() {
    const input = document.getElementById("filterInput").value.toLowerCase();
    const rows = tbl.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) { // start at 1 to skip header row
        const cells = rows[i].getElementsByTagName("td");
        let match = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(input)) {
                match = true;
                break;
            }
        }

        rows[i].style.display = match ? "" : "none";
    }
}

function resetTable() {
    const rows = tbl.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
        rows[i].style.display = "";
    }
    document.getElementById("filterInput").value = "";
}
