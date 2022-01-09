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

