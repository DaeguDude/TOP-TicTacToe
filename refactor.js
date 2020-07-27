// gameBoard Module
const gameBoard = (function() {
  // Main Game Board
  let _board = []
  
  // Initialize the board with empty string
  const initializeBoard = () => {
    for(let i = 0; i < 9; i++) {
      _board.push('');
    }
  }

  const getGameBoard = () => _board;

  return {
    initializeBoard,
    getGameBoard
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

// Display Module, everything related with display
const displayController = (function(doc) {
  
  // This will get the game-board from HTML
  const getGameBoardFromWeb = () => {
    // If we succesfully retrieved document object model, then get the board
    if(!!doc && 'getElementById' in doc) {
      return doc.getElementById('game-board');
    }
  }

  /**
   * To render the actual game board to the webpage, you need to have a parameter
   * to receive the gameboard, and rende that gameboard to the web.
   */
  const render = (gameBoard) => {
    let gameBoardArray = gameBoard;

    let gameBoardWeb = getGameBoardFromWeb();
    for(let i = 0; i < gameBoardWeb.children.length; i++) {
      gameBoardWeb.children[i].innerHTML = gameBoardArray[i];
    }
    
  }
  

  return {
    getGameBoardFromWeb,
    render
  }
})(document);

// game module, this will control the main flow of the game
const game = (function() {

})();


displayController.render(['X','X','X','O','O','O','X','X','X'])