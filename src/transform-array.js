import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
  // throw new NotImplementedError('Not implemented');
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return [];

  let newArr = [];
  let last = null; 

  arr.forEach( (el, i) => {
    switch (el) {
      case '--discard-next':
        if (i != arr.length-1) {
          newArr.push(el);
          last = '--discard-next';
        }
        break;
      case '--discard-prev':
        if (newArr.length && last != null) {
          newArr.pop();
          last = newArr.length ? newArr.slice(-1) : null;
          }
        break;
      case '--double-next':
        if (i != arr.length-1) {
          newArr.push(el);
          last = '--double-next';
        }
        break;
      case '--double-prev':
        if (last === null) {
          break;
        } else newArr.push(last)
        break;
        
      default:
        if ( last === '--discard-next') {
          newArr.pop();
          last = null;
          break;
        }
        if ( last === '--double-next') {
          newArr.pop();
          newArr.push(el, el);
          last = el;
          break;
        }
        newArr.push(el);
        last = el;
    }
  })

  return newArr;
}
