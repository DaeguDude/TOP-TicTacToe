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
    console.log('PLAYER - I heard that divClicked event was announced. Place Marker');
    div.innerHTML = _marker;
  }

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

  const enableBoardClicking = () => {
    console.log('DISPLAYCONTROLLER - I heard STARTTHEGAME event was annoucned. Enable Board');
    // Get the gameboard
    let gameBoard = doc.getElementById('game-board');

    // Enable every div for click
    for(let i = 0; i < gameBoard.children.length; i++) {
      let div = gameBoard.children[i];
      div.addEventListener('click', (event) => {
        // If only spot is not occupied, announce that div was clicked
        if(div.innerHTML === '') {
          Pubsub.emit('divClicked', div);
        }
      })
    }
  }

  // Listening for if the game has been started.
  Pubsub.subscribe('startTheGame', enableBoardClicking);
  

  return {
    getGameBoardFromWeb,
    enableBoardClicking
  }
})(document);

// gameBoard Module
const gameBoard = (function() {
  // Main Game Board
  let _board = []
  
  // Initialize the board with empty string
  const initializeBoard = () => {
    console.log('GAMEBOARD - I heard STARTTHEGAME event was annoucned. Initialize Board');
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

  Pubsub.subscribe('startTheGame', initializeBoard);

  return {
    initializeBoard,
    getGameBoard
  }
})();

// game module, this will control the main flow of the game
const game = (function(doc, playerFactory) {
  let _player1 = playerFactory('Sanghak', 'X');
  let _player2 = playerFactory('Dooheum', 'O');
  let _currentPlayer = '';
  let _gameCount = 0;

  const setTurnForPlayer = () => {
    // if it's the first turn, it's the player1
    if(_gameCount === 0) {
      console.log('GAME - I heard STARTTHEGAME event was annoucned. Set turn for player');
      console.log(`${_player1.getName()} is the current player.`);
      // Set the currentPlayer
      _currentPlayer = _player1;
      _gameCount++;
    } else {
      // If it's not the first turn
      if(_gameCount % 2 === 1) {
        console.log(`${_player2.getName()} is the current player.`);
        _currentPlayer = _player2;
      } else {
        console.log(`${_player1.getName()} is the current player.`)
        _currentPlayer = _player1;
      }
    }

    
    Pubsub.subscribe('divClicked', _currentPlayer.placeMarker);
    console.log('GAME CURRENTPLAYER - listening for divClicked event');
  }

  const startTheGame = () => {
    console.log('GAME - I heard that startButton was clicked, let\'s start the game');
    // Let every components know that game has been started
    Pubsub.emit('startTheGame');
  }

  Pubsub.subscribe('startButtonClicked', startTheGame);
  Pubsub.subscribe('startTheGame', setTurnForPlayer);

  return {
    startTheGame
  }
})(document, Player);