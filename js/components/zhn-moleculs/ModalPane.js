"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useClickOutside = _interopRequireDefault(require("../hooks/useClickOutside"));
var _jsxRuntime = require("react/jsx-runtime");
const S_DIV = {
    backgroundColor: '#4d4d4d'
  },
  FN_NOOP = () => {};
const ModalPane = _ref2 => {
  let {
    isShow,
    onClose = FN_NOOP,
    children
  } = _ref2;
  const _ref = (0, _useClickOutside.default)(isShow, onClose);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: _ref,
    style: S_DIV,
    children: children
  });
};
var _default = exports.default = ModalPane;
//# sourceMappingURL=ModalPane.js.map