/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  const opts = {
    repeatTimes: 1,
    separator: '+',
    additionRepeatTimes: 1,
    additionSeparator: '|',
    ...options,
    addition: (options.addition === undefined) ? null : String(options.addition),
  };
  const addition = (opts.addition != null)
    ? new Array(opts.additionRepeatTimes).fill(opts.addition).join(opts.additionSeparator)
    : '';

  return new Array(opts.repeatTimes).fill(`${String(str)}${addition}`).join(opts.separator);
}

module.exports = {
  repeater
};
