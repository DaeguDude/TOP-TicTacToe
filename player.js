// Factory Functions for making players
const Player = (name, marker) => {
  let _name = name;
  let _marker = marker;

  const getName = () => _name;
  const getMarker = () => _marker;

  /** 
   * It will place player's own marker to the div that was passed
   * as an argument
   */
  const placeMarker = (div) => {
    console.log(`${_name} - I heard that divClicked event was announced. Place Marker`);
    div.innerHTML = _marker;
    Pubsub.emit('placedMarker', div);

    // After all of that, currentPlayer should unsubscribe
    console.log(`${_name} is unsubscribing to divClicked event`);
    Pubsub.unsubscribe('divClicked', placeMarker);
  }

  return {
    getName,
    getMarker,
    placeMarker
  }
}