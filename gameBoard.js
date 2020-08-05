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
    let index = div.getAttribute('data-spot-num');

    console.log('GAMEBOARD: I heard placedMarker event was announced. updateGameBoard');
    _board[index] = div.innerHTML;
    checkTheWinner();
  }

  const checkTheWinner = () => {
    /**
     * There are 8 ways to win in the tic-tac-toe games.
     * 
     * row - 0-2, 3-5, 6-8
     * column - [0,3,6], [1,4,7], [2,5,8]
     * diagonal - [0, 4, 8], [2, 4, 6]
     * 
     * And sometimes it's a tie
     */ 
  
    let firstRow = [_board[0], _board[1], _board[2]];
    let secondRow = [_board[3], _board[4], _board[5]];
    let thirdRow = [_board[6], _board[7], _board[8]];
    let firstColumn = [_board[0], _board[3], _board[6]];
    let secondColumn = [_board[1], _board[4],_board[7]];
    let thirdColumn = [_board[2], _board[5], _board[8]];
    let firstDiagonal = [_board[0], _board[4], _board[8]];
    let secondDiagonal = [_board[2], _board[4], _board[6]];
  
    let rows = [firstRow, secondRow, thirdRow];
    let columns = [firstColumn, secondColumn, thirdColumn];
    let diagonals = [firstDiagonal, secondDiagonal];

    let isBoardCompleted = '';
  
    for(let i = 0; i < rows.length; i++) {
      let row = rows[i];
      if(row.every( val => val != '')) {
        // Check if all elements are same
        let isAllElementsSame = row.every( val => val === row[0]);
        if(isAllElementsSame === true) {
          console.log(`row ${i+1} is same!`);
        }    
      }
    }
  
    for(let i = 0; i < columns.length; i++) {
      let column = columns[i];
      if(column.every( val => val != '')) {
        // Check if all elements are same
        let isAllElementsSame = column.every( val => val === column[0]);
        if(isAllElementsSame === true) {
          console.log(`column ${i+1} is same!`);
          return true;
        }    
      }
    }
  
    for(let i = 0; i < diagonals.length; i++) {
      let diagonal = diagonals[i];
      if(diagonal.every( val => val != '')) {
        // Check if all elements are same
        let isAllElementsSame = diagonal.every( val => val === diagonal[0]);
        if(isAllElementsSame === true) {
          console.log(`diagonal ${i+1} is same!`);
          return true;
        }    
      }
    }
  
    /**
     * The very last thing it needs to do is check if it's all filled
     * Then it means, there was no winner.
     */ 
    isBoardCompleted = _board.every( val => val != '');
    if(isBoardCompleted === true) {
      console.log('Game Finished, no winner, it is a tie');
      return true;
    } else {
      console.log('Board is not filled and no winner yet');
      return false;
    }
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