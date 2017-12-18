var chai = require('chai');
var expect = chai.expect;
var titleCase = require('./title-case');

describe('titleCase', function() {
  it('titleCase() should returns the given string in title case (capitalize first letter of each word)', function() {
    expect(titleCase('tHis Is a Test')).to.equal("This Is A Test");
    expect(titleCase('Another small test')).to.equal("Another Small Test");
  });
});