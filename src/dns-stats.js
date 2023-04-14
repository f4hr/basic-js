/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const map = {};
  domains.forEach((d) => {
    const components = d.split('.').reverse();
    let prev = '';
    components.forEach((c) => {
      const dns = `${prev}.${c}`;
      map[dns] = map[dns] !== undefined ? map[dns] + 1 : 1;
      prev = dns;
    });
  });
  return map;
}

module.exports = {
  getDNSStats
};
