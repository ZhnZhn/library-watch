"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../../components/uiApi");

var _AppStore = _interopRequireDefault(require("../stores/AppStore"));

var _withItemsContainer = _interopRequireDefault(require("./withItemsContainer"));

var Factory = (0, _extends2["default"])({}, _withItemsContainer["default"], {
  getElementFactory: function getElementFactory() {
    return _uiApi.createElement;
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