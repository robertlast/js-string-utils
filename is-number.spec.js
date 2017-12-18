var chai = require('chai');
var expect = chai.expect;
var capitalizeWord = require('./is-number');

describe('stringIsNumber', function() {
  it('stringIsNumber() should return true if the given value a number', function() {
    expect(capitalizeWord('10')).to.be.true;
    expect(capitalizeWord(10)).to.be.true;
    expect(capitalizeWord('ten')).to.be.false;
  });
});