'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isNaN = Number.isNaN || isNaN;

var is = {
  isNumber: function isNumber(n) {
    return typeof n === 'number' && !_isNaN(n);
  }
};

exports.default = is;
//# sourceMappingURL=is.js.map