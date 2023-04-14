/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];

  let count = 1;
  for (let i = 1; i < str.length; i++) {
    const prev = str[i - 1];
    const curr = str[i];
    if (curr === prev) {
      count += 1;
    } else {
      result.push([prev, count]);
      count = 1;
    }
    if (i === str.length - 1) {
      result.push([curr, curr === prev ? count : 1]);
    }
  }
  return result.map(([key, val]) => (
    `${(val === 1) ? key : `${val}${key}`}`
  )).join('');
}

module.exports = {
  encodeLine
};
