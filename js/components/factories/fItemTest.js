"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _TestItem = _interopRequireDefault(require("../items/TestItem"));
var _jsxRuntime = require("react/jsx-runtime");
const fItemTest = _ref => {
  let {
    option,
    parentProps
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TestItem.default, {
    ...parentProps
  }, `${option.repo}_${option.requestType}`);
};
var _default = exports.default = fItemTest;
//# sourceMappingURL=fItemTest.js.map