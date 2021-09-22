import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  let newString = "";
  let newSeparator = "";

  

  if (str === undefined) str = '';
  if (str === null) str = 'null';

  if (typeof str != 'string') str.toString();
  
  if (options.addition === undefined) options.addition = '';
  if (options.addition === null) options.addition = 'null';

  if (typeof options.addition != 'string') options.addition.toString();

  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "|";
  
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (!options.repeatTimes) options.repeatTimes = 1;

    for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
      newSeparator += options.addition + options.additionSeparator;
    }
    newSeparator += options.addition;

    for (let i = 0; i < options.repeatTimes - 1; i++) {
      newString += str + newSeparator + options.separator;
    }
    return newString + str + newSeparator;
}
