let SquareNum;
let SquareGridNum;
let color = "red";
let isMouseDown = 0;
let Squares = document.getElementById("Squares");

document.getElementById("AskSquaresButton").addEventListener("click", () => {
    SquareNum = prompt("Insert Canvas Size");
    if (SquareNum > 100) {
        alert("Sorry, too many Squares. The maximum is 100!");
        SquareNum = 0;
    }
    SquareGridNum = SquareNum * SquareNum;
    DeleteSquares();
    MakeSquares();
    draw();
});

document.getElementById("Reset").addEventListener("click", () => {DeleteSquares(); MakeSquares(); draw()});

document.getElementById("blue").addEventListener("click", () => {color = "blue", draw();});
document.getElementById("red").addEventListener("click", () => {color = "red", draw();});
document.getElementById("yellow").addEventListener("click", () => {color = "yellow", draw();});
document.getElementById("green").addEventListener("click", () => {color = "green", draw();});
document.getElementById("purple").addEventListener("click", () => {color = "purple", draw();});
document.getElementById("orange").addEventListener("click", () => {color = "orange", draw()});
document.getElementById("brown").addEventListener("click", () => {color = "brown", draw();});
document.getElementById("lightblue").addEventListener("click", () => {color = "lightblue", draw()});
document.getElementById("pink").addEventListener("click", () => {color = "pink", draw()});

document.getElementById("Color").addEventListener("click", () => color = prompt("Instert Hex/RGB/CSS Name Of The color!"));
document.getElementById("Erasor").addEventListener("click", () => color = "wheat");

function MakeSquares () {
    for (let i = 0; i < SquareGridNum; i++) {
        let square = document.createElement("div");
        square.className = "square";
        Squares.appendChild(square);
    }
    Squares.style.cssText = `
    grid-template-columns: repeat(${SquareNum}, auto);
    grid-template-rows: repeat(${SquareNum}, auto);
    `;
}

function DeleteSquares () {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());
}

function draw () {
    let Square = document.querySelectorAll(".square")
    for (let i = 0; i < Square.length; i++) {
        let currentSquare = Square[i];
        currentSquare.addEventListener("mouseover", () => {
            if (isMouseDown === 1) {
                currentSquare.style.cssText = `background-color: ${color};`;
            }
        });
    }
}

window.addEventListener("keydown", (e) => {
    if (isMouseDown === 0 && e.key === "Control") {
        isMouseDown = 1;
    } else {
        isMouseDown = 0;
    }
});

