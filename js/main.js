var app = document.getElementById("app");
app.className = "container-fluid";

var size = 3;
// Populate HTML

var board = [];
board.length = size * size;

popArray();

function popArray(){

    board.fill(0);
}

function createUI(){   

// Create Title
    var newRow = document.createElement("div");
    newRow.className = "row";
    var newDiv = document.createElement("div");
    newDiv.className = "h1 mx-auto";
    var title = document.createTextNode("Tic-Tac-Toe");
    newDiv.appendChild(title);
    app.appendChild(newDiv);
// Create board

var count = 0;
for (var i = 0; i < size; i++){
    var newRow = document.createElement("div");
    newRow.className = "row";
    
    
        for(var j = 0; j< size; j++){
            var newCol = document.createElement("div");
            newCol.className = "col border";
            newCol.id = count;
            count++;
            //var square = document.createElement("img");
            //square.setAttribute("src", "imgs/gray.png");
            //square.setAttribute("object-fit", "contain");
            var test = document.createTextNode(".");
            newRow.appendChild(newCol);
            newCol.appendChild(test);
            //newCol.appendChild(square);
        }
        app.appendChild(newRow);

}
//Create Turn Indicator
var newRow = document.createElement("div");
newRow.className = "row border";
var test = document.createTextNode("Turn indicator");
app.appendChild(newRow);
newRow.appendChild(test);

//Create Button
var newRow = document.createElement("div");
newRow.className = "row border";
var test = document.createTextNode("button");
app.appendChild(newRow);
newRow.appendChild(test);

}

createUI();

function popBoard(){
    
}




//var test = document.createTextNode("test");
//app.appendChild(newCol);