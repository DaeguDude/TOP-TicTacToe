const elements = (function() {
  let gameBoard = document.getElementById('game-board');

  return {
    gameBoard
  }
})();

// Gameboard Module
const gameBoard = (function() {
  let _playerTurn = 0;

  let _board = 
  [
    '', '', '',
    '', '', '',
    '', '', ''
  ];

  const getGameBoard = () => _board;
  const giveATurnToPlayer = (playerNum) => _userTurn = playerNum;
  const getWhoseTurn = () => _userTurn
  return {
    giveATurnToPlayer,
    getWhoseTurn,
    getGameBoard
  }
})();

// Display Module
const displayController = (function() {
  let gameBoard = elements.gameBoard;

  const enablePlacingMarker = () => {
    
    // // Add EventListener to the all spots on the gameBoard
    for(let i = 0; i < gameBoard.children.length; i++) {
      let div = gameBoard.children[i];
      
      div.addEventListener('click', (event) => {
        
      })
    }
  }

  // This function will take an array which is a gameboard,
  // And then it will display the gameboard on the screen.
  const displayGameBoard = (gameBoard) => {
    let gameBoardLength = gameBoard.length;
    for(let i=0; i < gameBoardLength; i++) {
      elements.gameBoard.children[i].innerHTML = gameBoard[i]
    }
  }

  return {
    gameBoard,
    enablePlacingMarker,
    displayGameBoard
  }
})();

// Factory Functions for making players
const Player = (name, marker) => {
  let _name = name;
  let _marker = marker;

  const getName = () => _name;
  const getMarker = () => _marker;

  return {
    getName,
    getMarker
  }
}

const player1 = Player("Sanghak", "X");
const player2 = Player("SangMyeong", "O");

displayController.displayGameBoard(gameBoard.getGameBoard());

// displayController.enablePlacingMarker();

// START THE GAME
gameBoard.giveATurnToPlayer(1);
console.log(gameBoard.getWhoseTurn());

