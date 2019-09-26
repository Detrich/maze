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


//makes the rows
function createGrid() {
    for (let rowIndex = 0; rowIndex <= 14; rowIndex++) {
        const rowModel = []
        gridModel.push(rowModel) //model
        let rowDivs = document.createElement("div") //view
        rowDivs.classList.add("classRow")

        selectContainer.appendChild(rowDivs)

        createCells(rowDivs, gridModel)

    }
}
//makes the cells
function createCells(view, model) {
    for (let columnIndex = 0; columnIndex <= 20; columnIndex++) {

        let cellDivs = document.createElement("div")
        cellDivs.classList.add("cell")
        view.appendChild(cellDivs)
        model.push("cell")
    }
}
createGrid()

let stringMap = map.join("").replace(/,/g,'')
const arrayOfCells= Array.from(document.querySelectorAll('.cell'))
//adds the map to the cell divs
arrayOfCells.forEach((cell, index) => {
   
 cell.dataset.mazeStyle = stringMap[index]


})


const player = []
let playerDiv = document.createElement("div")
const image = document.createElement('img')
function addstar(){
image.src ="Star.png"
image.classList.add("star")
document.querySelector('[data-maze-style="S"]').appendChild(image)
}

addstar()

//click handler for star
const moveStar = document.addEventListener('keydown',logKey)
function logKey(evt) {
    if (evt.keyCode == 39) {
     
    } //right arrow
    else if (evt.keyCode == 37) {
     
    } //left arrow
    else if (evt.keyCode == 38) {
    
    } //up arrow
    else if (evt.keyCode == 40) {
      
    }//down arrow
  }
//console.log(moveStar)



//move the letter "S" from one cell to another.(.append)

// IF the cell has a "W" in it do not go into it.
//IF the cell has a "F" in it , win the game.

//set coordiantes for the board? so that I can tell the arrows where to place the "S" 
//with the click handler



//spliting my map array into an array of arrays
let ArraySize = 15;
let newMap = [];
map.forEach((item)=>{
    if(!newMap.length||newMap[newMap.length-1].length ==ArraySize)
    newMap.push([]);
    newMap[newMap.length-1].push(item)
}
)

console.log(newMap)

function findCoordiantes(x , y){
    let  = newMap[x][y]
    return W
}
console.log(findCoordiantes())

