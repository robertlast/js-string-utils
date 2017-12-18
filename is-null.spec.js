var chai = require('chai');
var expect = chai.expect;
var capitalizeWord = require('./is-null');

describe('stringIsNull', function() {
  it('stringIsNull() should return true if the given value represents null', function() {
    expect(capitalizeWord(null)).to.be.true;
    expect(capitalizeWord('null')).to.be.true;
  });
});