//STATES
var game = {
	player1: "X",
	player2: "O",
	currentPlayer: '',
	winner: '',
	winsX: 0,
	winsO: 0
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
	9: ''
};

//FUNCTIONS

//check column winners
var checkColumns = function() {
	if (state[1] === "X" && state[2] === "X" && state[3] === "X") {
		return "X";
	} else if (state[4] === "X" && state[5] === "X" && state[6] === "X") {
		return "X";
	} else if (state[7] === "X" && state[8] === "X" && state[9] === "X") {
		return "X";
	} else if (state[1] === "O" && state[2] === "O" && state[3] === "O") {
		return "O";
	} else if (state[4] === "O" && state[5] === "O" && state[6] === "O") {
		return "O";
	} else if (state[7] === "O" && state[8] === "O" && state[9] === "O") {
		return "O";	
	} else {
		return false;
	}
}
//check row winners
var checkRows = function() {
	if (state[1] === "X" && state[4] === "X" && state[7] === "X") {
		return "X";
	} else if (state[2] === "X" && state[5] === "X" && state[8] === "X") {
		return "X";
	} else if (state[3] === "X" && state[6] === "X" && state[9] === "X") {
		return "X";
	} else if (state[1] === "O" && state[4] === "O" && state[7] === "O") {
		return "O";
	} else if (state[2] === "O" && state[5] === "O" && state[8] === "O") {
		return "O";
	} else if (state[3] === "O" && state[6] === "O" && state[9] === "O") {
		return "O";
	} else {
		return false;
	}
}
//check diagonal winners
var checkDiagonals = function() {
	if (state[1] === "X" && state[5] === "X" && state[9] === "X") {
		return "X";
	} else if (state[3] === "X" && state[5] === "X" && state[7] === "X") {
		return "X";
	} else if (state[3] === "O" && state[5] === "O" && state[7] === "O") {
		return "O";
	} else if (state[3] === "O" && state[5] === "O" && state[7] === "O") {
		return "O";
	} else {
		return false;
	}
}
//check if any winners
var hasWinner = function() {
	if (checkColumns() === "X" || checkRows() === "X" || checkDiagonals() === "X") {
		game.winner= "X";
		game.winsX++;
		return true;
	} else if (checkColumns() === "O" || checkRows() === "O" || checkDiagonals() === "O") {
		game.winner= "O";
		game.winsO++;
		return true;
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
switchPlayer(); //initialize
// check if draw
var checkDraws = function() {
	var count = 0;
  for (let square in state) { 
		if (state[square] === "X" || state[square] === "O") {
			count++;
		}
	}
	if (count === 9) {
		return true;
	} else {
		return false;
	}
}
//render piece
var renderPiece = function(element) {
	var currentSquare = document.getElementById(element);
	state[element] = game.currentPlayer;
	currentSquare.innerHTML = state[element].toString();
	switchPlayer();
}
var updatePrev = function() {
	var prev = document.getElementById("prev");
	alert(game.winner + " have won!");
	prev.innerHTML = game.winner;
	game.currentPlayer = game.winner;
}
var renderWins = function() {
	var pX = document.getElementById("pX");
	var pO = document.getElementById("pO");
	pX.innerHTML = game.winsX;
	pO.innerHTML = game.winsO;
}
// place piece
var playTurn = function(element) {
	var currentSquare = document.getElementById(element);
  if (hasPiece(element)) {
		return alert("Piece already placed...");
	} else if (!hasPiece(element)) {
		if (!hasWinner() ) {
			renderPiece(element);
		}
	} 
	if (hasWinner()) {
		updatePrev();
		renderWins();
		reset();
	} else if (checkDraws()) {
		alert("Game has ended in a draw...");
	} 
}
//reset board
var reset = function() {
	state = {
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
	const squares = document.getElementsByClassName("table");
	for (let i = 0; i < squares.length; i++) {
		squares[i].innerHTML = '';
	}
}





