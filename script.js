// Wait for DOM content to load before beginning game.
// Add event listeners to buttons.
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    	
    	for (let button of buttons) {
    	    button.addEventListener("click",function() {
    	        if (this.getAttribute("data-type") === "submit") {
    	            resetGame() ;
    	        } else if (this.getAttribute("data-type") === "play") {
    	            alert(`You clicked ${gameType}`);
	            } else {
	                let gameType = this.getAttribute("data-type");
	                alert(`You clicked ${gameType}`);	
	         }
        });
	}
});

// Variables needed in game
const boxElements = document.querySelectorAll('[data-cell]') ;
const playerX = 'X' ;
const playerO = 'O' ;
let X_Turn ;
const winningBoard = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
] ;

const displayText = document.getElementById('p1') ;
let playerOption = null ;
let score = 0 ;

// EventListener for radio button selection
const symbolsOptions = document.querySelectorAll('input[name="choose"]') ;
for (const btnSymbol of symbolsOptions) {
    btnSymbol.addEventListener("click", function(e) {
        playerOption = e.target.value ;
        displayText.innerHTML = `You have chosen to be ${e.target.value}!` ;
        
        clickBox() ;
    });
}

/**
 * Function to listen for what box is clicked and only allows each one be played once
 */
function clickBox() {
    boxElements.forEach(box => {
        box.addEventListener('click',handleClick, {once: true}) ;
    });
}
clickBox();

/**
 * Function for clicking the box designed to take the Event (e)
 */
 function handleClick(e) {
    if (!playerOption) {
        alert("Please choose a player first!") ;
        return ;
    }

    if (typeof X_Turn === 'undefined') X_Turn = playerOption === 'O' ;

    let box = e.target;
    let currentPlayer = X_Turn ? playerO : playerX;
    box.textContent = currentPlayer;
    makeMove(box, currentPlayer);

    nextTurn();

    if (gameWon(currentPlayer)) {
        gameOver();
        return;
    }

    currentPlayer = X_Turn ? playerO : playerX;
    while (true) {
        let boxes = document.getElementsByClassName('box');
        let cpuSelect = Math.floor(Math.random()*9);
        if (cpuSelect == 9) {
            cpuSelect--;
        }
        box = boxes[cpuSelect];

        let isIn = false;
        for (let i=0; i<box.classList.length; i++) {
            if (currentPlayer == box.classList[i]) {
                isIn = true;
            }
        }

        if (isIn) {
            console.log('I am here!'); 
            continue;
        }
        box.textContent = currentPlayer;
        makeMove(box, currentPlayer);
        break; 
    }
    

    nextTurn();

    if (gameWon(currentPlayer)) {
        gameOver();
        return;
    }
}

/**
* Gets the current amount of games won from the DOM and increments it by 1. 
*/

function gameOver() {
    score += 1 ;
    document.getElementById('score').innerHTML = score ;
    resetGame() ;
    alert(`Game Over! You Won!`) ;
}


function notGameOver() {
    score -= 1 ;
    document.getElementById('score').innerHTML = score ;
    resetGame() ;
    alert(`Game Over! You Lose!`) ;
} 


/**
 * function to reset game once button selected or game over
 */
 function resetGame() {
    console.log('ResetGame') ; 
    boxElements.forEach(box => {
        for (const btnSymbol of symbolsOptions) {
            btnSymbol.checked = false ;
        }

        playerOption = null ;
        X_Turn = undefined ;
        box.textContent = '' ;
        box.classList.remove('X', 'O') ;
        displayText.innerHTML = 'Please Choose your player:' ;
    });
}

/**
 * Function that displays the correct symbol depending on turn.
 */
 function makeMove(box, currentPlayer) {
    box.classList.add(currentPlayer);
}

/**
 * Function swaps between X and O each turn. 
 */
 function nextTurn() {
    X_Turn = !X_Turn;
}

/**
 * Function to check if game has been won
 * If all indexes are same player then game over.
 */
function gameWon(currentPlayer) {
    return winningBoard.some(combination => {
        return combination.every(index => {
            return boxElements[index].classList.contains(currentPlayer) ;
        });
    });
}

/**
 * Current Player dertermined here
 */
function currentPlayer() {
    move = this.value;
    displayText.textContent = move + `, Select a square to take your turn.` ;
    X_Turn.classList.add('Lets Go!') ;
    this.checked = false;
}

//Set CPU to not player.
function computer() {
    if (X_Turn === "X") {
        computer = "O";
    } else {
        computer = "X";
    }
}

//Let CPU make random choice
function randomPlay(box) {
    let x = Math.floor(Math.ceil() * box.length -1);
    let allBoxes = box[x];
    return (allBoxes);
}

//Event listener to Game-area
function playerMove() {
    if (this.textContent == '') {
      this.textContent = move;
      gameWon();
      nextMove();
      computer();
    }
  }


//Pop-up for Rules
let openPopupButtons = document.getElementsByClassName("open-popup-btn");

    for (let button of openPopupButtons) {
        button.addEventListener("click", function () {
            let buttonSelected = this.getAttribute("id");

            openPopup(buttonSelected);
        });
    }
    
//Add event listener to close buttons on the popups
let closePopupButtons = document.getElementsByClassName("close-popup-btn");

 for (let button of closePopupButtons) {
    button.addEventListener("click", function () {
        let buttonSelected = this.getAttribute("id");

         closePopup(buttonSelected);
    });
}

/**
 * Open the pop up when pressing the respective button
 */
 function openPopup(button) {
    if (button === "open-rules-btn") {
        document.getElementById("rules").style.display = "block";
    }
}

/**
 * Close the pop up if close button is pressed
 */
function closePopup(button) {
     if (button === "close-rules-btn") {
        document.getElementById("rules").style.display = "none";
    }
}

