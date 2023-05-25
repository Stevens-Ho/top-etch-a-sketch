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
        addSquareColor(square);
        generateEraser(square);
        clearSquareColor();
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
            squareContainer.innerHTML = "";
            createGridSquare(userInput.value);
        }
    });
}

function addSquareColor(square) {
    const blackColorBtn = document.getElementById("blackColorBtn");
    const randomColorBtn = document.getElementById("randomColorBtn");
    blackColorBtn.addEventListener("click", () => {
        square.addEventListener("mouseover", () => square.style.backgroundColor = "black");
    });
    randomColorBtn.addEventListener("click", () => {
        square.addEventListener("mouseover", () => square.style.backgroundColor = getRandomColor());
    });
}

function getRandomColor() {
    let hexColor = `#${Math.random().toString(16).slice(-6)}`;
    return hexColor;
}

function generateEraser(square) {
    const eraserBtn = document.getElementById("eraserBtn");
    eraserBtn.addEventListener("click", () => {
        square.addEventListener("mouseover", ()=> {
            square.style.backgroundColor = document.body.style.backgroundColor;
        });
    });
}

function clearSquareColor() {
    const clearBtn = document.getElementById("clearBtn");
    let square = document.querySelectorAll(".square");
    clearBtn.addEventListener("click", () => {
        square.forEach((e) => {
            e.style.backgroundColor = document.body.style.backgroundColor;
        });
    });
}

userInputSquareQty();