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
        }
        else {
            this.appendChild(o);
            document.getElementById("turnIndicator").innerHTML = "X's Turn";
            player = 1;
        }
        winChecker();
    }
    else { }

}

function clickReset() {
    //console.log('reset');
    for (var i = 0; i < size * size; i++) {
        //console.log(i);
        player = 1;
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
        newRow.className = "row no-gutters justify-content-md-center";


        for (var j = 0; j < size; j++) {
            var newCol = document.createElement("div");
            newCol.className = "col col-lg-4 border py-5";
            newCol.id = count;

            var test = document.createTextNode(" ");
            newCol.addEventListener('click', clickHandler);
            newCol.setAttribute("style", "height: 100px;")
            newRow.appendChild(newCol);
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

function winChecker() {
    
    var winArray = [[0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,4,8],
                    [2,4,6]]

                    //console.log(winArray);

    for (var i = 0; i < winArray.length; i++){
        //console.log(i);
        var counterX = 0;
        var counterO = 0;
        for (var j = 0; j < winArray[i].length; j++){
            counterX = counterX + board[winArray[i][j]];
            console.log(counterX);
            if (counterX == 3){
            
            }
        }
    }
                
    
} 
    
    //     //Col Checker

    // for (var j = 0; j < size; j++) {
    //     var colScore = 0;
    //     var zeroCount = 0;
    //     for (var i = j; i < board.length; i = i + size) {

    //         if (board[i] == 0) {
    //             zeroCount++
    //             break;
    //         }
    //         else if (board[i] !== 0) {
    //             colScore = colScore + board[i]
    //             if (colScore == size && zeroCount == 0) {
    //                 console.log("x wins col");
    //                 board.fill(3);
    //                 //console.log(board);
    //                 j = size;
                    
    //             }
    //             else if (colScore == size * 2 && zeroCount == 0) {
    //                 console.log("o wins col");
    //                 board.fill(3);
    //                 //console.log(board);
    //                 j = size + 1;
    //                 break;
    //             }
    //         }
    //     }
    // }
    // for(var n = 0; n < board.length; n = n + size){
    //     var rowScore = 0;
    //     var zeroCountRow = 0;
    //    // console.log(n);
    //     for ( var q = n; q <= (n + (size - 1)); q++){
    //         console.log (q);
    //         if (board[q] == 0) {
    //             zeroCountRow++;
    //             break;
    //         }
    //         else if (board[q] !== 0) {
    //             colScore = colScore + board[n]
    //             if (rowScore == size && zeroCountRow == 0) {
    //                 console.log("x wins row");
    //                 board.fill(3);
    //                 console.log('col score 1');
    //                 n = size;
    //                 break;

    //             }
    //             else if (rowScore == size * 2 && zeroCountRow == 0) {
    //                 console.log("o wins row");
    //                 board.fill(3);
    //                 console.log('col score 2');
    //                 n = size + 1;
    //                 break;

    //             }

    //         }
    //     }
    //     console.log('break');

    // }





createUI();
popArray();