/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  if (date.toString() === Date.prototype.toString.call(new Date())) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  let season = 'fall';
  if (month <= 1 || month === 11) {
    season = 'winter';
  } else if (month <= 4) {
    season = 'spring';
  } else if (month <= 7) {
    season = 'summer';
  }
  return season;
}

module.exports = {
  getSeason
};
