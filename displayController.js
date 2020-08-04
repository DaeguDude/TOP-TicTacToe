// Display Module, everything related with display
const displayController = (function(doc) {
  
  // This will get the game-board from HTML
  const getGameBoardFromWeb = () => {
    // If we succesfully retrieved document object model, then get the board
    if(!!doc && 'getElementById' in doc) {
      return doc.getElementById('game-board');
    }
  }

  // /**
  //  * To render the actual game board to the webpage, you need to have a parameter
  //  * to receive the gameboard, and render that gameboard to the web.
  //  */
  // const render = (gameBoard) => {
  //   let gameBoardArray = gameBoard;

  //   let gameBoardWeb = getGameBoardFromWeb();
  //   for(let i = 0; i < gameBoardWeb.children.length; i++) {
  //     gameBoardWeb.children[i].innerHTML = gameBoardArray[i];
  //   }
  // }

  const enableBoardClicking = () => {
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

  // Listening for if the game has been started.
  Pubsub.subscribe('startTheGame', enableBoardClicking);
  

  return {
    getGameBoardFromWeb,
    enableBoardClicking
  }
})(document);