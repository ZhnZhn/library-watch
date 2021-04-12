"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _jsxRuntime = require("react/jsx-runtime");

var crCommandButtons = function crCommandButtons(_ref) {
  var inst = _ref.inst,
      isDefault = _ref.isDefault;
  return [isDefault && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
    caption: "Default",
    timeout: 0,
    onClick: inst._handleDefault
  }, "default"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
    isPrimary: true,
    caption: "Load",
    onClick: inst._handleLoad
  }, "load")].filter(Boolean);
};

var _default = crCommandButtons;
exports["default"] = _default;
//# sourceMappingURL=crCommandButtons.js.map