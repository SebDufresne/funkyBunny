/*
* Settings for the game
*/

// Game default values
const defaults = {
  aiLevel: 'easy',
  boardSize : 10,
  numberOfAi: 1,
  numberOfPlayers: 2,
  roster: { // {size: quantity}
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
  conflicts: {}, // {playerId, activeConflict: []}
  gridPositions: [], // { playerId, [ {carrot, coords: ['coords', 'coords', ...]}]}
  hitMatrix: [], // see generateMatrix in ai.js
  movesHistory: [], // [{playerId, position}, ...]
  players: [], // { playerId, playerType } (The player type being aiLevel or human/being)
  roster: {},
  shotsPerTurn: undefined,
};

// Used to save the final state of a game
const saveGame = {
  boardSize: undefined,
  gridPositions: [],
  movesHistory: [],
  players: [],
  roster: {},
  shotsPerTurn: undefined,
};

module.exports = {
  defaults,
  gameState,
  saveGame
};