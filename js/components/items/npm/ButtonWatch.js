"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ButtonCircle = _interopRequireDefault(require("../../zhn/ButtonCircle"));
var _jsxRuntime = require("react/jsx-runtime");
const S_BTN_CIRCLE = {
  position: 'relative',
  top: -2,
  marginLeft: 10
};
const ButtonWatch = _ref => {
  let {
    onClick
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
    style: S_BTN_CIRCLE,
    caption: "W",
    title: "Add to WatchList",
    onClick: onClick
  });
};
var _default = exports.default = ButtonWatch;
//# sourceMappingURL=ButtonWatch.js.map