const container = document.querySelector(".container");

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

container.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = "orange";
});

createGrid(20, 20);