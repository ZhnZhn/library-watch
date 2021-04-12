"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

var Token = function Token(props) {
  var isFirstBlank = props.isFirstBlank,
      color = props.color,
      children = props.children,
      _firstChart = isFirstBlank ? ' ' : undefined;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    style: {
      color: color,
      fontWeight: 'bold'
    },
    children: [_firstChart, children]
  });
};

var _default = Token;
exports["default"] = _default;
//# sourceMappingURL=Token.js.map