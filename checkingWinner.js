// How do you check the winner?

let _board = [
  'X', 'O', 'X',
  'O', 'O', 'X',
  'X', 'X', 'O'
]

/**
 * It will check for the winner or a tie. Return boolean value
 */
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

  // When there is a winner or a tie, we change it to the value 'true'
  let isThereWinner = false;
  let isItTie = false;

  for(let i = 0; i < rows.length; i++) {
    let row = rows[i];
    if(row.every( val => val != '')) {
      // Check if all elements are same
      let isAllElementsSame = row.every( val => val === row[0]);
      if(isAllElementsSame === true) {
        isThereWinner = true;
      }    
    }
  }

  for(let i = 0; i < columns.length; i++) {
    let column = columns[i];
    if(column.every( val => val != '')) {
      // Check if all elements are same
      let isAllElementsSame = column.every( val => val === column[0]);
      if(isAllElementsSame === true) {
        isThereWinner = true;
      }    
    }
  }

  for(let i = 0; i < diagonals.length; i++) {
    let diagonal = diagonals[i];
    if(diagonal.every( val => val != '')) {
      // Check if all elements are same
      let isAllElementsSame = diagonal.every( val => val === diagonal[0]);
      if(isAllElementsSame === true) {
        isThereWinner = true;
      }    
    }
  }

  /**
   * The very last thing it needs to do is check if it's all filled
   * Then it means, there was no winner.
   */ 
  let isBoardCompleted = _board.every( val => val != '');
  if(isBoardCompleted === true) {
    isItTie = true;
  }

  if(isItTie) {
    console.log('it is a tie');
  } 

  if(isThereWinner) {
    console.log('there is a winner');
  }

}


console.log(checkTheWinner());



  

