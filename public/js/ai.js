const generateMatrix = (boardSize = 10) => {
  const matrixRow = new Array(boardSize).fill('');
  const matrixGrid = new Array(boardSize).fill(matrixRow);
  return matrixGrid;
};

module.exports = { generateMatrix };