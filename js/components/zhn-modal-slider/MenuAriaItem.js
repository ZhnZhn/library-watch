"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const FN_NOOP = () => {};
const MenuAriaItem = _ref => {
  let {
    refEl,
    onClick,
    onReg = FN_NOOP,
    children,
    ...rest
  } = _ref;
  const _onKeyDown = evt => {
      if (evt.keyCode === 32) {
        evt.preventDefault();
      }
    },
    _onKeyUp = evt => {
      if (evt.keyCode === 13 || evt.keyCode === 32) {
        onClick();
      }
    };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...rest,
    ref: refEl,
    role: "menuitem",
    tabIndex: "0",
    onClick: onClick,
    onKeyDown: _onKeyDown,
    onKeyUp: _onKeyUp,
    children: children
  });
};
var _default = exports.default = MenuAriaItem;
//# sourceMappingURL=MenuAriaItem.js.map