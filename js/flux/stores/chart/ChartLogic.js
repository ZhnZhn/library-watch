'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _isObj = function _isObj(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object' && obj !== null;
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

exports.default = ChartLogic;
//# sourceMappingURL=ChartLogic.js.map