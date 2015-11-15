var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var generator = require('../js/generator.js');

describe('Generator', function() {
  it('should be a function', function () {
    expect(generator).to.exist;
    expect(generator).to.be.a('function');
  });


  it('parameter must be a number', function () {
    expect(generator()).to.deep.equal([], 'requires a parameter');
    expect(generator(5)).to.not.deep.equal([], 'parameter must be a number');
    expect(generator('doggies')).to.deep.equal([], 'as noted, you must enter a number');
    expect(generator({doggies: 'bow-wow'})).to.deep.equal([], 'as noted, you must enter a number');
    expect(generator(undefined)).to.deep.equal([], 'as noted, you must enter a number');
    expect(generator(null)).to.deep.equal([], 'as noted, you must enter a number');
  });

  describe('the resulting array', function () {
    it('array length must equal amount', function () {
      expect(generator(5).length).to.equal(5, 'array length must equal amount');
    });

    it('generated arrays must be randomly ordered and unique', function () {
      var arrayA = generator(10);
      var arrayB = generator(10);
      var arrayC = generator(10);

      expect(arrayA).to.not.deep.equal(arrayB, 'must return a unique array upon each invocation');
      expect(arrayB).to.not.deep.equal(arrayC, 'must return a unique array upon each invocation');
      expect(arrayC).to.not.deep.equal(arrayA, 'must return a unique array upon each invocation');
    });

    it('largest array value must be less than amount', function () {
      expect(Math.max.apply(null, generator(10))).to.be.below(10, 'array value should contain all integers between 0 and "amount - 1" ');
    });

  });

});
