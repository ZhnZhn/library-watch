"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _is = _interopRequireDefault(require("../utils/is"));

var has = {
  HAS_TOUCH: _is["default"].isTouchable(),
  wideWidth: function wideWidth() {
    return window.innerWidth ? window.innerWidth > 700 : true;
  }
};
var _default = has;
exports["default"] = _default;
//# sourceMappingURL=has.js.map