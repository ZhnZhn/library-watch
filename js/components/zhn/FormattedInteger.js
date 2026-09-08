"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g,
  _formatValue = value => value >= 1000 ? ('' + value).replace(REPLACER_PATTERN, '$1,') : value;
const FormattedInteger = props => /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  style: props.style,
  children: _formatValue(props.value ?? 0)
});
var _default = exports.default = FormattedInteger;
//# sourceMappingURL=FormattedInteger.js.map