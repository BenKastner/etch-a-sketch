const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear");
let num = 16;

function createGrid(num) {
    container.style.setProperty('--grid-rows', num);
    container.style.setProperty('--grid-cols', num);
    for (c = 0; c < (num * num); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };

    container.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = randomHsl();
    });
};

/* function removeGrid(num) {
    for (c = 0; c < (num * num); c++) {
        let square = document.querySelector(".grid-item");
        container.removeChild(square);
    };
} */

createGrid(num);

function clearGrid () {
    for (c = 0; c < (num * num); c++) {
        let square = document.querySelector(".grid-item");
        container.removeChild(square);
    }
    num = prompt("How many squares on each side of new grid?");
    createGrid(num);
}

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}

const gridItem = document.querySelectorAll(".grid-item");

/* gridItem.forEach((div) => {

    div.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = randomHsl();
    });

}); */

clearButton.addEventListener("click", clearGrid);