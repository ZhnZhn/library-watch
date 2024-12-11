"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _jsxRuntime = require("react/jsx-runtime");
const S_DIV_BTS = {
  textAlign: 'right',
  margin: '8px 4px 10px 0',
  cursor: 'default'
};
const RowButtons = _ref => {
  let {
    caption,
    onClick,
    onClear,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_DIV_BTS,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      isPrimary: true,
      caption: caption,
      timeout: 0,
      onClick: onClick
    }), onClear && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      caption: "Clear",
      timeout: 0,
      onClick: onClear
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      caption: "Close",
      timeout: 0,
      onClick: onClose
    })]
  });
};
var _default = exports.default = RowButtons;
//# sourceMappingURL=RowButtons.js.map