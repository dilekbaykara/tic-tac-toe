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

const switchPlayer = () => {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  }

  const showMessage = () => {
    //display current player inside of display message div
   if (currentPlayer === playerOne)
   {
    displayMessage.innerHTML = '  O';
}
   if (currentPlayer === playerTwo)
   {
    displayMessage.innerHTML = '  X';
}

};


  gameBoard.addEventListener("click", (event) => {
    if (event.target.classList.contains("cell")) {
      if (event.target.textContent === "") {
        event.target.textContent = currentPlayer;
        const indexOfClickedCell = Array.prototype.indexOf.call(document.querySelectorAll('.cell'), event.target);
        boardArray[indexOfClickedCell] = currentPlayer;
        switchPlayer();
        showMessage();
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
