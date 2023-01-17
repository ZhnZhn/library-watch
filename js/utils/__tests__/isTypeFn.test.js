"use strict";

var _isTypeFn = require("../isTypeFn");
describe('isNumber', function () {
  var fn = _isTypeFn.isNumber;
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
  var fn = _isTypeFn.isArr;
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
  var fn = _isTypeFn.isRegularObj;
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
  var fn = _isTypeFn.isStr;
  test('shoult return true only for string type', function () {
    expect(fn('str')).toBe(true);
    expect(fn('')).toBe(true);
    expect(fn(new String())).toBe(false);
    expect(fn()).toBe(false);
    expect(fn(null)).toBe(false);
    expect(fn(0)).toBe(false);
    expect(fn(true)).toBe(false);
    expect(fn({})).toBe(false);
    expect(fn(function () {})).toBe(false);
  });
});
describe('isNotEmptyStr', function () {
  var fn = _isTypeFn.isNotEmptyStr;
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
//# sourceMappingURL=isTypeFn.test.js.map