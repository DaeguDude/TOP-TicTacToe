// gameBoard Module
const gameBoard = (function() {
  // Main Game Board
  let _board = []
  
  // Initialize the board with empty string
  const initializeBoard = () => {
    console.log('gameBoard - initialized the board');
    for(let i = 0; i < 9; i++) {
      _board.push('');
    }
  }

  /**
   * It will receive the div as an argument, which has the custom
   * attribute that's going to tell which div was clicked, so I can update
   * the board easily.
   */
  const updateGameBoard = (div) => {
    console.log(`updateGameBoard - ${div}`)
    let index = div.getAttribute('data-spot-num');
    console.log(`index: ${index}`)
    _board[index] = index;
    
  }

  const getGameBoard = () => _board;

  Pubsub.subscribe('startingTheGame', initializeBoard);
  Pubsub.subscribe('divClicked', updateGameBoard)

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

  /** 
   * It will place player's own marker to the div that was passed
   * as an argument
   */
  const placeMarker = (div) => {
    console.log(`${_name} is clicking`)
    div.innerHTML = _marker;
  }

  // It will react to the 'divClicked' event, and executing placeMarker function.
  // Pubsub.subscribe('divClicked', placeMarker)

  return {
    getName,
    getMarker,
    placeMarker
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

  const enableBoardClicking = () => {
    console.log('Display Controller - board enabled');
    let gameBoard = doc.getElementById('game-board');
    for(let i = 0; i < gameBoard.children.length; i++) {
      let div = gameBoard.children[i];
      div.addEventListener('click', (event) => {
        // If the spot is not ocuppied then, only start the code
        if(div.innerHTML === '') {
          // Sending Pubsub events that div was clicked
          Pubsub.emit('divClicked', div);
        }
        
      })
    }
  }

  Pubsub.subscribe('startingTheGame', enableBoardClicking);
  

  return {
    getGameBoardFromWeb,
    render,
    enableBoardClicking
  }
})(document);

// game module, this will control the main flow of the game
const game = (function(doc, playerFactory) {
  const startTheGame = () => {
    // Let's start the game. Let displayController know that he should enable the click
    Pubsub.emit('startingTheGame');
  }

  return {
    startTheGame
  }
})(document, Player);

// First when the game is started....
// gameBoard - Initialize the game board
// displayController - Enable the board to be clicked

game.startTheGame();


