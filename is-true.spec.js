var chai = require('chai');
var expect = chai.expect;
var capitalizeWord = require('./is-true');

describe('stringIsTrue', function() {
  it('stringIsTrue() should return true if the given string represents true', function() {
    expect(capitalizeWord(true)).to.be.true;
    expect(capitalizeWord('true')).to.be.true;
    expect(capitalizeWord('True')).to.be.true;
    expect(capitalizeWord('False')).to.be.false;
  });
});