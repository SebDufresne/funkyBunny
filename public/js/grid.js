// Convert decimal to hexadecimal
const convertDecToHex = num => {
  return parseInt(num, 10).toString(16).toUpperCase();
};

// Return an array of sets of coords in HexaDecimal, based on a given boardSize
const generateCoordsArray = (boardSize = 10) => {
  const coordsArray = [];
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      let x = i.toString(16).toUpperCase();
      let y = j.toString(16).toUpperCase();
      coordsArray.push(x + y);
    }
  }

  return coordsArray;
};

module.exports = { convertDecToHex, generateCoordsArray };