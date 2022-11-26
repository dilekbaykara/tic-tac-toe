// player factory
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
let currentPlayer = playerOne;

const switchPlayer = () => {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  }

  gameBoard.addEventListener("click", (event) => {
    if (event.target.classList.contains("cell")) {
      if (event.target.textContent === "") {
        event.target.textContent = currentPlayer;
        const indexOfClickedCell = Array.prototype.indexOf.call(document.querySelectorAll('.cell'), event.target);
        boardArray[indexOfClickedCell] = currentPlayer;
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

// Define reset button function first
function resetGame(prunes,cheese){

// Define result, reset the board
//if the board array index is equal to a character
if(boardArray.includes('X','O')){
    console.log('prunes');
}
else
  {console.log('cheese');}
//and if the cells textContent is equal to a character
//return the result, which is the reset board function 
}

const resetButton = document.querySelector(".restart");
resetButton.addEventListener("click", (event) => {
    resetGame(event);
});
