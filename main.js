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
  
  const placeMarker = (div, marker) => {
    div.innerHTML = marker;
  }

  const enableBoardClick = () => {
    // This will enable the gameBoard to be clicked, and it will return
    // the div element that was clicked
    for(i = 0; i < gameBoard.children.length; i++) {
      let div = gameBoard.children[i];
      div.addEventListener('click', (event) => {
        let player = game.getCurrentPlayer();
        placeMarker(div, player.getMarker());
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
  
  const getPlayers = () => _players;

  // Receives an instance of factory function 'Player'
  const addPlayer = (player) => _players.push(player);
  
  // Return the current players depending on the gameCount
  const getCurrentPlayer = () => {
    if(_gameCount % 2 === 0) {
      _currentPlayer = _players[0];
    } else {
      _currentPlayer = _players[1];
    }

    return _currentPlayer;
  }
  const resetPlayers = () => _players = [];
  const increaseGameCount = () => _gameCount++;

  return {
    getPlayers,
    addPlayer,
    getCurrentPlayer,
    resetPlayers,
    increaseGameCount,
  }
})();

game.addPlayer(Player('Sanghak', 'X'));
game.addPlayer(Player('Seongkyu', 'O'));
displayController.enableBoardClick();












