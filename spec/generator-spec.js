var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var generator = require('../js/generator.js');

describe('Generator', function() {
  it('should be a function', function () {
    expect(generator).to.exist;
    expect(generator).to.be.a('function');
    expect(generate()).to.deep.equal([], 'requires a parameter');
    expect(generate(5)).to.not.deep.equal([], 'parameter must be a number');
    expect(generator('doggies')).to.deep.equal([], 'as noted, you must enter a number');
  });
});
