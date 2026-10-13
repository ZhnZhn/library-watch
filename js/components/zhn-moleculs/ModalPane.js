"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useClickOutside = _interopRequireDefault(require("../hooks/useClickOutside"));
var _fUseKey = require("../hooks/fUseKey");
var _useFocus = require("../hooks/useFocus");
var _styleFn = require("../styleFn");
var _jsxRuntime = require("react/jsx-runtime");
const FN_NOOP = () => {};
const ModalPane = ({
  isShow,
  className,
  style,
  onClose = FN_NOOP,
  children,
  ...restProps
}) => {
  const _ref = (0, _useClickOutside.default)(isShow, onClose),
    _hKeyEscape = (0, _fUseKey.useKeyEscape)(onClose);
  (0, _useFocus.useFocusPrevElement)(isShow);
  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...restProps,
    ref: _ref,
    className: (0, _styleFn.crCnBgColor)(className),
    style: style,
    hidden: !isShow,
    onKeyDown: isShow ? _hKeyEscape : void 0,
    children: children
  });
  /*eslint-enable jsx-a11y/no-static-element-interactions*/
};
var _default = exports.default = ModalPane;
//# sourceMappingURL=ModalPane.js.map