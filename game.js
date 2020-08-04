// game module, this will control the main flow of the game
const game = (function(doc, playerFactory) {
  let _player1 = playerFactory('Sanghak', 'X');
  let _player2 = playerFactory('Dooheum', 'O');
  let _gameCount = 0;

  const setTurnForPlayer = () => {
    // if it's the first turn, it's the player1
    if(_gameCount === 0) {
      console.log(`${_player1.getName()} is the current player.`);
      _gameCount++;
    } else {
      // If it's not the first turn
      if(_gameCount % 2 === 1) {
        console.log(`${_player2.getName()} is the current player.`)
      } else {
        console.log(`${_player1.getName()} is the current player.`)
      }
    }


  }

  const startTheGame = () => {
    // Let every components know that game has been started
    Pubsub.emit('startTheGame');
  }

  Pubsub.subscribe('startTheGame', setTurnForPlayer);

  return {
    startTheGame
  }
})(document, Player);