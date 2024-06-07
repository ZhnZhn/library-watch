"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const S_SPINNER_LOADING = {
  position: 'absolute',
  display: 'inline-block',
  width: 20,
  height: 20
};
const SpinnerLoading = _ref => {
  let {
    style
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: {
      ...S_SPINNER_LOADING,
      ...style
    },
    "data-loader": "circle"
  });
};
var _default = exports.default = SpinnerLoading;
//# sourceMappingURL=SpinnerLoading.js.map