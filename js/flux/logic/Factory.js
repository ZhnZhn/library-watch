"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _AppStore = _interopRequireDefault(require("../stores/AppStore"));

var _withDialog = _interopRequireDefault(require("./withDialog"));

var _withDynamicBrowser = _interopRequireDefault(require("./withDynamicBrowser"));

var _withItemsContainer = _interopRequireDefault(require("./withItemsContainer"));

var _withItem = _interopRequireDefault(require("./withItem"));

var Factory = (0, _extends2["default"])({}, _withDialog["default"], _withDynamicBrowser["default"], _withItemsContainer["default"], _withItem["default"], {
  getElementFactory: function getElementFactory() {
    return _react["default"];
  },
  getStore: function getStore() {
    return _AppStore["default"];
  },
  getDataConf: function getDataConf(dialogType) {
    var dataId = dialogType.split('_')[0];
    return _AppStore["default"].getSourceConfig(dataId, dialogType);
  }
});
var _default = Factory;
exports["default"] = _default;
//# sourceMappingURL=Factory.js.map