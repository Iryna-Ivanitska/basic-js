import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address( n ) {
  // throw new NotImplementedError('Not implemented');

  let arrNum = n.split('-');
  let end = [];
  arrNum.forEach( el => {
    if (el === '00') {
      end.push(true);
    } else {
      end.push(parseInt(el, 16));
    }
  });

console.log(end)
  return end.every( (e) => e > 0);
}
