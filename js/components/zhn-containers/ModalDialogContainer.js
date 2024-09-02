"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("react/jsx-runtime");
const CL_INIT = 'modal-root',
  CL_SHOWING = 'modal-root show-modal';
const ModalDialogContainer = _ref => {
  let {
    isShow,
    onClose,
    children
  } = _ref;
  const [_className, _style] = isShow ? [CL_SHOWING, _styleFn.S_BLOCK] : [CL_INIT, _styleFn.S_NONE];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    role: "presentation",
    className: _className,
    style: _style,
    onClick: onClose,
    children: children
  });
};
var _default = exports.default = ModalDialogContainer;
//# sourceMappingURL=ModalDialogContainer.js.map