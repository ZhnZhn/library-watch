"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _useListen = _interopRequireDefault(require("../hooks/useListen"));
var _jsxRuntime = require("react/jsx-runtime");
var WITHOUT_LIMIT = '',
  S_LIMIT_VALUE = {
    display: 'inline-block',
    color: '#2f7ed8',
    padding: '5px 10px 0',
    fontSize: '16px',
    fontWeight: 'bold'
  };
var LimitRemainingLabel = function LimitRemainingLabel(_ref) {
  var store = _ref.store;
  var _useState = (0, _uiApi.useState)(''),
    value = _useState[0],
    setValue = _useState[1];
  (0, _useListen["default"])(store, function (limitValue) {
    setValue(limitValue != null ? limitValue : WITHOUT_LIMIT);
  }, 'listenLimitRemaining');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S_LIMIT_VALUE,
    children: value
  });
};
var _default = LimitRemainingLabel;
exports["default"] = _default;
//# sourceMappingURL=LimitRemainingLabel.js.map