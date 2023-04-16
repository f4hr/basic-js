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

const LETTERS_COUNT = 26;
const FIRST_CHAR_CODE = 'A'.charCodeAt(0);
class VigenereCipheringMachine {
  constructor(directMode = true) {
    this.directMode = directMode;
  }

  encrypt(text, keyword) {
    return this.eval(text, keyword, 'encode');
  }

  decrypt(text, keyword) {
    return this.eval(text, keyword, 'decode');
  }

  eval(text, keyword, mode = 'encode') {
    if (text == null || keyword == null) {
      throw new Error('Incorrect arguments!');
    }

    const letters = text.toUpperCase().split('');
    const keywordUpcase = keyword.toUpperCase();

    const getNextKeywordChar = ((kw) => {
      let index = -1;
      return () => {
        index = ((index + 1) > (kw.length - 1)) ? 0 : index + 1;
        return kw[index];
      }
    })(keywordUpcase);

    const decoded = letters.map((c) => {
      if (c.match(/[^A-Z]/)) {
        return c;
      }
      const keywordChar = getNextKeywordChar();
      return mode === 'encode' ? this.encodeChar(c, keywordChar) : this.decodeChar(c, keywordChar);
    });

    return (this.directMode ? decoded : decoded.reverse()).join('');
  }

  encodeChar(char, keywordChar) {
    const encodedCharCode = (this.getCharCode(char) + this.getCharCode(keywordChar)) % LETTERS_COUNT;
    return String.fromCharCode(FIRST_CHAR_CODE + encodedCharCode);
  }

  decodeChar(char, keywordChar) {
    const decodedCharCode = (this.getCharCode(char) - this.getCharCode(keywordChar) % LETTERS_COUNT);
    return String.fromCharCode(FIRST_CHAR_CODE + (decodedCharCode < 0 ? 26 + decodedCharCode : decodedCharCode));
  }

  getCharCode(char) {
    return char.charCodeAt(0) - FIRST_CHAR_CODE;
  }
}

module.exports = {
  VigenereCipheringMachine
};
