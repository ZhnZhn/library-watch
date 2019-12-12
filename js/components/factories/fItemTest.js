"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _TestItem = _interopRequireDefault(require("../items/TestItem"));

var fItemTest = function fItemTest(_ref) {
  var factory = _ref.factory,
      option = _ref.option,
      json = _ref.json,
      parentProps = _ref.parentProps;
  var repo = option.repo,
      requestType = option.requestType;
  return factory.createElement(_TestItem["default"], (0, _extends2["default"])({
    key: repo + "_" + requestType
  }, parentProps));
};

var _default = fItemTest;
exports["default"] = _default;
//# sourceMappingURL=fItemTest.js.map