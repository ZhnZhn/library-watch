"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.FlatButtonSettings = exports.FlatButtonSave = exports.FlatButtonInfo = void 0;
var _SvgIcons = require("../zhn/svg/SvgIcons");
var _FlatButton = _interopRequireDefault(require("./FlatButton"));
var _jsxRuntime = require("react/jsx-runtime");
const S_SVG_ICON = {
  verticalAlign: 'middle',
  margin: '0 8px'
};
const _fFlatButton = SvgIcon => ({
  svgStyle = S_SVG_ICON,
  children,
  ...restProps
}) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
  ...restProps,
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SvgIcon, {
    style: svgStyle
  })
});
const FlatButtonSave = exports.FlatButtonSave = _fFlatButton(_SvgIcons.SvgSave);
const FlatButtonInfo = exports.FlatButtonInfo = _fFlatButton(_SvgIcons.SvgInfo);
const FlatButtonSettings = exports.FlatButtonSettings = _fFlatButton(_SvgIcons.SvgSettings);
//# sourceMappingURL=FlatButtons.js.map