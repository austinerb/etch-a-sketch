const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset");
let squares = 16; // how many squares in a row & column
let dimension = 500; // width and height of the container

// function create (dimension)
function createBoard() {
    // set dimensions of the board
    container.style.width = dimension + "px";
    container.style.height = dimension + "px";

    // create each square and add to the board
    for (let i = 0; i < squares-2; i++) {
        for (let j = 0; j < squares-1; j++) {
            const div = document.createElement("div");
            // give the div properties
            div.style.backgroundColor = "white";
            div.style.display = "inline-block";
            div.style.gridArea = i + "/" + j + "/ span 1 / span 1";
            div.classList.add("container-item")
            // add hover listener
            div.addEventListener("mouseover", function(e) {
                if (e.target.style.backgroundColor == "white") {
                    e.target.style.backgroundColor = "black";
                }
            });
            // add the square to the board
            container.appendChild(div);
        }
    }
}

createBoard();

// add click event listener to button
resetBtn.addEventListener("click", function(e) {
    const containerItems = document.querySelectorAll(".container-item");
    containerItems.forEach(function(item) {
        item.remove();
    });
    
    // new dimensions
    squares = prompt("Enter in new grid dimensions. (entering 16 will make a 16*16 grid)");

    // recreate the board with the new dimensions
    createBoard();
});
    // remove all children from container
    // prompt for new dimensions
    // create(new dimension)
