(function () {
  'use strict';
describe('getSmallestNumbers()', () => {
  it('should return the smallest number', () => {
    expect(getSmallestNumbers([1, 2, 3, 4])).toEqual(1);
    expect(getSmallestNumbers([6, 7, 56, 2, 9, 34, 3])).toEqual(2);
    expect(getSmallestNumbers([4, 4])).toEqual(4);
    expect(getSmallestNumbers([5, 38, 15, 1, 1, -19, 9])).toEqual(-19);
    expect(getSmallestNumbers([1, 1, 1, 1])).toEqual(1);
  }); 
});
describe('sumSmallestNumbers()', () => {
  it('should return the sum of the two smallest numbers', () => {
    expect(sumSmallestNumbers([1, 2, 3, 4])).toEqual(3);
    expect(sumSmallestNumbers([6, 7, 56, 2, 9, 34, 3])).toEqual(5);
    expect(sumSmallestNumbers([4, 4])).toEqual(8);
    expect(sumSmallestNumbers([5, 38, 15, 1, 1, -19, 9])).toEqual(-18);
    expect(sumSmallestNumbers([1, 1, 1, 1])).toEqual(2);
    expect(sumSmallestNumbers([-100, 1, 1, 1])).toEqual(-99);
  }); 
});
describe('sameXOAmount()', () => {
  it('should return `true` if number of `X` and `O` is equal', () => {
    expect(sameXOAmount('xXoO')).toEqual(true);
    expect(sameXOAmount('aAxXXbBoOo')).toEqual(true);
    expect(sameXOAmount('abc')).toEqual(true);
  });
  it('should return `false` if number of `X` and `O` is not equal', () => {
    expect(sameXOAmount('OaAxXbBoO')).toEqual(false);
    expect(sameXOAmount('xgXoXsdxOxz')).toEqual(false);
    expect(sameXOAmount('aaAmmMxMM')).toEqual(false);
  }); 
});
describe('findOddAmount()', () => {
  it('should return the number which occurs with an odd frequency', () => {
    expect(findOddAmount([1, 2, 2, 3, 3])).toEqual(1);
    expect(findOddAmount([8, 8, 7, 7, 7])).toEqual(7);
    expect(findOddAmount([10, 3, 3, 10, 6, 10, 6, 1, 1])).toEqual(10);
  }); 
});
})();
