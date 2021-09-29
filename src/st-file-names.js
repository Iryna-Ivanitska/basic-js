import { NotImplementedError } from '../extensions/index.js';

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
export default function renameFiles( names ) {
  // throw new NotImplementedError('Not implemented');
  let newNames = [];

  function countEquals(el, arr = newNames) {
    var count = {};
    arr.forEach( i => { count[i] = (count[i] || 0) + 1;});
    return count[el];
  }
  
  names.forEach ( (name, i) => {
    let nameCount;
    if (newNames.includes(name)) {
      if (names.slice(0, i).includes(name)) {
        nameCount = countEquals(name, names.slice(0, i));
        newNames.push(name + '(' + (nameCount) + ')' );
      } else {
        nameCount = countEquals(name, newNames);
        newNames.push(name + '(' + (nameCount) + ')' );
      }  
    } else {
      newNames.push(name);
    }
  })

  return newNames;
}
