const container = document.querySelector(".container");

function createColumnSquare(columnSquareQty) {
    const columnContainer = document.createElement("div");
    columnContainer.classList.add("columnContainer");
    container.appendChild(columnContainer);
    for (let i = 0; i < columnSquareQty; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        const squareSize = 500 / columnSquareQty;
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
        columnContainer.appendChild(square);
    }
}

function createGridSquare(rowSquareQty) {
    for (let i = 0; i < rowSquareQty; i++) {
        createColumnSquare(rowSquareQty);
    }
}

createGridSquare(16);
