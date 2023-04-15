/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const negativeIndicies = arr.reduce((acc, curr, idx) => {
    if (curr < 0) {
      acc.push(idx);
    }
    return acc;
  }, []);
  const sorted = arr.filter((n) => n >= 0)
    .sort((a, b) => a - b);

  negativeIndicies.forEach((idx) => {
    sorted.splice(idx, 0, -1);
  });

  return sorted;
}

module.exports = {
  sortByHeight
};
