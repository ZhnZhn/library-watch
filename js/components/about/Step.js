"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _jsxRuntime = require("react/jsx-runtime");
var COLOR_STEP = '#80c040',
  S_STEP = {
    display: 'inline-block',
    color: COLOR_STEP,
    width: 24,
    height: 24,
    border: "2px solid " + COLOR_STEP,
    borderRadius: '50%',
    textAlign: 'center'
  };
var Step = function Step(_ref) {
  var step = _ref.step;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S_STEP,
    children: step
  });
};
var _default = Step;
exports["default"] = _default;
//# sourceMappingURL=Step.js.map