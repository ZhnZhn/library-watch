"use strict";

exports.__esModule = true;
exports.toTopByKey = exports.removeAll = void 0;
var _isArr = Array.isArray;

var _isObj = function _isObj(obj) {
  return typeof obj === 'object' && obj !== null;
};

var toTopByKey = function toTopByKey(slice, key) {
  if (!_isObj(slice)) {
    return false;
  }

  var _configs = slice.configs;

  if (!_isArr(_configs)) {
    return false;
  }

  var _index = _configs.findIndex(function (obj) {
    return obj.key === key;
  });

  if (_index !== -1) {
    _configs.unshift(_configs[_index]);

    _configs.splice(_index + 1, 1);

    return true;
  } else {
    return false;
  }
};

exports.toTopByKey = toTopByKey;

var removeAll = function removeAll(slice, chartType) {
  var _slice = slice[chartType] || {};

  _slice.configs = [];
  return _slice;
};

exports.removeAll = removeAll;
//# sourceMappingURL=ChartLogicFn.js.map