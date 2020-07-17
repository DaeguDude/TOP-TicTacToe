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

  /**  
   * This function checks for the winner.
   * The requirement for the win is to have 3 same
   * characters in a row, or when all the board is full,
   * it's a tie.
   */ 
  const checkTheWinner = () => {
    
    /**
     * row - 0-2, 3-5, 6-8
     * column - [0,3,6], [1,4,7], [2,5,8]
     * diagonal - [0, 4, 8], [2, 4, 6] */ 
    let x = 0;
    for(let i=0; i<3; i++) {
      if(_board[x] === _board[x+1] && _board[x] === _board[x+2]) {
        console.log(x);
        console.log('A row has all same characters!')
      }
    }
  }

  // Make the GameBoard as same as the board in the display
  const updateGameBoard = (board) => {
    for(let i = 0; i < board.children.length; i++) {
      _board[i] = board.children[i].innerHTML;
    }
  }

  return {
    getGameBoard,
    updateGameBoard,
    checkTheWinner
  }
})();



// Display Module
const displayController = (function() {
  
  let gameBoard = elements.gameBoard;

  const getDisplayBoard = () => {
    return document.getElementById('game-board');
  }

   
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
    getDisplayBoard,
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

displayController.enableBoardClick();















