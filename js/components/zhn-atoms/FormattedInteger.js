"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

//import PropTypes from "prop-types";
var REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g;

var FormattedInteger = function FormattedInteger(_ref) {
  var value = _ref.value,
      style = _ref.style;

  if (value >= 1000) {
    value = ('' + value).replace(REPLACER_PATTERN, '$1,');
  }

  return /*#__PURE__*/_react["default"].createElement("span", {
    style: style
  }, value);
};
/*
FormattedInteger.propTypes = {
  value: PropTypes.number,
  style: PropTypes.object
}
*/


FormattedInteger.defaultProps = {
  value: 0
};
var _default = FormattedInteger;
exports["default"] = _default;
//# sourceMappingURL=FormattedInteger.js.map