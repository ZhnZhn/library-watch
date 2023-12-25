"use strict";

exports.__esModule = true;
exports.isWideWidth = exports.HAS_TOUCH_EVENTS = exports.HAS_KEYBOARD_FOCUS = void 0;
const HAS_TOUCH_EVENTS = exports.HAS_TOUCH_EVENTS = document && 'ontouchstart' in document.documentElement;
const HAS_KEYBOARD_FOCUS = exports.HAS_KEYBOARD_FOCUS = !HAS_TOUCH_EVENTS;
const isWideWidth = () => window.innerWidth ? window.innerWidth > 700 : true;
exports.isWideWidth = isWideWidth;
//# sourceMappingURL=has.js.map