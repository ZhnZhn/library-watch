"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g,
    _formatValue = function _formatValue(value) {
  return value >= 1000 ? ('' + value).replace(REPLACER_PATTERN, '$1,') : value;
};

var FormattedInteger = function FormattedInteger(_ref) {
  var style = _ref.style,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 0 : _ref$value;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: style,
    children: _formatValue(value)
  });
};

var _default = FormattedInteger;
exports["default"] = _default;
//# sourceMappingURL=FormattedInteger.js.map