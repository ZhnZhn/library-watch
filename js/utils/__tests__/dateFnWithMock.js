"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _dateFn = require("../dateFn");
var _mockDateBeforeAll = _interopRequireDefault(require("./mockDateBeforeAll"));
describe('dateFnWithMock', () => {
  test('', () => expect('').toBe(''));
});
const dateFnWithMock = () => {
  describe('getFromDate', () => {
    //2020-01-01 12:00:01
    (0, _mockDateBeforeAll.default)(2020, 0, 1, 12, 0, 1);
    test('getToDate should return current Date as YYYY-MM-DD', () => {
      expect((0, _dateFn.getToDate)()).toBe('2020-01-01');
    });
    const fn = _dateFn.getFromDate;
    test('should return str in format YYYY-MM-DD minusYear', () => {
      expect(fn(2)).toBe('2018-01-01');
      expect(fn(void 0)).toBe('2018-01-01');
      expect(fn(20)).toBe('2000-01-01');
    });
  });
};
var _default = exports.default = dateFnWithMock;
//# sourceMappingURL=dateFnWithMock.js.map