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
//# sourceMappingURL=dateFn.test.js.map