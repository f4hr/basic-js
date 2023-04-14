/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const fileNames = new Map();

  names.forEach((name) => {
    if (fileNames.has(name)) {
      const count = fileNames.get(name);
      fileNames.set(name, count + 1);
      fileNames.set(`${name}(${count})`, 1);
    } else {
      fileNames.set(name, 1);
    }
  });

  return Array.from(fileNames.keys());
}

module.exports = {
  renameFiles
};
