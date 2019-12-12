"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _DialogStyles = _interopRequireDefault(require("../../styles/DialogStyles"));

var Plain = function Plain(_ref) {
  var style = _ref.style,
      children = _ref.children;
  return _react["default"].createElement("div", {
    style: (0, _extends2["default"])({}, _DialogStyles["default"].rowDiv, {}, style)
  }, children);
};

var Row = {
  Plain: Plain
};
var _default = Row;
exports["default"] = _default;
//# sourceMappingURL=Row.js.map