var chai = require('chai');
var expect = chai.expect;
var capitalizeWord = require('./is-false');

describe('stringIsFalse', function() {
  it('stringIsFalse() should return true if the given value represents false (boolean)', function() {
    expect(capitalizeWord('false')).to.be.true;
    expect(capitalizeWord('False')).to.be.true;
    expect(capitalizeWord(false)).to.be.true;
  });
});