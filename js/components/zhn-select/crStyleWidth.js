"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var crStyleWidth = function crStyleWidth(width, style) {
  return width ? ('' + width).indexOf('%') !== -1 ? (0, _extends2["default"])({}, style, {
    width: width
  }) : (0, _extends2["default"])({}, style, {
    width: width + 'px'
  }) : null;
};
var _default = crStyleWidth;
exports["default"] = _default;
//# sourceMappingURL=crStyleWidth.js.map