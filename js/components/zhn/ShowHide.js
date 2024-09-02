"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _styleFn = require("../styleFn");
var _jsxRuntime = require("react/jsx-runtime");
const ShowHide = _ref => {
  let {
    refEl,
    isShow,
    style,
    className,
    onKeyDown,
    children
  } = _ref;
  const _className = (0, _crCn.default)(className, [isShow, _styleFn.CL_SHOW_POPUP]),
    _style = isShow ? _styleFn.S_BLOCK : _styleFn.S_NONE;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: refEl,
    role: "presentation",
    "aria-hidden": isShow,
    className: _className,
    style: {
      ...style,
      ..._style
    },
    onKeyDown: onKeyDown,
    children: children
  });
};
var _default = exports.default = ShowHide;
//# sourceMappingURL=ShowHide.js.map