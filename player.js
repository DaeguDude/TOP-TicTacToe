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
    div.innerHTML = _marker;
  }

  // Listening for the 'divClicked' events.
  Pubsub.subscribe('divClicked', placeMarker);
}