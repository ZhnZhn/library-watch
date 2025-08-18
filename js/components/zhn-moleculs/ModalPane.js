"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useClickOutside = _interopRequireDefault(require("../hooks/useClickOutside"));
var _useKeyEscape = _interopRequireDefault(require("../hooks/useKeyEscape"));
var _jsxRuntime = require("react/jsx-runtime");
const S_DIV = {
    backgroundColor: '#4d4d4d'
  },
  FN_NOOP = () => {};
const ModalPane = _ref2 => {
  let {
    isShow,
    className,
    style,
    onClose = FN_NOOP,
    children,
    ...restProps
  } = _ref2;
  const _ref = (0, _useClickOutside.default)(isShow, onClose),
    _hKeyEscape = (0, _useKeyEscape.default)(onClose);
  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...restProps,
    ref: _ref,
    className: className,
    style: {
      ...S_DIV,
      ...style
    },
    hidden: !isShow,
    onKeyDown: isShow ? _hKeyEscape : void 0,
    children: children
  });
  /*eslint-enable jsx-a11y/no-static-element-interactions*/
};
var _default = exports.default = ModalPane;
//# sourceMappingURL=ModalPane.js.map