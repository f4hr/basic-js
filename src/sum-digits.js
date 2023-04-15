/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nStr = String(n);
  while (nStr.length > 1) {
    const digits = nStr.split('').map(Number);
    const sum = digits.reduce((s, curr) => s + curr, 0);
    nStr = String(sum);
  }
  return Number(nStr);
}

module.exports = {
  getSumOfDigits
};
