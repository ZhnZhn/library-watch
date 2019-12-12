"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _isNaN = Number.isNaN || isNaN;

var is = {
  isNumber: function isNumber(n) {
    return typeof n === 'number' && !_isNaN(n);
  },
  isTouchable: function isTouchable() {
    return document && 'ontouchstart' in document.documentElement;
  }
};
var _default = is;
exports["default"] = _default;
//# sourceMappingURL=is.js.map