import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi( disksNumber, turnsSpeed ) {
  //  throw new NotImplementedError('Not implemented');
  let turnsCount = 0;
  function solveHanoi(n,src,des,via)
  {
    if(n>=1)  
    {
      solveHanoi(n-1,src,via,des);
      turnsCount++;
      solveHanoi(n-1,src,des,via);
    }
   return;
  }
  solveHanoi(disksNumber,"A","B","C");

  return {
    turns: turnsCount, 
    seconds: Math.floor(turnsCount * 3600 / turnsSpeed)
  }
}
