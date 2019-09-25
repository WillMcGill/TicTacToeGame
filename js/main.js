var app = document.getElementById("app");
app.className = "container-fluid";

var size = 3;
// Populate HTML

function createUI(){   

// Create Title
    var newRow = document.createElement("div");
    newRow.className = "row";
    var newDiv = document.createElement("div");
    app.appendChild(newDiv);
    newDiv.className = "h1 mx-auto";
    var title = document.createTextNode("Tic-Tac-Toe");
    newDiv.appendChild(title);

// Create board


for (var i = 1; i <= size; i++){
    var newRow = document.createElement("div");
    newRow.className = "row";
    app.appendChild(newRow);
        for(j = 1; j<= size; j++){
            var newCol = document.createElement("div");
            newCol.className = "col border h-100";
            newRow.appendChild(newCol);
            var test = document.createTextNode(".");
            newCol.appendChild(test);
        }
}

//Create Button
var newRow = document.createElement("div");
newRow.className = "row border";
app.appendChild(newRow);

}





createUI();

//var test = document.createTextNode("test");
//app.appendChild(newCol);