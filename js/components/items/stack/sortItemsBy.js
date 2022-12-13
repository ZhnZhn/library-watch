"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _is = require("../../../utils/is");
var DF_RESULT = 2;
var _compareNotNumber = function _compareNotNumber(a, b, dfR) {
  if (dfR === void 0) {
    dfR = DF_RESULT;
  }
  var isB = (0, _is.isNumber)(b),
    isA = (0, _is.isNumber)(a);
  if (!isB && !isA) return 0;
  if (isB && !isA) return 1;
  if (!isB && isA) return -1;
  return dfR;
};
var _getReputation = function _getReputation(item) {
  var _ref = item || {},
    _ref$owner = _ref.owner,
    owner = _ref$owner === void 0 ? {} : _ref$owner;
  return owner.reputation || 0;
};
var _compareByReputation = function _compareByReputation(a, b) {
  var bN = _getReputation(b),
    aN = _getReputation(a),
    _notNumberResult = _compareNotNumber(aN, bN);
  return _notNumberResult === DF_RESULT ? bN - aN : _notNumberResult;
};
var _fCompareBy = function _fCompareBy(propName) {
  return function (a, b) {
    var bN = b[propName],
      aN = a[propName],
      _notNumberResult = _compareNotNumber(aN, bN);
    // guard for not numbers
    if (_notNumberResult !== DF_RESULT) {
      return _notNumberResult;
    }
    // secondary sort
    if (bN === aN) {
      return _compareByReputation(a, b);
    }
    return bN - aN;
  };
};
var sortItemsBy = function sortItemsBy(items, propName) {
  if (!propName) return items;
  var _compare = propName === 'reputation' ? _compareByReputation : _fCompareBy(propName);
  return items.sort(_compare);
};
var _default = sortItemsBy;
exports["default"] = _default;
//# sourceMappingURL=sortItemsBy.js.map