"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  STEP: {
    display: 'inline-block',
    color: '#80c040',
    width: 22,
    height: 22,
    border: '2px solid #80c040',
    borderRadius: '50%',
    textAlign: 'center'
  }
};

var Step = function Step(_ref) {
  var step = _ref.step;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S.STEP,
    children: step
  });
};

var _default = Step;
exports["default"] = _default;
//# sourceMappingURL=Step.js.map