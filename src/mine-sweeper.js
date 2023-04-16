/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];
    result[i] = [];
    for (let j = 0; j < row.length; j += 1) {
      let count = 0;
      // check left
      if (row[j - 1]) {
        count += 1;
      }
      // check top left
      if (matrix[i - 1] && matrix[i - 1][j - 1]) {
        count += 1;
      }
      // check top
      if (matrix[i - 1] && matrix[i - 1][j]) {
        count += 1;
      }
      // check top right
      if (matrix[i - 1] && matrix[i - 1][j + 1]) {
        count += 1;
      }
      // check right
      if (row[j + 1]) {
        count += 1;
      }
      // check bottom right
      if (matrix[i + 1] && matrix[i + 1][j + 1]) {
        count += 1;
      }
      // check bottom
      if (matrix[i + 1] && matrix[i + 1][j]) {
        count += 1;
      }
      // check bottom left
      if (matrix[i + 1] && matrix[i + 1][j - 1]) {
        count += 1;
      }
      result[i][j] = count;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
