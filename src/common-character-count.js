/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const map1 = new Map();
  const map2 = new Map();

  Array.from(s1).forEach((c) => {
    map1.set(c, (map1.has(c)) ? map1.get(c) + 1 : 1);
  });
  Array.from(s2).forEach((c) => {
    map2.set(c, (map2.has(c)) ? map2.get(c) + 1 : 1);
  });

  return Array.from(map1).reduce((count, [key, val]) => (
    count + (map2.has(key) ? Math.min(val, map2.get(key)) : 0)
  ), 0);
}

module.exports = {
  getCommonCharacterCount
};
