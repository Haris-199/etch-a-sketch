const ROWS = 16, COLS = 16;
const grid = document.getElementById("grid");

for (let y = 0; y < ROWS; y++) {
    let row = document.createElement("row");
    row.classList.add("row");
    for (let x = 0; x < COLS; x++) {
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }
    grid.appendChild(row);
}

grid.addEventListener("mouseover", (event) => {
    event.target.classList.add("filled");
});