//
const playerFactory = () => {
    const playTurn = (event, currentPlayer) => {
      const id = boardObject.cells.indexOf(event.target);
      boardObject.boardDisplay[id] = currentPlayer;
      boardObject.render();
    };
  
    return {
      playTurn
    };
  };
  
  // Gameboard object
  const boardObject = (() => {
    let boardDisplay = ['', '', '', '', '', '', '', '', ''];
    const cells = Array.from(document.querySelectorAll(".cell"));
    // displays the content of the boardArray
    const render = () => {
      boardDisplay.forEach((cells, idx) => {
        cells[idx].innerHTML = boardDisplay[idx];
      });
    };
    return {
      boardDisplay,
      render,
      cells
    };
  })();


  // Create Array from DOM
const boardArray = [...document.querySelectorAll(".cell")].map(cells=>cells.innerHTML);
console.log(boardArray);

// Display controller, shows which player is which
const displayController = (() => {
const playerOne = 'X';
const playerTwo = 'O';
const gameBoard = document.querySelector(".game-board");
//DOM Element display for current player turn
let displayMessage = document.getElementById("game-display");
let currentPlayer = playerOne;

const nextPlayer = (currentPlayer) => {
  return currentPlayer === playerOne ? playerTwo : playerOne;
}
const switchPlayer = () => {
    currentPlayer = nextPlayer(currentPlayer);
  }


  const showMessage = () => {
    const next = nextPlayer(currentPlayer);
    //display current player inside of display message div
   if (next === playerOne)
   {
    displayMessage.innerHTML = 'Current Player: X';
}
   if (next === playerTwo)
   {
    displayMessage.innerHTML = 'Current Player: O';
}
if (hasWon(playerOne))
  displayMessage.innerHTML='Player One Wins!';
else if (hasWon(playerTwo))
  displayMessage.innerHTML='Player Two Wins!' ;

};


  gameBoard.addEventListener("click", (event) => {
    if (event.target.classList.contains("cell")) {
      if (event.target.textContent === "") {
        event.target.textContent = currentPlayer;
        const indexOfClickedCell = Array.prototype.indexOf.call(document.querySelectorAll('.cell'), event.target);
        boardArray[indexOfClickedCell] = currentPlayer;
        if (hasWon(currentPlayer)) {
          
        }
        showMessage();
        switchPlayer();
        
        //const id = boardObject.cells.indexOf(event.target);
        //boardObject.boardArray[id] = currentPlayer;
        //boardObject.render();

        ////////
        //player.playTurn(event, currentPlayer);
      }
    }
  });
})();


// Defining DOM element of Tic-Tac-Toe grid
const gameDisplay = document.getElementById("game-board");


//DOM Element display for current player turn
//const displayMessage = document.getElementById("game-display");

let displayMessage = document.getElementById("game-display");

// Function to clear DOM elements of gameDisplay board and empty boardArray inputs
function clearGame(){
for(let i =0;i < gameDisplay.children.length;i++) {
    gameDisplay.children[i].innerHTML = '';}
    return (boardArray.length = 0); 
    
}
// Define reset button function first
function resetGame(){

// Define result, reset the board
//if the board array index is equal to a character
if(boardArray.includes('X','O')){
    displayMessage.innerHTML='';
    { return clearGame();
      }
}
else
  {displayMessage.innerHTML='';}
//and if the cells textContent is equal to a character
//return the result, which is the reset board function 
}

const resetButton = document.querySelector(".restart");
resetButton.addEventListener("click", (event) => {
    resetGame(event);
   
});

//Define winning player conditions
const winCondition = [     
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];

// takes current player (x or o) and determines if they have won (returns true or false)
function hasWon(currentPlayer) {
  let winner = false;
  for (const condition of winCondition) {
    const firstIndex = condition[0];
    const secondIndex = condition[1];
    const thirdIndex = condition[2];
    
    const firstValue = boardArray[firstIndex];
    const secondValue = boardArray[secondIndex];
    const thirdValue = boardArray[thirdIndex];
    
    if (currentPlayer === firstValue && currentPlayer === secondValue && currentPlayer === thirdValue) {
      winner = true;
    }
  }
  
  return winner;
}

// Define winner of round function
function returnRoundWinner(){
if (playerOneWin)
return displayRoundWinner();
if (playerTwoWin)
return
displayRoundWinner();
}

//DOM function to display winner of round once conditions are met
function displayRoundWinner(){
if (playerOneWin)
return displayMessage.innerHTML='Player One Wins!';
if (playerTwoWin)
return displayMessage.innerHTML='Player Two Wins!' ;
}