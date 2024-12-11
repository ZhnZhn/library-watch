"use strict";

exports.__esModule = true;
exports.default = void 0;
const crStyleWidth = (width, style) => width ? ('' + width).indexOf('%') !== -1 ? {
  ...style,
  width: width
} : {
  ...style,
  width: width + 'px'
} : null;
var _default = exports.default = crStyleWidth;
//# sourceMappingURL=crStyleWidth.js.map