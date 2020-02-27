"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _DateUtils = _interopRequireDefault(require("../../../utils/DateUtils"));

var _crMenuMore = _interopRequireDefault(require("./crMenuMore"));

var _crButtons = _interopRequireDefault(require("./crButtons"));

var getFromDate = _DateUtils["default"].getFromDate,
    getToDate = _DateUtils["default"].getToDate,
    isValidDate = _DateUtils["default"].isValidDate,
    toUTCMillis = _DateUtils["default"].toUTCMillis,
    toUTCSecond = _DateUtils["default"].toUTCSecond;

var crDateConfig = function crDateConfig(fromDate) {
  if (fromDate === void 0) {
    fromDate = 1;
  }

  return {
    _initFromDate: getFromDate(fromDate),
    _initToDate: getToDate(),
    _onTestDate: isValidDate
  };
};

var helperFns = {
  crMenuMore: _crMenuMore["default"],
  crButtons: _crButtons["default"],
  crDateConfig: crDateConfig,
  toUTCSecond: toUTCSecond,
  toUTCMillis: toUTCMillis,
  dateConfig: crDateConfig()
};
var _default = helperFns;
exports["default"] = _default;
//# sourceMappingURL=helperFns.js.map