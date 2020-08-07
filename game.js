// game module, this will control the main flow of the game
const game = (function(doc, playerFactory) {
  let _player1 = '';
  let _player2 = '';
  let _currentPlayer = '';
  let _gameCount = 0;

  const makePlayers = (playersArr) => {
    console.log(`makePlayers running: ${playersArr}`)
    _player1 = playerFactory(playersArr[0], 'X');
    _player2 = playerFactory(playersArr[1], 'O');
  }

  const setTurnForPlayer = () => {
    // if it's the first turn, it's the player1
    if(_gameCount === 0) {
      console.log('GAME - I heard STARTTHEGAME event was annoucned. Set turn for player');
      // Set the currentPlayer
      _currentPlayer = _player1;
      _gameCount++;
    } else {
      console.log('GAME - I heard placedMarker event was annoucned. Set turn for player');
      // If it's not the first turn
      if(_gameCount % 2 === 1) {
        _currentPlayer = _player2;
        _gameCount++;
      } else {
        _currentPlayer = _player1;
        _gameCount++;
      }
    }

    console.log(`${_currentPlayer.getName().toUpperCase()} is listening for divClicked event`);
    Pubsub.subscribe('divClicked', _currentPlayer.placeMarker);
  }

  const startTheGame = () => {
    console.log('GAME: I heard that startButton was clicked, let\'s start the game');
    
    Pubsub.subscribe('startButtonClicked', makePlayers);

    console.log('GAME: listening for startTheGame event.')
    Pubsub.subscribe('startTheGame', setTurnForPlayer);
  
    // console.log('GAME: listening for placedMarker event.');
    // Pubsub.subscribe('placedMarker', setTurnForPlayer);
  
    // console.log('GAME: listening for finishGame event.');
    // Pubsub.subscribe('finishGame', endTheGame);

    // Let every components know that game has been started
    Pubsub.emit('startTheGame');
  }

  const endTheGame = (result) => {
    if(result === 'tie') {
      console.log('it is a tie!');
      Pubsub.emit('displayResult', result);
    } else if(result === 'win') {
      console.log(`${_currentPlayer.getName()} won!`)
      Pubsub.emit('displayResult', _currentPlayer.getName());
    }
  }

  const getGameCount = () => {
    console.log(_gameCount);
  }

  const getCurrentPlayer = () => {
    console.log(_currentPlayer.getName());
  }

  console.log('GAME: listening for startButtonClicked event');
  Pubsub.subscribe('startButtonClicked', startTheGame);

  

  



  return {
    startTheGame,
    getGameCount,
    getCurrentPlayer
  }
})(document, Player);