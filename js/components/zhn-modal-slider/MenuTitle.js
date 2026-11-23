"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Svg = require("../zhn/svg/Svg");
var _MenuAriaItem = _interopRequireDefault(require("./MenuAriaItem"));
var _jsxRuntime = require("react/jsx-runtime");
const S_ITEM = {
    position: 'relative'
  },
  S_PREV_PAGE = {
    verticalAlign: 'text-bottom'
  },
  S_TITLE = {
    paddingLeft: 8
  };
const MenuTitle = ({
  refEl,
  titleCl,
  title,
  onClick
}) => title ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuAriaItem.default, {
  refEl: refEl,
  className: titleCl,
  style: S_ITEM,
  onClick: onClick,
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Svg.SvgArrowLeft, {
    style: S_PREV_PAGE
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S_TITLE,
    children: title
  })]
}) : null;
var _default = exports.default = MenuTitle;
//# sourceMappingURL=MenuTitle.js.map