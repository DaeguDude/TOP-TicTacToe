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
    let gameBoard = doc.getElementById('game-board');
    for(let i = 0; i < gameBoard.children.length; i++) {
      let spotOnTheBoard = gameBoard.children[i];
      spotOnTheBoard.addEventListener('click', (event) => {
        // If the spot is not ocuppied then, only start the code
        if(spotOnTheBoard.innerHTML === '') {
          // Trigger the divClicked event. Passing the div that was clicked
          Pubsub.emit('divClicked', spotOnTheBoard);
        }
        
      })
    }
  }

  Pubsub.subscribe('StartingTheGame', enableBoardClicking);
  

  return {
    getGameBoardFromWeb,
    render,
    enableBoardClicking
  }
})(document);

// game module, this will control the main flow of the game
const game = (function(doc, playerFactory) {
  let player1 = playerFactory('Sanghak', 'X');
  let player2 = playerFactory('dooheum', 'O');

  const startTheGame = () => {
    // Here we will start the game!
    Pubsub.emit('startingTheGame')
  }

  const increaseGameCount = () => gameCount++; 

  const changePlayersTurn = () => {
    // Increasing the gameCount will change the player
    increaseGameCount();

    // If it is even, player1
    if(gameCount % 2 == 0) {
      currentPlayer = player1;
    } else {
      currentPlayer = player2;
    }

    console.log(`Next turn is: ${currentPlayer}`)
  }  

  const getCurrentPlayer = () => {
    return currentPlayer;
  }

  const playerPlacingTheMarker = () => {
    let player = getCurrentPlayer();
    player.placeMarker()
  }

  // When divClicked event is triggered, it will return the current player.
  Pubsub.subscribe('divClicked', getCurrentPlayer);

  return {
    increaseGameCount,
    changePlayersTurn,
    getCurrentPlayer
  }
})(document, Player);

gameBoard.initializeBoard();
displayController.render(gameBoard.getGameBoard());
displayController.enableBoardClicking();

