"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _Row = _interopRequireDefault(require("../rows/Row"));
var _ButtonCircle = _interopRequireDefault(require("../../zhn/ButtonCircle"));
var _jsxRuntime = require("react/jsx-runtime");
const S_ROW = {
    padding: '4px 0 8px 0'
  },
  S_BUTTON_CIRCLE = {
    marginLeft: 20
  };
const ToolbarButtonCircle = (0, _uiApi.memo)(_ref => {
  let {
    buttons
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.default, {
    style: S_ROW,
    children: (buttons || []).map((_ref2, index) => {
      let {
        caption,
        title,
        onClick
      } = _ref2;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
        style: S_BUTTON_CIRCLE,
        caption: caption,
        title: title,
        onClick: onClick
      }, caption + index);
    })
  });
});
var _default = exports.default = ToolbarButtonCircle;
//# sourceMappingURL=ToolbarButtonCircle.js.map