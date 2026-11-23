"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const S_LABEL_SPAN = {
  color: '#1b75bb',
  display: 'inline-block',
  width: 120,
  paddingRight: 8,
  textAlign: 'right',
  fontSize: '16px',
  fontWeight: 'bold'
};
const Caption = ({
  is = true,
  style,
  caption,
  labelId
}) => is ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  id: labelId,
  style: {
    ...S_LABEL_SPAN,
    ...style
  },
  children: caption
}) : null;
var _default = exports.default = Caption;
//# sourceMappingURL=Caption.js.map