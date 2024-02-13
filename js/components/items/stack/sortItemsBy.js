"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../../utils/isTypeFn");
var _clearPrototypeOf = require("../../../utils/clearPrototypeOf");
var _config = require("./config");
const DF_RESULT = 2;
const _compareNotNumber = function (a, b, dfR) {
  if (dfR === void 0) {
    dfR = DF_RESULT;
  }
  const isB = (0, _isTypeFn.isNumber)(b),
    isA = (0, _isTypeFn.isNumber)(a);
  if (!isB && !isA) return 0;
  if (isB && !isA) return 1;
  if (!isB && isA) return -1;
  return dfR;
};
const _fCompareMaybeNumber = getMaybeNumber => (a, b) => {
  const bN = getMaybeNumber(b),
    aN = getMaybeNumber(a),
    _notNumberResult = _compareNotNumber(aN, bN);
  return _notNumberResult === DF_RESULT ? bN - aN : _notNumberResult;
};
const _getReputation = item => {
    const {
      owner
    } = item || {};
    return (owner || {})[_config.PN_REPUTATION] || 0;
  },
  _compareByReputation = _fCompareMaybeNumber(_getReputation),
  _getBountyAmount = item => (item || {})[_config.PN_BOUNTY_AMOUNT] || 0,
  _routerCompare = {
    [_config.PN_REPUTATION]: _compareByReputation,
    [_config.PN_BOUNTY_AMOUNT]: _fCompareMaybeNumber(_getBountyAmount)
  };
(0, _clearPrototypeOf.clearPrototypeOf)(_routerCompare);
const _fCompareBy = propName => (a, b) => {
  const bN = b[propName],
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
const sortItemsBy = (items, propName) => propName ? items.sort(_routerCompare[propName] || _fCompareBy(propName)) : items;
var _default = exports.default = sortItemsBy;
//# sourceMappingURL=sortItemsBy.js.map