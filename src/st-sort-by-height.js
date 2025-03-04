import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight( arr ) {
  // throw new NotImplementedError('Not implemented');

  let pos = [];
  arr.forEach( (el, i) => {
    if (el === -1) pos.push(i) 
  })

  let sortArr = [];
  arr.forEach( (el, i) => {
    if (el != -1) sortArr.push(el) 
  })
  
  sortArr.sort( (a, b) => a - b);

  pos.forEach( (p) => {
    sortArr.splice(p, 0, -1);
  })

  return sortArr;

}
