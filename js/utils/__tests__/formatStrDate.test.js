"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _formatStrDate = _interopRequireDefault(require("../formatStrDate"));
describe('formatStrDate', () => {
  const fn = _formatStrDate.default;
  test('should format str date YYYY-MM-DDTHH:MM:SSZ to YYYY-MM-DD HH:MM:SS', () => {
    expect(fn('2010-10-10T10:10:10Z')).toBe('2010-10-10 10:10:10');
  });
  test('should return default value for edge cases', () => {
    expect(fn('')).toBe('');
    expect(fn(null)).toBe('');
    expect(fn()).toBe('');
    expect(fn(1, 'dfValue')).toBe('dfValue');
    expect(fn(true, 'dfValue')).toBe('dfValue');
    expect(fn({}, 'dfValue')).toBe('dfValue');
    expect(fn(() => {}, 'dfValue')).toBe('dfValue');
  });
});
//# sourceMappingURL=formatStrDate.test.js.map