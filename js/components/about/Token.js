"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Token = function Token(props) {
  var isFirstBlank = props.isFirstBlank,
      color = props.color,
      children = props.children,
      _firstChart = isFirstBlank ? ' ' : undefined;

  return /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: color,
      fontWeight: 'bold'
    }
  }, _firstChart, children);
};

var _default = Token;
exports["default"] = _default;
//# sourceMappingURL=Token.js.map