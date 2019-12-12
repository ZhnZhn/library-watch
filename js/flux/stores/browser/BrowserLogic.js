"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _findItem = _interopRequireDefault(require("./findItem"));

var BrowserLogic = {
  setIsOpen: function setIsOpen(chartType, browserMenu, browserType, value) {
    var item = (0, _findItem["default"])(browserMenu[browserType], chartType);

    if (item) {
      item.isOpen = value;
    }
  },
  plusCounter: function plusCounter(chartType, browserType, browserMenu, value) {
    var item = (0, _findItem["default"])(browserMenu[browserType], chartType);

    if (item) {
      item.counter += value;
      item.isOpen = true;
    }
  },
  resetCounter: function resetCounter(appMenu, bT, cT) {
    var item = (0, _findItem["default"])(appMenu[bT], cT);

    if (item) {
      item.counter = 0;
    }
  }
};
var _default = BrowserLogic;
exports["default"] = _default;
//# sourceMappingURL=BrowserLogic.js.map