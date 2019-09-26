var app = document.getElementById("app");
app.className = "container-fluid p-5";

var size = 3;
var switchState = 0;
var player = 1;
// Populate HTML

var board = [];
board.length = size * size;

popArray();
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
        if (player == 1) { board[this.id] == 0;
            this.appendChild(x);
            player = 2;
            console.log(board[this.id]);
        }
        else
             {
            this.appendChild(o);
            player = 1;
        }
        //popBoard();
    }
    else { }

}

function clickReset(){
    
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

// function popBoard() {
//     var x = document.createTextNode('X');
//     var o = document.createTextNode('O');
//     var blank = document.createTextNode('.');

//     board.map((i) => {
//         if (board[i] == 0) {
//             //this.appendChild(x);
//             //document.newRow.newCol.i.createTextNode(blank);
//         };
//         if (board[i] == 1) {
//             console.log(x);
//             //board[i].innerHTML = "X";
//         }
//         if (board[i] == 2) {
//             console.log(o);
//             //board[i].innerHTML = "O";
//         }
//     })


//     function render() {
//         switch (board[switchState]) {

//             case "0":
//                 console.log('switch state');
//             case "1":

//             case "2":
//         }
//     }
//     render();
// }

//var test = document.createTextNode("test");
//app.appendChild(newCol);