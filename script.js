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
const gridModel = []
const selectContainer = document.querySelector('.mazeContainer')
const player = []
let playerDiv = document.createElement("div")



function createGrid() {
    for (let rowIndex = 0; rowIndex <= map.length; rowIndex++) {
        const rowModel = []
        gridModel.push(rowModel) //model
        let rowDivs = document.createElement("div") //view
        rowDivs.classList.add("classRow")
        
        selectContainer.appendChild(rowDivs)
        
        createCells(rowDivs, gridModel)

    }
}

function createCells(view, model) {
    for (let columnIndex = 0; columnIndex <= 20; columnIndex++) {

        let cellDivs = document.createElement("div")
        cellDivs.classList.add("cell")
        cellDivs.dataset.type = "cell"
        view.appendChild(cellDivs)
        model.push("cell")
    }
}
createGrid()

function makeWalls() {
    //change "W" with a style that fills the background of the cell
    //loop over the "map" array to find the "W"s
}
console.table(map.toString())

    Array.from(selectContainer).forEach(classRow => {
    classRow.forEach(cell => {
       
        return cell
    
    });
    
});
console.log(selectContainer)


