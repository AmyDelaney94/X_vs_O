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
var displayText = document.getElementsByName('p1');
var move ; 
var box; 


 /* Add event listener to table */
 let choice = document.getElementsByClass("box");
 choice.addEventListener('click', move, false);


function playGame() {
	
}


/**
 * Change Players
 */
 function nextMove() {
	if (move == 'X') {
		move = 'O';
	} else {
		move = 'X';
	}
} 

/**
 * Computer takes turn
 */


/** 
 * Check Available remaining Moves by checking against winning combinations.
 */
 function gameArea() {
	win(document.getElementById('box1'), document.getElementById('box2'), document.getElementById('box3'));
	win(document.getElementById('box4'), document.getElementById('box5'), document.getElementById('box6'));
	win(document.getElementById('box7'), document.getElementById('box8'), document.getElementById('box9'));
	win(document.getElementById('box1'), document.getElementById('box5'), document.getElementById('box9'));
	win(document.getElementById('box7'), document.getElementById('box5'), document.getElementById('box3'));
	win(document.getElementById('box2'), document.getElementById('box5'), document.getElementById('box8'));
	win(document.getElementById('box1'), document.getElementById('box4'), document.getElementById('box7'));
	win(document.getElementById('box3'), document.getElementById('box6'), document.getElementById('box9'));
}

/**
* Gets the current amount of games won from the DOM and increments it by 1. 
*/
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
 };