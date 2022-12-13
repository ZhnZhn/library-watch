"use strict";

exports.__esModule = true;
exports.isWideWidth = exports.HAS_TOUCH_EVENTS = void 0;
var HAS_TOUCH_EVENTS = document && 'ontouchstart' in document.documentElement;
exports.HAS_TOUCH_EVENTS = HAS_TOUCH_EVENTS;
var isWideWidth = function isWideWidth() {
  return window.innerWidth ? window.innerWidth > 700 : true;
};
exports.isWideWidth = isWideWidth;
//# sourceMappingURL=has.js.map