import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} 
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
  // throw new NotImplementedError('Not implemented');
  
  let max = 0;
  let stringNum = n.toString();

  for (let i = 0; i < stringNum.length; i++) {
    let current = stringNum.slice(0, i) + stringNum.slice(i + 1);
    if (max < +current) max = +current;
  }

  return max;
}
