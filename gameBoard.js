// How do you check the winner?

let board = [
  'X', 'X', 'X',
  'X', '', 'O',
  'X', 'X', 'X'
]

const checkTheWinner = () => {
    
  /**
   * row - 0-2, 3-5, 6-8
   * column - [0,3,6], [1,4,7], [2,5,8]
   * diagonal - [0, 4, 8], [2, 4, 6] */ 
  
  // ROW
  let x = 0;
  for(let i=0; i<3; i++) {
    if(board[x] === board[x+1] && board[x] === board[x+2]) {
      console.log('A row has all same characters!')
    }
    x = x+3;
  }

  // COLUMN
  for(let i=0; i<3; i++) {
    if(board[i] === board[i+3] && board[i] === board[i+6]) {
      console.log('A column has all same characters!')
    }
  }

  // DIAGONAL
  if(board[0] === board[4] && board[0] === board[8]) {
    console.log('From Top left to Bottom Right is same');
  }

  if(board[2] === board[4] && board[2] === board[6]) {
    console.log('From Top Right to Bottom Left is same');
  }
}

checkTheWinner();
