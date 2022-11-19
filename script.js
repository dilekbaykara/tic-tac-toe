// User Interface //
const gameBoard = document.querySelector('game-board');
const restartGame = document.querySelector('restart');
const newGame = document.querySelector('new-game');
const displayMessage = document.querySelector('message-display');
const gameBox = document.getElementsByClassName('box');
var x = document.createElementNS("../images/X.svg", "X");
var O = document.createElementNS(".images/O.svg", "O");

//Store Array inside Gameboard object
/*gameBoard =  {
gameBox : ['0','1','2','3','4','5','6','7','8']
}*/


//Create players and their assigned symbols 

const playerOne = (symbol) => {
this.symbol = x;

   /* var img = document.createElement("img");
    img.src = "./images/X.svg";
    var src = document.getElementsByClassName("box");
    src.innerHTML = "./images/X.svg";*/
};
    
    const playerTwo = (symbol) => {
    this.symbol = symbol;
    };
    
//Create function to connect to html/css scoreboard for player 1 and player 2 (computer) to display scores 

/*gameBox[1].addEventListener('click', playerOne);
gameBox[0].addEventListener('click', function(img) {
    var img = document.createElement("img");
    img.src = "./images/X.svg";
    var src = document.getElementsByClassName("box");
    src.innerHTML = "./images/X.svg";
});
*/


gameBox[0].addEventListener('click', function() {
    var divtest = document.createElement("div");
    divtest.innerHTML = x;
    gameBox[0].appendChild(divtest);
});


//Function playerOneRound(X) { 
// }
    
    //Create game board to be blank at reset
    
    
    
    //Create X and O symbols to populate on game board when the assigned player clicks on the divs



    //Else 
    
    
    //If div is already taken by another player they cannot change that div with their symbol
    
    
    //Create function that returns a winner if all three divs line up when an assigned player clicks them
    
    
    //Create function that returns message on page of winner or loser 
    
    
    //Create function that returns loser if else their symbols don’t line up
    //Create win round function that returns a winner of game after winning 3 rounds
    //Else player returns loser if they do not win 3 rounds 
    //Create function that returns “you win” if player wins 3 rounds 
    //Else 
    //return “you lose” for player that lost 3 rounds
    //Create function that displays loser or winner on screen 
    //Create function that restarts game all over again
    //Create button event listener that restarts game 
    
    //PlayRound computer AI 
    
    //create play round feature that is triggered for player 2 (computer AI) once player 1 clicks on a div 
    //If player one clicks on a div then player two will select div to the bottom
    //Else if there is no more divs below
    //Then to the right of it until winner is called for round…?
    