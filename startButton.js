let gameBoard = document.getElementById('game-board');
let gameStartBtn = document.getElementById('game-start-btn');
let startDisplay = document.getElementById('start-display');

gameStartBtn.addEventListener('click', (event) => {
  // Make start-display gone, and make gameBoard appears
  startDisplay.style.display = "none";
  gameBoard.style.display = "grid";
})
