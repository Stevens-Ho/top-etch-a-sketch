const squareContainer = document.getElementById("squareContainer");

function createColumnSquare(columnSquareQty) {
    const columnContainer = document.createElement("div");
    columnContainer.classList.add("columnContainer");
    squareContainer.appendChild(columnContainer);
    for (let i = 0; i < columnSquareQty; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        const squareSize = 500 / columnSquareQty;
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
        columnContainer.appendChild(square);
        //background color of square will become black when the mouse move over
        square.addEventListener("mouseover", () => square.style.backgroundColor = "black");
    }
}

function createGridSquare(rowSquareQty) {
    for (let i = 0; i < rowSquareQty; i++) {
        createColumnSquare(rowSquareQty);
    }
}

function userInputSquareQty() {
    const submit = document.getElementById("submit");
    const userInput = document.getElementById("userInput");
    submit.addEventListener("click", () => {
        if (userInput.value > 0 && userInput.value <= 100) {
        createGridSquare(userInput.value);
        }
    });
}

userInputSquareQty();