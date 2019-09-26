var app = document.getElementById("app");
app.className = "container-fluid";

var size = 3;
// Populate HTML

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


for (var i = 1; i <= size; i++){
    var newRow = document.createElement("div");
    newRow.className = "row";
    
        for(var j = 1; j<= size; j++){
            var newCol = document.createElement("div");
            newCol.className = "col border";
            newCol.id = i + "-" + j;
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

//Create Button
var newRow = document.createElement("div");
newRow.className = "row border";
var test = document.createTextNode("button");
app.appendChild(newRow);
newRow.appendChild(test);

}





createUI();

//var test = document.createTextNode("test");
//app.appendChild(newCol);