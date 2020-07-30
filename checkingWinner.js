// How do you check the winner?

let board = [
  'X', 'O', 'X',
  'O', 'O', 'X',
  'X', 'X', 'O'
]

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

  let firstRow = [board[0], board[1], board[2]];
  let secondRow = [board[3], board[4], board[5]];
  let thirdRow = [board[6], board[7], board[8]];
  let firstColumn = [board[0], board[3], board[6]];
  let secondColumn = [board[1], board[4], board[7]];
  let thirdColumn = [board[2], board[5], board[8]];
  let firstDiagonal = [board[0], board[4], board[8]];
  let secondDiagonal = [board[2], board[4], board[6]];

  let rows = [firstRow, secondRow, thirdRow];
  let columns = [firstColumn, secondColumn, thirdColumn];
  let diagonals = [firstDiagonal, secondDiagonal];

  rows.forEach((row, index) => {
    // If there's no '' in the row!
    if(row.every( val => val != '')) {
      // Check if all elements are same
      let isAllElementsSame = row.every( val => val === row[0]);
      if(isAllElementsSame === true) {
        console.log(`row ${index+1} is same!`);
      }    
    }
  })

  columns.forEach((column, index) => {
    // If there's no '' in the row!
    if(column.every( val => val != '')) {
      // Check if all elements are same
      let isAllElementsSame = column.every( val => val === column[0]);
      if(isAllElementsSame === true) {
        console.log(`column ${index+1} is same!`);
      }    
    }
  })

  diagonals.forEach((diagonal, index) => {
    // If there's no '' in the row!
    if(diagonal.every( val => val != '')) {
      // Check if all elements are same
      let isAllElementsSame = diagonal.every( val => val === diagonal[0]);
      if(isAllElementsSame === true) {
        console.log(`diagonal ${index+1} is same!`);
      }    
    }
  })

  /**
   * The very last thing it needs to do is check if it's all filled
   * Then it means, there was no winner.
   */ 
  let isBoardCompleted = board.every( val => val != '');
  if(isBoardCompleted === true) {
    console.log('Game Finished');
  }
}


checkTheWinner();



  

