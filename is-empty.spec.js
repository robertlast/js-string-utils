var chai = require('chai');
var expect = chai.expect;
var capitalizeWord = require('./is-empty');

describe('stringIsEmpty', function() {
  it('stringIsEmpty() should return true if the given value is an empty string or undefined.', function() {
    expect(capitalizeWord('')).to.be.true;
    expect(capitalizeWord(undefined)).to.be.true;
  });
});