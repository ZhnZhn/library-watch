"use strict";

var _arrFn = require("../arrFn");
const obj0 = {},
  obj1 = {},
  item0 = {
    p1: 'a',
    p2: 0,
    p3: obj0
  },
  item1 = {
    p1: 'b',
    p2: 0,
    p3: obj1
  },
  arr = [item0, item1];
const _testFindInArrEdgeCases = fn => {
  expect(fn('p1', void 0, 'a')).toBe(void 0);
  expect(fn('p1', null, 'a')).toBe(void 0);
  expect(fn('p1', 'str', 'a')).toBe(void 0);
  expect(fn('p1', 1, 'a')).toBe(void 0);
  expect(fn('p1', true, 'a')).toBe(void 0);
  expect(fn('p1', {}, 'a')).toBe(void 0);
  expect(fn('p1', () => {}, 'a')).toBe(void 0);
};
describe('findByPropNameInArrIndex', () => {
  const fn = _arrFn.findByPropNameInArrIndex;
  test('should return first index by propName and value from array', () => {
    expect(fn('p1', arr, 'a')).toBe(0);
    expect(fn('p1', arr, 'b')).toBe(1);
    expect(fn('p1', arr, 'c')).toBe(-1);
    expect(fn('p2', arr, 0)).toBe(0);
    expect(fn('p3', arr, obj0)).toBe(0);
    expect(fn('p3', arr, obj1)).toBe(1);
  });
  test('should return void 0 in edge cases', () => {
    _testFindInArrEdgeCases(fn);
  });
});
describe('findByPropNameInArrItem', () => {
  const fn = _arrFn.findByPropNameInArrItem;
  test('should return first item by propName and value from array', () => {
    expect(fn('p1', arr, 'a')).toBe(item0);
    expect(fn('p1', arr, 'b')).toBe(item1);
    expect(fn('p1', arr, 'c')).toBe(void 0);
    expect(fn('p2', arr, 0)).toBe(item0);
    expect(fn('p3', arr, obj0)).toBe(item0);
    expect(fn('p3', arr, obj1)).toBe(item1);
  });
  test('should return void 0 in edge cases', () => {
    _testFindInArrEdgeCases(fn);
  });
});
describe('isInArrByPropName', () => {
  const fn = _arrFn.isInArrByPropName;
  test('should check by propName is object in arr exist', () => {
    expect(fn('p1', arr, 'a')).toBe(true);
    expect(fn('p1', arr, 'b')).toBe(true);
    expect(fn('p1', arr, 'c')).toBe(false);
    expect(fn('p2', arr, 0)).toBe(true);
    expect(fn('p3', arr, obj0)).toBe(true);
    expect(fn('p3', arr, obj1)).toBe(true);
  });
  test('should return false in case parameter is not array type', () => {
    expect(fn('p1', {}, 'a')).toBe(false);
    expect(fn('p1', null, 'a')).toBe(false);
    expect(fn('p1', void 0, 'a')).toBe(false);
    expect(fn('p1', 0, 'a')).toBe(false);
    expect(fn('p1', 'str', 'a')).toBe(false);
    expect(fn('p1', false, 'a')).toBe(false);
  });
});
//# sourceMappingURL=arrFn.test.js.map