const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
const gridModel = [];
const selectContainer = document.querySelector(".mazeContainer");

//makes the rows
function createGrid() {
    for (let rowIndex = 0; rowIndex <= 14; rowIndex++) {
        const rowModel = [];
        gridModel.push(rowModel); //model
        let rowDivs = document.createElement("div"); //view
        rowDivs.classList.add("classRow");
        rowDivs.dataset.y = 14 - rowIndex;
        selectContainer.appendChild(rowDivs);

        createCells(rowDivs, gridModel);
    }
}
//makes the cells
function createCells(view, model) {
    for (let columnIndex = 0; columnIndex <= 20; columnIndex++) {
        let cellDivs = document.createElement("div");
        cellDivs.classList.add("cell");
        cellDivs.dataset.x = columnIndex;

        view.appendChild(cellDivs);
        model.push("cell");
    }
}
createGrid();

let stringMap = map.join("").replace(/,/g, "");
const arrayOfCells = Array.from(document.querySelectorAll(".cell"));
//adds the map to the cell divs
arrayOfCells.forEach((cell, index) => {
    cell.dataset.mazeStyle = stringMap[index];
});

const image = document.createElement("img");

function addstar() {
    image.src = "Star.png";
    image.classList.add("star");
    document.querySelector('[data-maze-style="S"]').appendChild(image);
}

addstar();

//start at (5,0)
const starImgParent = document.querySelector(".star").parentElement;
const starImg = document.querySelector(".star");

const player = {
    x: document.querySelector(".star").parentElement.dataset.x,
    y: document.querySelector(".star").parentElement.parentElement.dataset.y,
};

//click handler for star
const moveStar = document.addEventListener("keydown", logKey);

function logKey(evt) {
    const currentLocationX = player.x;
    const currentLocationY = player.y;
    const starImgParent = document.querySelector(".star").parentElement;
    const starImg = document.querySelector(".star");

    if (evt.key === "ArrowRight") {
        let nextLocation = arrayOfCells.filter((cell) => {
            return (
                cell.dataset.x == Number(currentLocationX) + 1 &&
                cell.parentElement.dataset.y == currentLocationY
            );
        });
        if (nextLocation[0].dataset.mazeStyle === "W") {
            return;
        }
        player.x = nextLocation[0].dataset.x;
        starImgParent.removeChild(starImg);
        nextLocation[0].appendChild(starImg);
    } //right arrow
    else if (evt.key === "ArrowLeft") {
        let nextLocation = arrayOfCells.filter((cell) => {
            return (
                cell.dataset.x == Number(currentLocationX) - 1 &&
                cell.parentElement.dataset.y == currentLocationY
            );
        });
        if (nextLocation[0].dataset.mazeStyle === "W") {
            return;
        }
        player.x = nextLocation[0].dataset.x;
        starImgParent.removeChild(starImg);
        nextLocation[0].appendChild(starImg);
        console.log(player);
    } //left arrow
    else if (evt.key === "ArrowUp") {
        let nextLocation = arrayOfCells.filter((cell) => {
            return (
                cell.dataset.x == Number(currentLocationX) &&
                cell.parentElement.dataset.y == Number(currentLocationY) + 1
            );
        });
        if (nextLocation[0].dataset.mazeStyle === "W") {
            return;
        }
        player.y = nextLocation[0].parentElement.dataset.y;
        starImgParent.removeChild(starImg);
        nextLocation[0].appendChild(starImg);
        console.log(player);
    }
    //up arrow
    else if (evt.key === "ArrowDown") {
        let nextLocation = arrayOfCells.filter((cell) => {
            return (
                cell.dataset.x == Number(currentLocationX) &&
                cell.parentElement.dataset.y == Number(currentLocationY) - 1
            );
        });
        if (nextLocation[0].dataset.mazeStyle === "W") {
            return;
        }
        player.y = nextLocation[0].parentElement.dataset.y;
        starImgParent.removeChild(starImg);
        nextLocation[0].appendChild(starImg);
    } //down arrow
    if (player.x == 20 && player.y == 6) {
        alert("You Win!");
    }
}