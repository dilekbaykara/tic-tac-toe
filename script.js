// User Interface //
//var gameBoard = document.querySelector('game-board');
var restartBtn = document.querySelector('.restart');
const newGame = document.querySelector('new-game');
const displayMessage = document.querySelector('message-display');
var cells = document.querySelectorAll('.box');
const playText = document.getElementById("game-text");

//Win Lose Messages//
let playerOneWin = "You won the game!";
let playerTwoWin = "You lost the game!";

//Create symbol X
var x = document.createElement('div');
//Add text content to element
x.innerHTML = '<span>X</span';

//Create symbol O
var o = document.createElement('div');
//Add text content to element
o.innerHTML = '<span>O</span';


//Store Array inside spaces
const spaces = [];
//Create players and their assigned symbols 
//player X
var playerOne = "X";
//player O
var playerTwo = "O";

//Function to switch turns 

//Play Round, in each round, 3 cells must be taken by one player's marker


// obj to mark the board 
const markBoard = () => {
var currentPlayer = playerOne;

//UI to display element in cells
cells.forEach(cells => {
cells.addEventListener('click', e => {
    console.log('prunes')})
});
}



//3 in a row

//a tie 

//logic conditional that does not allow another player to take the others spot.

//Determine winner 

//Return Loser

//game over logic 


//UI for tying marks to the DOM when clicking on specific cells


/*add display element that congratulates the winne*/