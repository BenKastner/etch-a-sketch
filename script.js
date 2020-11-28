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

createGrid(num);

function clearGrid () {
    for (c = 0; c < (num * num); c++) {
        let square = document.querySelector(".grid-item");
        container.removeChild(square);
    }
    num = prompt("How many squares on each side of new grid?");
    num = Number(num);

    if (Number.isInteger(num) && (num > 0) && num < 100) {
        createGrid(num);
    } else {
        alert("Please enter an integer between 0 and 100");
        num = 1;
        createGrid(num);
    }
}

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}

clearButton.addEventListener("click", clearGrid);