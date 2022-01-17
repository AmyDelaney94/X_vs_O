// Wait for DOM content to load before beginning game.
// Add event listeners to buttons.
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    	
    	for (let button of buttons) {
    	    button.addEventListener("click",function() {
    	        if (this.getAttribute("data-type") === "submit") {
    	            alert("You clicked Reset!");
    	        } else if (this.getAttribute("data-type") === "play") {
    	            alert(`You clicked ${gameType}`);
	            } else {
	                let gameType = this.getAttribute("data-type");
	                alert(`You clicked ${gameType}`);	
	         }
        })
	}
});

// Setting variables required for game play
var gameArea = document.getElementsByClassName('box');
var player = document.querySelector('radio');
var displayText = document.getElementById('p1');
let celebrationText = () => `${move} has won the game!!`
let nowinnerText = () => `Sorry we have no winner, please try again.` 
var move  = player(); 
var box;  
let gameOptions = ["","","","","","","","","",]
let gameOver = false;

 /* Add event listener to game area */
 function takeTurn () {
	 if(this.innerHTML == "") {
		 this.innerHTML = move;
		 computerTurn(); 
		 nextMove();
		 gameWon();
	 }
 }

 var choice = document.getElementsByClassName('box');
 choice.addEventListener('click');

function playGame(boxSelected,boxLocation) {
	gameOptions[boxLocation] = move;
	boxSelected.innerHTML = move;
}

/**
 * Current players turn status update:
 */
let currentPlayer = () => `It is ${move}'s turn next!`
displayText.innerHTML = currentPlayer();


/**
 * Change Players
 */
 function nextMove() {
	if (move == 'X') {
		move = 'O';
	} else {
		move = 'X';
	}
	displayText.innerHTML = currentPlayer();
} 

/**
 * Computer takes turn
 */

 function computersTurn() {
	var emptyBox = [];
	var random;

for (var i = 0; i < box.length; i++) {
	if (box[i].textContent == ''){
		emptyBox.push(box[i]);
	}
}

/**
 * Function for Computer to play available box
 */
	random = Math.ceil(Math.random() * emptyBox.length) -1;
	emptyBox[random].textContent = move;
	gameArea();
	nextMove();
}

/** 
 * Check game status by game-area completion against winning combinations.
 */
 let gameWon = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[2,5,8],[3,5,7],[1,4,7],[3,6,9]];
document.querySelectorAll('.box').forEach(box => box.addEventListener('click',boxSelected));

/**
 * 
 */

function moveTaken(boxChosen) {
	let boxSelected = boxChosen.target;
	let boxLocation = parseInt(boxSelected.getElementsByClassName('box'));

	if (gameOptions[boxLocation] !== "" || !gameOver) {
		return;
	}

	playGame(boxSelected,boxLocation);
	gameScore()
}

function gameScore() {
	let win = false;
	for (let i = 0; i <= 8; i++) {
		var gameWon = gameWon[i];
		let x = gameOptions[gameWon[0]];
		let y = gameOptions[gameWon[1]];
		let z = gameOptions[gameWon[2]];

		// if statement used to determine if game can continue with x,y,z representing a column each in the game
		if (x === "" || y === "" || z === ""){
			continue;
		} 
		if (x === y && y === z) {
			win = true;
			break
		}

	}

	if (win) {
		displayText.innerHTML = celebrationText();
		gameOver = true ; 
		return;
	}

	let draw = gameWon !== gameWon[i];
	if (draw) {
		displayText.innerHTML = nowinnerText();
		gameOver = true ;
		return;
	}

	nextMove();
}

/**
 * Function to restart game
 */
// document.querySelectorAll('.box').forEach(box => box.innerHTML ="");




/**
* Gets the current amount of games won from the DOM and increments it by 1. 
*/
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
 };




// //Change Player
// function nextMove() {
// 	if (move == 'X') {
// 		move = 'O';
// 	} else {
// 		move = 'X';
// 	}
// 	displayText.innerHTML = currentPlayer();
// } 