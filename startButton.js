let gameBoardWeb = document.getElementById('game-board');
let gameStartBtn = document.getElementById('game-start-btn');
let startDisplay = document.getElementById('start-display');

let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');

let playerOneName = player1.children[1].value;
let playerTwoName = player2.children[1].value;



gameStartBtn.addEventListener('click', (event) => {
  let player1 = document.getElementById('player1');
  let player2 = document.getElementById('player2');

  let playerOneName = player1.children[1].value;
  let playerTwoName = player2.children[1].value;
  
  if(playerOneName != '' && playerTwoName != '') {
    // Make start-display gone, and make gameBoard appears
    startDisplay.style.display = "none";
    gameBoardWeb.style.display = "grid";
  } else {
    // Name is not completed....
  }
  
})
