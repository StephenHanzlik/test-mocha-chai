'use strict';

const code = require('../test-write.js');
const expect = require('chai').expect;

describe('twoSum', () => {

  //accepts only one argument
  it('should accept an array and a target', () => {
    expect(code.twoSum([1, 2, 3])).to.equal('Function needs proper input');
    expect(code.twoSum()).to.equal('Function needs proper input');
  });

  //input is an array of ints
  it('should take an array of itengers and a target integer', () => {
    expect(code.twoSum('Laura')).to.equal('Function needs proper input');
    expect(code.twoSum(true)).to.equal('Function needs proper input');
    expect(code.twoSum(NaN)).to.equal('Function needs proper input');
    expect(code.twoSum(undefined)).to.equal('Function needs proper input');

  });

  //output is an arry
  it('should return an array', () => {
    expect(code.twoSum([1, 2, 3], 5)).to.be.a('array');
  });

  it('returns an array thats sum reaches target', () => {
    expect(code.twoSum([1, 2, 3], 5)).to.equal([2, 3]);
  });

});
