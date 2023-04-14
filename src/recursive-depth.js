/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let maxDepth = depth;
    for (let i = 0; i < arr.length; i += 1) {
      const curr = arr[i];
      if (Array.isArray(curr)) {
        const currDepth = this.calculateDepth(curr, depth + 1);
        if (currDepth > maxDepth) {
          maxDepth = currDepth;
        }
      }
    }

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
