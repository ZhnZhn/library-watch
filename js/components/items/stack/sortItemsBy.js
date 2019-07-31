'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isNaN = Number.isNaN || isNaN;
var _isNumber = function _isNumber(n) {
  return typeof n === 'number' && !_isNaN(n);
};

var DF_RESULT = 10;
var _compareNotNumber = function _compareNotNumber(a, b) {
  var dfR = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DF_RESULT;

  var isB = _isNumber(b),
      isA = _isNumber(a);

  if (!isB && !isA) return 0;
  if (isB && !isA) return 1;
  if (!isB && isA) return -1;
  return dfR;
};

var _getReputation = function _getReputation(item) {
  var _ref = item || {},
      _ref$owner = _ref.owner,
      owner = _ref$owner === undefined ? {} : _ref$owner;

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

exports.default = sortItemsBy;
//# sourceMappingURL=sortItemsBy.js.map