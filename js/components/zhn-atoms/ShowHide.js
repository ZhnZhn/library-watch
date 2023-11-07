"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _CL = require("../styles/CL");
var _jsxRuntime = require("react/jsx-runtime");
const ShowHide = (0, _uiApi.forwardRef)((_ref, ref) => {
  let {
    isShow,
    style,
    className,
    onKeyDown,
    children
  } = _ref;
  const _className = (0, _crCn.default)(className, [isShow, _CL.CL_SHOW_POPUP]),
    _style = isShow ? _CL.S_BLOCK : _CL.S_NONE;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: ref,
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
});
var _default = exports.default = ShowHide;
//# sourceMappingURL=ShowHide.js.map