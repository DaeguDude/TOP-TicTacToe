// How do you check the winner?

let board = [
  '', '', '',
  '', 'X', '',
  'X', 'X', 'X'
]

const checkTheWinner = () => {
  /**
   * There are 8 ways to win in tic-tac-toe games.
   * 
   * row - 0-2, 3-5, 6-8
   * column - [0,3,6], [1,4,7], [2,5,8]
   * diagonal - [0, 4, 8], [2, 4, 6]
   */ 
  
  // Rows
  let x = 0;
  for(let i = 0; i < 3; i++) {
    if(board[x] === board[x+1] && board[x+1] === board[x+2]) {
      console.log(`${i+1} row completed! Game Done!`);
      break;
    }
    // In the rows, by adding 3 to the variable 'x', you will
    // change the row
    x += 3;
  }

  // Columns
  x = 0;
  for(let i = 0; i < 3; i++) {
    if(board[x] === board[x+3] && board[x+3] === board[x+6]) {
      console.log(`${i+1} column completed! Game Done!`);
      break;
    }
    // By adding 1 to the index, it's chanigng to the next columns.
    x += 1;
  }

  // Diagonals
  x = 0;
  for(let i = 0; i < 2; i++) {
    if(board[x] === board[4] && board[4] === board[8-x]) {
      console.log(`${i+1} diagonal direction completed! Game Done!`);
      break;
    }

    // By adding 2 to the index, it's changing to the different
    // diagonal direction
    x += 2;
  }
}


checkTheWinner();



  

