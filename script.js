const container = document.querySelector(".container");

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

function randomHSL() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1';
}

container.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = randomHSL();
});

createGrid(20, 20);