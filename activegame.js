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



document.addEventListener("DOMContentLoaded", function(){
    let symbols = document.getElementsByTagName("input");
    
    	for (let symbol of symbols) {
    	    symbol.addEventListener("click",function() {
                let player1 = document.querySelectorAll('input[name="choose"]:checked').value;
    	        if (this.getAttribute("value") === "X") {
                    player1 = "X"
    	            alert(`You have chosen to be X!`);
    	        } else (this.getAttribute("value") === "O");
    	            alert(`You have chosen to be O!`);
	            } )    
        }
});

// Variables needed in game
const boxElements = document.querySelectorAll('[data-cell]')
const playerX = 'X'
const playerO = 'O'
let X_Turn
const winningBoard = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

boxElements.forEach(box => {
    box.addEventListener('click',handleClick, {once: true})
});
let displayText = document.querySelector('p1');

//Choose a Player X or O
// let player1 = document.querySelectorAll('input[name="choose"]:checked').value;
// if (player1 === "X") {
//     console.log(displayText = `You have chosen to be X!`);
// } else {
//     console.log(displayText = `You have chosen to be O!`);  
// };


/**
 * Function for clicking the box designed to take the Event (e)
 */
 function handleClick(e) {
    const box = e.target
    const currentPlayer = X_Turn ? playerO : playerX 
    box.textContent = currentPlayer
    makeMove(box,currentPlayer)

    nextTurn()
    console.log(currentPlayer)

    if (gameWon(currentPlayer)) {
        gameOver(false)
    } else (gameOver(true))
}


/**
 * Function that plays the correct symbol depending on turn.
 */
 function makeMove(box, currentPlayer) {
    box.classList.add(currentPlayer)
}

/**
 * Function swaps between X and O each turn. 
 */
 function nextTurn() {
    X_Turn = !X_Turn
}

/**
 * Function to check if game has been won
 * If all indexes are same player then game over
 */
function gameWon(currentPlayer) {
    return winningBoard.some(combination => {
        return combination.every(index => {
            return boxElements[index].classList.contains(currentPlayer)
        })
    })
}


//Current Player
function currentPlayer() {
    move = this.value;
    displayText.textContent = move + `, Select a square to take your turn.`
    player1.classList.add('Lets Go!')
    this.checked = false;
}

//Set CPU to not player.
    // if (player1 === "X") {
    //     computer = "O";
    // } else {
    //     computer = "X";
    // };



// //Change Player
// function nextMove() {
// 	if (move == 'X') {
// 		move = 'O';
// 	} else {
// 		move = 'X';
// 	}
// 	displayText.innerHTML = currentPlayer();
// } 

//Let CPU make random choice
function randomPlay(box) {
    let x = Math.floor(Math.random() * box.length -1);
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


//Score vs CPU



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