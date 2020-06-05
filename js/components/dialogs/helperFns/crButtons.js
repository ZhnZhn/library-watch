"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FlatButton = _interopRequireDefault(require("../../zhn-m/FlatButton"));

var crButtons = function crButtons(_ref) {
  var inst = _ref.inst;
  return [/*#__PURE__*/_react["default"].createElement(_FlatButton["default"], {
    key: "load",
    isPrimary: true,
    caption: "Load",
    onClick: inst._handleLoad
  })];
};

var _default = crButtons;
exports["default"] = _default;
//# sourceMappingURL=crButtons.js.map