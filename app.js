//STATES
var game = {
	player1: "X",
	player2: "O",
	currentPlayer: "X",
	winner: '',
};

var state = {
	1: '',
	2: '',
	3: '',
	4: '',
	5: '',
	6: '',
	7: '',
	8: '',
	9: '',
};

//FUNCTIONS

//check column winners
var checkColumns = function() {
	if (state[1] === "X" && state[2] === "X" && state[3] === "X") {
		game.winner = "X's";
		return true;
	} else if (state[4] === "X" && state[5] === "X" && state[6] === "X") {
		game.winner = "X's";
		return true;
	} else if (state[7] === "X" && state[8] === "X" && state[9] === "X") {
		game.winner = "X's";
		return true;
	} else if (state[1] === "O" && state[2] === "O" && state[3] === "O") {
		game.winner = "O's";
		return true;
	} else if (state[4] === "O" && state[5] === "O" && state[6] === "O") {
		game.winner = "O's";
		return true;
	} else if (state[7] === "O" && state[8] === "O" && state[9] === "O") {
		game.winner = "O's";
		return true;	
	} else {
		return false;
	}
}
//check row winners
var checkRows = function() {
	if (state[1] === "X" && state[4] === "X" && state[7] === "X") {
		game.winner = "X's";
		return true;
	} else if (state[2] === "X" && state[5] === "X" && state[8] === "X") {
		game.winner = "X's";
		return true;
	} else if (state[3] === "X" && state[6] === "X" && state[9] === "X") {
		game.winner = "X's";
		return true;
	} else if (state[1] === "O" && state[4] === "O" && state[7] === "O") {
		game.winner = "O's";
		return true;
	} else if (state[2] === "O" && state[5] === "O" && state[8] === "O") {
		game.winner = "O's";
		return true;
	} else if (state[3] === "O" && state[6] === "O" && state[9] === "O") {
		game.winner = "O's";
		return true;
	} else {
		return false;
	}
}
//check diagonal winners
var checkDiagonals = function() {
	if (state[1] === "X" && state[5] === "X" && state[9] === "X") {
		game.winner = "X's";
		return true;
	} else if (state[3] === "X" && state[5] === "X" && state[7] === "X") {
		game.winner = "X's";
		return true;
	} else if (state[3] === "O" && state[5] === "O" && state[7] === "O") {
		game.winner = "O's";
		return true;
	} else if (state[3] === "O" && state[5] === "O" && state[7] === "O") {
		game.winner = "O's";
		return true;
	} else {
		return false;
	}
}
//check if any winners
var hasWinner = function() {
	if (checkColumns() || checkRows() || checkDiagonals()) {
		return true;
	} else {
		return false;
	}
} 

// check if square already has piece 
var hasPiece = function(position) {
	if (state[position] !== '') {
		return true;
	} else {
		return false;
	}
}
// switch currentPlayer
var switchPlayer = function() {
	if (game.currentPlayer === game.player1) {
		game.currentPlayer = game.player2;
	} else {
		game.currentPlayer = game.player1;
	}
}
// check if draw
var checkDraws = function() {
  for (let square in state) {
		if (!hasWinner) {
			if (state[square] !== '') {
				return true;
			} else {
				return false;
			}
		}
	}
}
// place piece
var placePiece = function(element) {
	var currentSquare = document.getElementById(element);
  if (hasPiece(element)) {
		alert("Piece already placed...");
	} else if (!hasPiece(element)) {
		state[element] = game.currentPlayer;
		currentSquare.innerHTML = game.currentPlayer;
		switchPlayer();
	} 
	if (hasWinner()) {
		alert(game.winner + " have won!");
	} 
	if (checkDraws()) {
		alert("Game has ended in a draw...");
	} 
}



// var sq1 = document.getElementById("sq1");
// var sq2 = document.getElementById("sq2");
// var sq3 = document.getElementById("sq3");
// var sq4 = document.getElementById("sq4");
// var sq5 = document.getElementById("sq5");
// var sq6 = document.getElementById("sq6");
// var sq7 = document.getElementById("sq7");
// var sq8 = document.getElementById("sq8");
// var sq9 = document.getElementById("sq9");



