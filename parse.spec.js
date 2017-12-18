var chai = require('chai');
var expect = chai.expect;
var stringParse = require('./parse');

describe('stringParse', function() {
  it('stringParse() should return a non-string value for a string representation of a non-string if possible ', function() {
    expect(stringParse('')).to.equal(null);
    expect(stringParse('null')).to.equal(null);
    expect(stringParse('true')).to.be.true;
    expect(stringParse('True')).to.be.true;
    expect(stringParse('false')).to.be.false;
    expect(stringParse('False')).to.be.false;
    expect(stringParse('13')).to.equal(13);
    expect(stringParse('2008-09-15').getTime()).to.equal((new Date('2008-09-15')).getTime());
    expect(stringParse('foobar')).to.equal('foobar');
  });
});