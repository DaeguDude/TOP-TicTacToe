// Display Module, everything related with display
const displayController = (function(doc) {
  let gameStartBtn = doc.getElementById('game-start-btn');
  let gameBoardWeb = doc.getElementById('game-board');
  let startDisplay = doc.getElementById('start-display');
  let resultDisplay = doc.getElementById('result-display');
  let restartBtn = doc.getElementById('restart-btn');


  // If 'START' button is clicked, we will start the game
  gameStartBtn.addEventListener('click', (event) => {
    
    let playerOneName = doc.getElementById('player1').children[1].value;
    let playerTwoName = doc.getElementById('player2').children[1].value;
    let players = [playerOneName, playerTwoName];


    if(playerOneName != '' && playerTwoName != '') {
      // Make start-display gone, and make gameBoard appears
      startDisplay.style.display = "none";
      gameBoardWeb.style.display = "grid";

      // Let everybody know time to start the game
      Pubsub.emit('makePlayers', players)
      Pubsub.emit('startButtonClicked');
    }
  })

  const restartTheGame = () => {
    // Setting interface to original state
    gameBoardWeb.style.display = "none";
    resultDisplay.style.display = "none";
    startDisplay.style.display = "flex";

    // How to remove input value?
    let playerOneNameInput = doc.getElementById('player1').children[1];
    let playerTwoNameInput = doc.getElementById('player2').children[1];
    playerOneNameInput.value = '';
    playerTwoNameInput.value = '';
    
  }
  // If 'RESTART' button is clicked, we will restart the game
  restartBtn.addEventListener('click', restartTheGame);

  
  // This will get the game-board from HTML
  const getGameBoardFromWeb = () => {
    // If we succesfully retrieved document object model, then get the board
    if(!!doc && 'getElementById' in doc) {
      return doc.getElementById('game-board');
    }
  }

  const enableBoardClicking = () => {
    console.log('DISPLAYCONTROLLER - I heard STARTTHEGAME event was annoucned. Enable Board');
    // Get the gameboard
    let gameBoard = doc.getElementById('game-board');

    // Enable every div for click
    for(let i = 0; i < gameBoard.children.length; i++) {
      let div = gameBoard.children[i];
      div.addEventListener('click', (event) => {
        // If only spot is not occupied, announce that div was clicked
        if(div.innerHTML === '') {
          Pubsub.emit('divClicked', div);
        }
      })
    }
  }

  const displayResult = (result) => {
    if(result === 'tie') {
      gameBoardWeb.style.display = "none";
      resultDisplay.style.display = "flex";
      resultDisplay.classList.add('result-display-after');
      // Write to span
      resultDisplay.children[0].innerHTML = "Man! It is a tie. Good game";

      console.log('DC - It is a tie!');
    } else {
      gameBoardWeb.style.display = "none";
      resultDisplay.style.display = "flex";
      resultDisplay.classList.add('result-display-after');
      // Write to span
      resultDisplay.children[0].innerHTML = result + " has won! Good Game"
    }
  }

  // Listening for if the game has been started.
  console.log('DISPLAYCONTROLLER: listening for startTheGame event.')
  Pubsub.subscribe('startTheGame', enableBoardClicking);

  console.log('DISPLAYCONTROLLER: listening for displayResult event.')
  Pubsub.subscribe('displayResult', displayResult);
  

  return {
    getGameBoardFromWeb,
    enableBoardClicking
  }
})(document);