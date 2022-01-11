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

//Event listeners for Game screen
// document.getElementsByTagName("td").forEach(box() => box.addEventListener('click', playAvailable) );
document.addEventListener("DOMContentLoaded", function(){
    let box = document.getElementsByTagName("td");

	for (let box of boxes) {
		box.addEventListener("click",function() {
			if (this.getAttribute(playAvailable) === true) {
				alert("You made your move!");
			} else {
				let boxSelected = this.getAttribute(playAvailable);
				alert(`${boxSelected} has already been slected`);	
		 	}
		})
	}
}) ;


/**
 * Status of the game
 */
 const gameStatus = document.querySelector('.playerstatus');

/**
 * This function will stop the game when it is no longer playable
 */
 let gameActive = true; 

document.querySelector('.reset').addEventListener('click', playAgain);

/**
 * Function used to determine what cells in the table have been played
 * This will help determine gameActive and what message should be displayed
 * Either win, loss or tie
 */
 let gamePlay = ["","","","","","","","",""]

 const winText = () => `Player ${currentPlayer} Wins!!`;
 const drawText = () => `The Game is a draw, try again!`;
 

/**
 * Function for who takes next turn
 */
let currentPlayer = "X";

const currentPlayersGo  = () => `Player ${currentPlayer}'s turn to play!`;

// Functions needed for game play!

gameStatus.innerHTML = currentPlayersGo();
function boxSelected() {

}

function nextTurn() {
	// if (currentPlayer === "X") {
	// 	currentPlayer = `Its's ${currentPlayersGo} turn`;
	// } else {
	// 	result = `Its's ${currentPlayersGo} turn`;
	// }
	// return currentPlayer;
};

/**
 * When game is over it will go back to default settings.
 */
function playAgain() {
	// currentPlayer = "X";
	// gameActive = true;
	// gamePlay = ["","","","","","","","",""];

	// gameActive.innerHTML = currentPlayersGo;
	// document.getElementsByClassName('.box').forEach(box => box.innerHTML = "");
}

function gameScore() {

}

function playAvailable(playAvailableValid) {
	const boxChosen = playAvailableValid.target;
	const 
}

/**
* Gets the current amount of games won from the DOM and increments it by 1. 
*/
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
 };