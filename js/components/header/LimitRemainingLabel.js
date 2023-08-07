"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _itemStore = require("../../flux/itemStore");
var _jsxRuntime = require("react/jsx-runtime");
const WITHOUT_LIMIT = '',
  S_LIMIT_VALUE = {
    display: 'inline-block',
    color: '#2f7ed8',
    padding: '5px 10px 0',
    fontSize: '16px',
    fontWeight: 'bold'
  };
const LimitRemainingLabel = () => {
  const [value, setValue] = (0, _uiApi.useState)('');
  (0, _itemStore.useLimitRemaining)(limitRemaining => {
    setValue(limitRemaining != null ? limitRemaining : WITHOUT_LIMIT);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S_LIMIT_VALUE,
    children: value
  });
};
var _default = LimitRemainingLabel;
exports.default = _default;
//# sourceMappingURL=LimitRemainingLabel.js.map