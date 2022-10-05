"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.setIsOpen = exports.resetCounter = exports.plusCounter = void 0;

var _findItem = _interopRequireDefault(require("./findItem"));

var setIsOpen = function setIsOpen(chartType, browserMenu, browserType, value) {
  var item = (0, _findItem["default"])(browserMenu[browserType], chartType);

  if (item) {
    item.isOpen = value;
  }
};

exports.setIsOpen = setIsOpen;

var plusCounter = function plusCounter(chartType, browserType, browserMenu, value) {
  var item = (0, _findItem["default"])(browserMenu[browserType], chartType);

  if (item) {
    item.counter += value;
    item.isOpen = true;
  }
};

exports.plusCounter = plusCounter;

var resetCounter = function resetCounter(appMenu, bT, cT) {
  var item = (0, _findItem["default"])(appMenu[bT], cT);

  if (item) {
    item.counter = 0;
  }
};

exports.resetCounter = resetCounter;
//# sourceMappingURL=BrowserLogicFn.js.map