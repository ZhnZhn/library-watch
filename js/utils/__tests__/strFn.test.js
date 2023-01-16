"use strict";

var _strFn = require("../strFn");
describe('isNotEmptyStr', function () {
  var fn = _strFn.isNotEmptyStr;
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
describe('setFirstToUpperCase', function () {
  var fn = _strFn.setFirstToUpperCase;
  test('return str with upperCase first letter', function () {
    expect(fn('abc')).toBe('Abc');
  });
  test('return input in all edge cases', function () {
    expect(fn('')).toBe('');
    expect(fn()).toBe();
    expect(fn(null)).toBe(null);
    expect(fn(1)).toBe(1);
    expect(fn(true)).toBe(true);
    var obj = {};
    expect(fn(obj) === obj).toBe(true);
    var fnInput = function fnInput() {};
    expect(fn(fnInput) === fnInput).toBe(true);
  });
});
//# sourceMappingURL=strFn.test.js.map