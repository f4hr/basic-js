/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: null,
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    const chain = Object.assign({}, this);
    if (chain.chain === null) {
      chain.chain = [];
    }
    chain.chain.push(value);
    return chain;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    const chain = Object.assign({}, this);
    if (chain.chain === null) {
      chain.chain = [];
    }
    chain.chain.reverse();
    return chain;
  },
  finishChain() {
    const result = this.chain.map((el) => `( ${el} )`).join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
