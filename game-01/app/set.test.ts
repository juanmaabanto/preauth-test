import { getSetFromArray } from './set';

describe('getSetFromArray', () => {
  test('return empty array when array length is less than 2', () => {
    expect(getSetFromArray([], 10)).toEqual([]);
    expect(getSetFromArray([1], 10)).toEqual([]);
  });

  test('must return the first set of 2 numbers that add up to N', () => {
    expect(getSetFromArray([2, 5, 8, 14, 0], 10)).toEqual([2, 8]);
    expect(getSetFromArray([3, 6, 8, 13, 14], 15)).toEqual([]);
  });
});