import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine( str ) {
  // throw new NotImplementedError('Not implemented');
  if (str === '') return '';
  let arr = str.split('');
  let current = arr[0];
  let encode = [current];
  let counter = 0;
  
  arr.forEach( letter => {
    if (letter === current) {
      // encode.push(letter);
      counter++;
    } else {
      encode.push(counter);
      encode.push(letter);
      current = letter;
      counter = 1;
    }
  })
  encode.push(counter);

  let encodeString = '';
  // console.log(encode);
  for (let i = 0; i < encode.length; i += 2) {
    if (encode[i + 1] === 1) {
      encodeString += encode[i];
    } else {encodeString += encode[i+1] + encode[i];}
    
  }
  return encodeString;

}
