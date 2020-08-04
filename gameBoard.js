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

  Pubsub.subscribe('startTheGame', initializeBoard);

  return {
    initializeBoard,
    getGameBoard
  }
})();