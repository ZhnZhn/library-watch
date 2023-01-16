"use strict";

var _arrFn = require("../arrFn");
var obj0 = {},
  obj1 = {},
  arr = [{
    p1: 'a',
    p2: 0,
    p3: obj0
  }, {
    p1: 'b',
    p2: 0,
    p3: obj1
  }];
describe('findByPropNameInArrIndex', function () {
  var fn = _arrFn.findByPropNameInArrIndex;
  test('should return first index by propName and value from array', function () {
    expect(fn('p1', arr, 'a')).toBe(0);
    expect(fn('p1', arr, 'b')).toBe(1);
    expect(fn('p1', arr, 'c')).toBe(-1);
    expect(fn('p2', arr, 0)).toBe(0);
    expect(fn('p3', arr, obj0)).toBe(0);
    expect(fn('p3', arr, obj1)).toBe(1);
  });
});
describe('isInArrByPropName', function () {
  var fn = _arrFn.isInArrByPropName;
  test('should check by propName is object in arr exist', function () {
    expect(fn('p1', arr, 'a')).toBe(true);
    expect(fn('p1', arr, 'b')).toBe(true);
    expect(fn('p1', arr, 'c')).toBe(false);
    expect(fn('p2', arr, 0)).toBe(true);
    expect(fn('p3', arr, obj0)).toBe(true);
    expect(fn('p3', arr, obj1)).toBe(true);
  });
  test('should return false in case parameter is not array type', function () {
    expect(fn('p1', {}, 'a')).toBe(false);
    expect(fn('p1', null, 'a')).toBe(false);
    expect(fn('p1', void 0, 'a')).toBe(false);
    expect(fn('p1', 0, 'a')).toBe(false);
    expect(fn('p1', 'str', 'a')).toBe(false);
    expect(fn('p1', false, 'a')).toBe(false);
  });
});
//# sourceMappingURL=arrFn.test.js.map