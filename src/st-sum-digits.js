import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  let arr = [];
  for (let num of n.toString()) {
    arr.push(parseInt(num))
  }

  const sumCounter = (arr) => {
   return arr.reduce( (a,b) => a + b );
  }

  while (arr.length != 1) {
   let number = sumCounter(arr);
    arr = number.toString().split('').map(Number);
  }

  return arr[0];
}
