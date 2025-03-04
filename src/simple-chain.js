import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */

export default {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value === 'undefined') value = ' ';
    if (value === null) value = 'null';
    this.chain.push(`( ${value.toString()} )`);
    return this;
  },
  removeLink( position ) {
    if ((position <= 0) || (position > this.chain.length - 1) || typeof position !== 'number') {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let string = '';
    if (this.chain.length > 0) string = this.chain.join('~~');
    this.chain = [];
    return string;
  }
};
