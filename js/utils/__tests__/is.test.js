"use strict";

var _is = require("../is");
describe('isNumber', function () {
  var fn = _is.isNumber;
  test('should return boolean is value type number', function () {
    expect(fn(0.1 + 0.2)).toBe(true);
    expect(fn(NaN)).toBe(false);
    expect(fn()).toBe(false);
    expect(fn(null)).toBe(false);
    expect(fn('str')).toBe(false);
    expect(fn(true)).toBe(false);
    expect(fn({})).toBe(false);
    expect(fn([])).toBe(false);
    expect(fn(function () {})).toBe(false);
  });
});
describe('isArr', function () {
  var fn = _is.isArr;
  test('should return boolean is value type array', function () {
    expect(fn([])).toBe(true);
    expect(fn(1)).toBe(false);
    expect(fn(NaN)).toBe(false);
    expect(fn()).toBe(false);
    expect(fn(null)).toBe(false);
    expect(fn('str')).toBe(false);
    expect(fn(true)).toBe(false);
    expect(fn({})).toBe(false);
    expect(fn(function () {})).toBe(false);
  });
});
describe('isRegularObj', function () {
  var fn = _is.isRegularObj;
  test('should return boolean is value type regular object', function () {
    expect(fn({})).toBe(true);
    expect(fn(1)).toBe(false);
    expect(fn(NaN)).toBe(false);
    expect(fn()).toBe(false);
    expect(fn(null)).toBe(false);
    expect(fn('str')).toBe(false);
    expect(fn(true)).toBe(false);
    expect(fn([])).toBe(false);
    expect(fn(function () {})).toBe(false);
  });
});
describe('isNotEmptyStr', function () {
  var fn = _is.isNotEmptyStr;
  test('shoult return true only for not empty string parameter', function () {
    expect(fn('a')).toBe(true);
    expect(fn(' ')).toBe(true);
    expect(fn('')).toBe(false);
    expect(fn()).toBe(false);
    expect(fn(null)).toBe(false);
    expect(fn(0)).toBe(false);
    expect(fn(true)).toBe(false);
    expect(fn({})).toBe(false);
    expect(fn(function () {})).toBe(false);
  });
});
//# sourceMappingURL=is.test.js.map