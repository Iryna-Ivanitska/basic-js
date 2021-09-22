import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor() {
    this.args = arguments;  
    }

  encrypt(str, key) {
    console.log(str, key)
    // if ((typeof str === 'undefined') || (typeof key === 'undefined')) {throw 'Incorrect arguments!';}
    if ((str === undefined) || (key === undefined)) {throw new Error('Incorrect arguments!')}
    else {
      const enLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    
      let matrix = [];
      for (let i = 0; i < enLetters.length; i++) {
        matrix[i] = enLetters.slice(i).concat(enLetters.slice(0, i));
      }
  
      let newStr = str.replace(/ /g, '');
      let newKey = key.repeat(Math.floor(newStr.length / key.length)) + key.slice(0, newStr.length % key.length);
  
  
      let newString = '';
      let j = 0;
        for (let i = 0;  i < str.length; i++) {
          if (enLetters.indexOf(str[i].toUpperCase()) < 0) {
            newString += str[i];
          } else {
          newString += matrix[enLetters.indexOf(str[i].toUpperCase())][enLetters.indexOf(newKey[j].toUpperCase())];
          j++;
          } 
        }
        if (this.args[0] === false) {
          return newString.split('').reverse().join('');
        } else { return newString;}
        
    }

   

  }
  decrypt(str, key) {
    if ((str === undefined) || (key === undefined)) {throw new Error('Incorrect arguments!')}
    //  if  ((str == undefined) || ( key == undefined))  throw 'Incorrect arguments!';
    else {
      const enLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    
      let matrix = [];
      let j = 0;
      for (let i = 0; i < enLetters.length; i++) {
        matrix[i] = enLetters.slice(i).concat(enLetters.slice(0, i));
      }
  
      let newStr = str.replace(/ /g, '');
      let newKey = key.repeat(Math.floor(newStr.length / key.length)) + key.slice(0, newStr.length % key.length);
  
      let newString = '';
      for (let i = 0; i < str.length; i++) {
        if (enLetters.indexOf(str[i].toUpperCase()) < 0) {
          newString += str[i];
        } else {
          let row = enLetters.indexOf(newKey[j].toUpperCase());
          j++;
          let col = matrix[row].indexOf(str[i].toUpperCase());
          newString += enLetters[col];
        }
    }
    if (this.args[0] === false) {
      return newString.split('').reverse().join('');
    } else { return newString;}
    }
    

  }
}
