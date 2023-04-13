/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  const validTransforms = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  const arrCopy = [...arr];
  const result = [];
  for (let i = 0; i < arrCopy.length; i += 1) {
    const curr = arrCopy[i];
    if (!validTransforms.includes(curr)) {
      result.push(curr);
      continue;
    }
    switch (curr) {
      case '--discard-next':
        if (arrCopy[i + 1] != null) {
          arrCopy[i + 1] = null;
          i += 1;
        }
        break;
      case '--discard-prev':
        if (arrCopy[i - 1] != null) {
          result.pop();
        }
        break;
      case '--double-next':
        if (arrCopy[i + 1] != null) {
          result.push(arrCopy[i + 1]);
        }
        break;
      case '--double-prev':
        if (arrCopy[i - 1] != null) {
          result.push(arrCopy[i - 1]);
        }
        break;
      default:
        break;
    }
  }
  return result;
}

module.exports = {
  transform
};
