/*
* Settings for the game
*/

// Game default values
const defaults = {
  aiLevel: 'easy',
  boardSize : 10,
  numberOfAi: 1,
  numberOfPlayers: 2,
  roaster: { // {size: quantity}
    2: 1,
    3: 2,
    4: 1,
    5: 1
  },
  shotsPerTurn: 1 // not planning on using it
};

// NOTE: I'll revisit the undefined declarations during implementation
const gameState = {
  boardSize: undefined,
  hitMatrix: [], // see generateMatrix in ai.js
  movesHistory: [], // [{playerId, position}, ...]
  players: [], // { {playerId: playerType } (The player type being aiLevel or human/being)
  roaster: {},
  shotsPerTurn: undefined,
};

module.exports = {
  defaults,
  gameState
};