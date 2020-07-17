const elements = (function() {
  let gameBoard = document.getElementById('game-board');

  return {
    gameBoard
  }
})();

// Gameboard Module
const gameBoard = (function() {

  let _board = 
  [
    '', '', '',
    '', '', '',
    '', '', ''
  ];

  const getGameBoard = () => _board;

  return {
    getGameBoard
  }
})();



// Display Module
const displayController = (function() {
  
  let gameBoard = elements.gameBoard;
  
  const placeMarker = (div, marker) => {
    // If it's only empty, you can place the marker
    if(div.innerHTML === '') {
      div.innerHTML = marker;
    } else {
      console.log('It is taken!');
    }
  }

  const enableBoardClick = () => {
    // This will enable the gameBoard to be clicked, and it will return
    // the div element that was clicked
    for(i = 0; i < gameBoard.children.length; i++) {
      let div = gameBoard.children[i];
      div.addEventListener('click', (event) => {
        placeMarker(div, game.getCurrentPlayer().getMarker());
        game.increaseGameCount();
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
    placeMarker,
    enableBoardClick,
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

displayController.displayGameBoard(gameBoard.getGameBoard());

// Game Module, that will control the flow of the game
const game = (function () {

  let _gameCount = 0;
  let _players = []
  let _currentPlayer = '';
  let _currentMarker = '';
  
  // Return all players that are there
  const getAllPlayers = () => _players;

  // Return the current players depending on the gameCount
  const getCurrentPlayer = () => {
    if(_gameCount % 2 === 0) {
      _currentPlayer = _players[0];
    } else {
      _currentPlayer = _players[1];
    }

    return _currentPlayer;
  }

  // Receives an instance of factory function 'Player'
  const addPlayer = (name, marker) => {
    _players.push(Player(name, marker));
  };
  
  const resetPlayers = () => _players = [];
  const increaseGameCount = () => _gameCount++;

  return {
    getAllPlayers,
    getCurrentPlayer,
    addPlayer,
    getCurrentPlayer,
    resetPlayers,
    increaseGameCount,
  }
})();

// Adding Players
game.addPlayer('Sanghak', 'X');
game.addPlayer('Seongkyu', 'O');

// Game Start!
displayController.enableBoardClick();














