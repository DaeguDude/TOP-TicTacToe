// Display Module, everything related with display
const displayController = (function(doc) {
  
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

  // Listening for if the game has been started.
  console.log('DISPLAYCONTROLLER: listening for startTheGame event.')
  Pubsub.subscribe('startTheGame', enableBoardClicking);
  

  return {
    getGameBoardFromWeb,
    enableBoardClicking
  }
})(document);