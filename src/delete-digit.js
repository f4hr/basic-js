/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = String(n).split('').map(Number);

  let max = -Infinity;
  for (let i = 0; i < digits.length; i += 1) {
    const curr = [...digits];
    curr.splice(i, 1);
    const num = Number(curr.join(''));
    if (num > max) {
      max = num;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
