'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _findItem = require('./findItem');

var _findItem2 = _interopRequireDefault(_findItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowserLogic = {
  setIsOpen: function setIsOpen(chartType, browserMenu, browserType, value) {
    var item = (0, _findItem2.default)(browserMenu[browserType], chartType);
    if (item) {
      item.isOpen = value;
    }
  },
  plusCounter: function plusCounter(chartType, browserType, browserMenu, value) {
    var item = (0, _findItem2.default)(browserMenu[browserType], chartType);
    if (item) {
      item.counter += value;
      item.isOpen = true;
    }
  },
  resetCounter: function resetCounter(appMenu, bT, cT) {
    var item = (0, _findItem2.default)(appMenu[bT], cT);
    if (item) {
      item.counter = 0;
    }
  }
};

exports.default = BrowserLogic;
//# sourceMappingURL=BrowserLogic.js.map