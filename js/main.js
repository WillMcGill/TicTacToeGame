var app = document.getElementById("app");
app.className = "container-fluid p-5";

var size = 3;
var switchState = 0;
// Populate HTML

var board = [];
board.length = size * size;

popArray();
popBoard();

function popArray() {

    board.fill(0);
}

function clickHandler(){
    console.log(this.id);
    board[this.id] = 2;
    console.log(board);
}

function createUI() {

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
    for (var i = 0; i < size; i++) {
        var newRow = document.createElement("div");
        newRow.className = "row";


        for (var j = 0; j < size; j++) {
            var newCol = document.createElement("div");
            newCol.className = "col border";
            newCol.id = count;
            
            var test = document.createTextNode(".");
            newCol.addEventListener('click', clickHandler);
            newRow.appendChild(newCol);
            
            newCol.appendChild(test);
            //newCol.addEventListener('click', console.log('click'));
            //newCol.appendChild(square);
            count++;
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
    newRow.className = "row";
    var resetButt = document.createElement("button");
    resetButt.className = "btn btn-info mx-auto";
    resetButt.addEventListener("click", popArray);
    app.appendChild(newRow);
    newRow.appendChild(resetButt);
    resetButt.innerHTML = "Reset";

}

createUI();

function popBoard() {
    var x = document.createTextNode('X');
    var o = document.createTextNode('O');
    var blank = document.createTextNode('.');

    board.map((i) => {
        if (board[i] == 0) {
            console.log(blank);
            //document.newRow.newCol.i.createTextNode(blank);
        };
        if (board[i] == 1) {
            console.log(x);
        }
        if (board[i] == 2) {
            console.log(o);
        }
    })


    function render() {
        switch (board[switchState]) {

            case "0":
                console.log('switch state');
            case "1":

            case "2":
        }
    }
    render();
}

//var test = document.createTextNode("test");
//app.appendChild(newCol);