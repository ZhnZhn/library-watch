"use strict";

var _DateUtils = require("../DateUtils");
var MIN_YEAR = 1999;
describe('isYmd', function () {
  var fn = _DateUtils.isYmd;
  test('should return true for valid YYYY-MM-DD', function () {
    expect(fn("2010-01-10")).toBe(true);
    expect(fn("2010-10-01")).toBe(true);
  });
  test('should return false for not valid YYYY-MM-DD', function () {
    expect(fn("2010-14-01")).toBe(false);
    expect(fn("2010-02-32")).toBe(false);
  });
  test("min default valid value is " + MIN_YEAR + "-01-01", function () {
    expect(fn(MIN_YEAR + "-01-01")).toBe(true);
    expect(fn('1989-12-30')).toBe(false);
  });
  test('min default valid can be configured', function () {
    expect(fn('1989-12-30', 0, 1989)).toBe(true);
  });
  test('should year be not future', function () {
    expect(fn('2030-01-01')).toBe(false);
    expect(fn('2030-01-01', 1)).toBe(false);
    expect(fn('2030-01-01', 2)).toBe(false);
    expect(fn('2030-01-01', 3)).toBe(false);
    expect(fn('2030-01-01', 20)).toBe(true);
  });
  test('should return false in edge case', function () {
    expect(fn('')).toBe(false);
    expect(fn([])).toBe(false);
    expect(fn(null)).toBe(false);
    expect(fn(undefined)).toBe(false);
  });
});
describe('mlsToDmy', function () {
  var fn = _DateUtils.mlsToDmy;
  var EMPTY = '';
  test('should format millisUTC to DD-MM-YYYY string format', function () {
    expect(fn(1514764800000)).toBe('01-01-2018');
    expect(fn(1515542400000)).toBe('10-01-2018');
    expect(fn(1538352000000)).toBe('01-10-2018');
  });
  test('should format to empty string in edge case', function () {
    expect(fn(null)).toBe(EMPTY);
    expect(fn(undefined)).toBe(EMPTY);
    expect(fn({})).toBe(EMPTY);
    expect(fn(NaN)).toBe(EMPTY);
    expect(fn('')).toBe(EMPTY);
    expect(fn('abc')).toBe(EMPTY);
    expect(fn(function () {})).toBe(EMPTY);
    expect(fn(Number.MAX_SAFE_INTEGER)).toBe(EMPTY);
  });
});
//# sourceMappingURL=dateFn.test.js.map