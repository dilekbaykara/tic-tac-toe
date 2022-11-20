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
let gameBegin = "Let's Play!"

//Create symbol X
var x = document.createElement('div');
//Add text content to element
x.innerHTML = '<span>X</span';

//Create symbol O
var o = document.createElement('div');
//Add text content to element
o.innerHTML = '<span>O</span';


//Store Array inside of gameBoard Object
const gameBoard = [];
//Create players and their assigned symbols 
//player X
const playerOne = {
marker : "X"
};
//player O
const playerTwo = {
marker : "O"
};

//define nextTurn
function changeTurn(){
   turn = turn === 'X' ? 'O' : 'X';
}

//Function to switch turns 
class playGame {
    constructor() {
        if (this.innerHTML == '') {
            this.innerHTML = turn;
            changeTurn();
        }
    }
}

function foo(prunes){
cells.forEach(cells => {
    cells.addEventListener('click', e => {return console.log(prunes);})
});
}


//define flow of game itself inside of an object
const gameFlow = {
    turn: "playerOne",
    gameStart: foo(playGame)
    }
    

//Play Round, in each round, 3 cells must be taken by one player's marker



//UI to display element in cells, created an event listener for each cell to console log a message to test functionality
/*cells.forEach(cells => {
    cells.addEventListener('click', e => {
//call the function to begin the game and switch between rounds after player 1 goes
//return the UI functionality when cell is clicked for either player
if (currentPlayer == playerOne)
return e.target.innerHTML = playerOne;})
if (currentPlayer == playerTwo)
return e.target.innerHTML = playerTwo;})*/

    
//THIS WORKS//
/*cells.forEach(cells => {
cells.addEventListener('click', e => {
    e.target.innerHTML = playerOne;})
});
*/




//3 in a row

//a tie 

//logic conditional that does not allow another player to take the others spot.

//Determine winner 

//Return Loser

//game over logic 


//UI for tying marks to the DOM when clicking on specific cells


//add display element that congratulates the winner