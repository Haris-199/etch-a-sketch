const grid = document.getElementById("grid");

function generateGrid(rows, cols) {
    for (let y = 0; y < rows; y++) {
        let row = document.createElement("row");
        row.classList.add("row");
        for (let x = 0; x < cols; x++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}
generateGrid(16, 16);

grid.addEventListener("mouseover", event => {
    if (event.target.classList.contains("square"))
        event.target.classList.add("filled");
});

