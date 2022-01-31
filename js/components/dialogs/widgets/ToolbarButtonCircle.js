"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _Row = _interopRequireDefault(require("../rows/Row"));

var _ButtonCircle = _interopRequireDefault(require("../../zhn-atoms/ButtonCircle"));

var _jsxRuntime = require("react/jsx-runtime");

var S_ROW = {
  padding: '4px 0 8px 0'
},
    S_BUTTON_CIRCLE = {
  marginLeft: 20
};
var ToolbarButtonCircle = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var buttons = _ref.buttons;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row["default"].Plain, {
    style: S_ROW,
    children: (buttons || []).map(function (_ref2, index) {
      var caption = _ref2.caption,
          title = _ref2.title,
          onClick = _ref2.onClick;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle["default"], {
        caption: caption,
        title: title,
        style: S_BUTTON_CIRCLE,
        onClick: onClick
      }, caption + index);
    })
  });
});
var _default = ToolbarButtonCircle;
exports["default"] = _default;
//# sourceMappingURL=ToolbarButtonCircle.js.map