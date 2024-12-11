"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const COLOR_STEP = '#80c040',
  S_STEP = {
    display: 'inline-block',
    color: COLOR_STEP,
    width: 24,
    height: 24,
    border: `2px solid ${COLOR_STEP}`,
    borderRadius: '50%',
    textAlign: 'center'
  };
const Step = _ref => {
  let {
    step
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S_STEP,
    children: step
  });
};
var _default = exports.default = Step;
//# sourceMappingURL=Step.js.map