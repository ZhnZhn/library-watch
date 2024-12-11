"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.setIsOpen = exports.resetCounter = exports.plusCounter = void 0;
var _findItem = _interopRequireDefault(require("./findItem"));
const setIsOpen = (chartType, menu, value) => {
  const setValue = (0, _findItem.default)(menu, chartType);
  if (setValue) {
    setValue(prevValue => ({
      v: prevValue.v,
      is: value
    }));
  }
};
exports.setIsOpen = setIsOpen;
const plusCounter = (chartType, menu, value) => {
  const setValue = (0, _findItem.default)(menu, chartType);
  if (setValue) {
    setValue(prevValue => ({
      v: prevValue.v + value,
      is: true
    }));
  }
};
exports.plusCounter = plusCounter;
const resetCounter = (chartType, menu) => {
  const setValue = (0, _findItem.default)(menu, chartType);
  if (setValue) {
    setValue(prevValue => ({
      v: 0,
      is: prevValue.is
    }));
  }
};
exports.resetCounter = resetCounter;
//# sourceMappingURL=BrowserLogicFn.js.map