"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const S_LABEL_SPAN = {
  color: '#1b75bb',
  display: 'inline-block',
  width: 120,
  paddingRight: 5,
  textAlign: 'right',
  fontSize: '16px',
  fontWeight: 'bold'
};
const _crCaption = caption => caption && caption.indexOf(':') === -1 ? caption + ':' : '';
const Caption = _ref => {
  let {
    is = true,
    caption
  } = _ref;
  return is ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S_LABEL_SPAN,
    children: _crCaption(caption)
  }) : null;
};
var _default = exports.default = Caption;
//# sourceMappingURL=Caption.js.map