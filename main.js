const elements = (function() {
  let gameBoard = document.getElementById('game-board');

  return {
    gameBoard
  }
})();

// Gameboard Module
const gameBoard = (function() {
  let board = 
  [
    '', '', '',
    '', '', '',
    '', '', ''
  ];

  const getGameBoard = () => board;
  return {
    getGameBoard
  }
})();

// Display Module
const displayController = (function() {

  // This function will take an array which is a gameboard,
  // And then it will display the gameboard on the screen.
  const displayGameBoard = (gameBoard) => {
    let gameBoardLength = gameBoard.length;
    for(let i=0; i < gameBoardLength; i++) {
      elements.gameBoard.children[i].innerHTML = gameBoard[i]
    }
  }

  return {
    displayGameBoard
  }
})();

// Factory Functions for making players
const playerFactory = (name) => {

  return {
    name,
    chooseWhereToPlace
  }
}

displayController.displayGameBoard(gameBoard.getGameBoard());

// Add EventListener to the all spots on the gameBoard
for(let i = 0; elements.gameBoard.children.length; i++) {
  let div = elements.gameBoard.children[i];
  console.log(div);
  // elements.gameBoard.children[i].addEventListener('click', (event) => {
  //   console.log('It is clicked!')
  // })
}

