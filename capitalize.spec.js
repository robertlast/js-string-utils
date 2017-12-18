var chai = require('chai');
var expect = chai.expect;
var capitalizeWord = require('./capitalize');

describe('capitalizeWord', function() {
  it('capitalizeWord() should take a capitalize the first letter in a word and the rest are lower case', function() {
    expect(capitalizeWord('tHisIsaTest')).to.equal("Thisisatest");
    expect(capitalizeWord('THisIsaTest')).to.equal("Thisisatest");
  });
});