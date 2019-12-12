"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _isObj = function _isObj(obj) {
  return typeof obj === 'object' && obj !== null;
};

var ChartLogic = {
  toTopByKey: function toTopByKey(slice, key) {
    if (!_isObj(slice)) {
      return false;
    }

    var _configs = slice.configs;

    if (!Array.isArray(_configs)) {
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
  },
  removeAll: function removeAll(slice, chartType) {
    var _slice = slice[chartType] || {};

    _slice.configs = [];
    return _slice;
  }
};
var _default = ChartLogic;
exports["default"] = _default;
//# sourceMappingURL=ChartLogic.js.map