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
    console.log('GAMEBOARD: I heard placedMarker event was announced. updateGameBoard');
    let index = div.getAttribute('data-spot-num');
    _board[index] = div.innerHTML;
  }

  const getGameBoard = () => _board;

  console.log('GAMEBOARD: listening for startTheGame event.');
  Pubsub.subscribe('startTheGame', initializeBoard);

  console.log('GAMEBOARD: listening for placedMarker event.');
  Pubsub.subscribe('placedMarker', updateGameBoard);

  return {
    initializeBoard,
    getGameBoard
  }
})();