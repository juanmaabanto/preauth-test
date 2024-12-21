import { getSetFromArray } from './set';

describe('getSetFromArray', () => {
  test('return empty array when array length is less than 2', () => {
    expect(getSetFromArray([], 10)).toEqual([]);
    expect(getSetFromArray([1], 10)).toEqual([]);
  })
});