var chai = require('chai');
var expect = chai.expect;
var stringIsDate = require('./is-date');

// REFERENCE: ISO 8601 Format Spec - https://www.w3.org/TR/NOTE-datetime

describe('stringIsDate', function() {
  it('stringIsDate() should return true if the string is in the ISO 8601 format', function() {
    expect(stringIsDate('1997-07-16')).to.be.true;
    expect(stringIsDate('1997-07-16T19:20+01:00')).to.be.true;
    expect(stringIsDate('1997-07-16T19:20:30+01:00')).to.be.true;
    expect(stringIsDate('1997-07-16T19:20:30.45+01:00')).to.be.true;
    expect(stringIsDate('2008-09-15T15:53:00+05:00')).to.be.true;
  });
});


