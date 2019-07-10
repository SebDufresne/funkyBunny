// Convert decimal to hexadecimal
const convertDecToHex = num => {
  return parseInt(num, 10).toString(16).toUpperCase();
};

// Return an array of sets of coords in HexaDecimal, based on a given maxValue
const generateCoordsArray = maxValue => {
  return ['00','01','10','11'];
};

module.exports = { convertDecToHex, generateCoordsArray };