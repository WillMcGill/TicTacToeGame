var app = document.getElementById("app");
app.className = "container-fluid p-5";

var size = 3;
var switchState = 0;
var player = 1;

// Populate HTML

var board = [];
board.length = size * size;


//popBoard();

function popArray() {

    board.fill(0);
    console.log(board);
}

function clickHandler() {
    if (board[this.id] == 0) {
        console.log(this.id);
        board[this.id] = player;
        console.log(board);
        var x = document.createTextNode('X');
        var o = document.createTextNode('O');
        if (player == 1) {
        board[this.id] == 0;
            this.appendChild(x);
            document.getElementById("turnIndicator").innerHTML = "O's Turn";
            player = 2;
            //console.log(board[this.id]);
        }
        else {
            this.appendChild(o);
            document.getElementById("turnIndicator").innerHTML = "X's Turn";
            player = 1;
        }

    }
    else { }

}

function clickReset() {
    console.log('reset');
    for (var i = 0; i < size * size; i++) {
        console.log(i);
        document.getElementById(i).innerHTML = "";
        document.getElementById("turnIndicator").innerHTML = "X Goes First";
    }
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
        newRow.className = "row no-gutters";


        for (var j = 0; j < size; j++) {
            var newCol = document.createElement("div");
            newCol.className = "col border py-5";
            newCol.id = count;

            var test = document.createTextNode(" ");
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
    newRow.className = "row no-gutters";
    newRow.id = 'turnIndicator';
    var test = document.createTextNode("X Goes First");
    app.appendChild(newRow);
    newRow.appendChild(test);

    //Reset Button
    var newRow = document.createElement("div");
    newRow.className = "row";
    var resetButt = document.createElement("button");
    resetButt.className = "btn btn-info mx-auto";
    resetButt.addEventListener("click", popArray);
    resetButt.addEventListener("click", clickReset);
    app.appendChild(newRow);
    newRow.appendChild(resetButt);
    resetButt.innerHTML = "Reset";

}

createUI();
popArray();
