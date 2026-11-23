"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
var _a11yFn = require("../a11yFn");
var _Svg = require("../zhn/svg/Svg");
var _InputSwitch = _interopRequireDefault(require("../zhn/InputSwitch"));
var _MenuAriaItem = _interopRequireDefault(require("./MenuAriaItem"));
var _jsxRuntime = require("react/jsx-runtime");
const SUB_MENU = 'sub',
  S_INPUT_SWITCH = {
    height: 38,
    padding: '9px 12px 0 0',
    alignItems: 'baseline',
    fontSize: '16px'
  },
  S_ITEM = {
    position: 'relative'
  },
  S_NEXT_PAGE = {
    display: 'inline-block',
    position: 'absolute',
    top: '8px',
    right: '6px',
    verticalAlign: 'text-bottom'
  };
const _fClick = ({
  isClose,
  onClick,
  onClose
}) => (0, _isTypeFn.isFn)(onClick) ? isClose ? () => {
  onClick();
  onClose();
} : onClick : void 0;
const NextPageArrow = ({
  type
}) => type === SUB_MENU ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Svg.SvgArrowRight, {
  style: S_NEXT_PAGE
}) : null;
const MenuItemList = ({
  getRefItem,
  items,
  pageNumber,
  onNextPage,
  onClose
}) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
  children: items.map((item, index) => {
    const {
        name,
        type,
        id,
        isInitial,
        isClose,
        onClick
      } = item,
      _onClick = type === SUB_MENU ? (0, _uiApi.bindTo)(onNextPage, id, name, pageNumber) : _fClick({
        isClose,
        onClick,
        onClose
      });
    return (0, _isTypeFn.isBool)(isInitial) ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      ...(0, _a11yFn.crMenuItemRole)("-1"),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSwitch.default, {
        refEl: getRefItem(index),
        style: S_INPUT_SWITCH,
        initialValue: isInitial,
        caption: name,
        onToggle: _onClick
      })
    }, name) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuAriaItem.default, {
      refEl: getRefItem(index),
      style: S_ITEM,
      onClick: _onClick,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: name
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(NextPageArrow, {
        type: type
      })]
    }, name);
  })
});
var _default = exports.default = MenuItemList;
//# sourceMappingURL=MenuItemList.js.map