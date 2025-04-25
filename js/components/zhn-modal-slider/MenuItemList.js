"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
var _MenuAriaItem = _interopRequireDefault(require("./MenuAriaItem"));
var _jsxRuntime = require("react/jsx-runtime");
const SUB_MENU = 'sub',
  S_ITEM = {
    position: 'relative'
  },
  S_NEXT_PAGE = {
    position: 'absolute',
    display: 'inline-block',
    top: 0,
    right: 4,
    color: 'inherit',
    padding: '1px 16px 1px 0px',
    fontWeight: 'bold'
  };
const _fClick = _ref => {
  let {
    isClose,
    onClick,
    onClose
  } = _ref;
  return (0, _isTypeFn.isFn)(onClick) ? isClose ? () => {
    onClick();
    onClose();
  } : onClick : void 0;
};
const NextPageArrow = _ref2 => {
  let {
    type
  } = _ref2;
  return type === SUB_MENU ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S_NEXT_PAGE,
    children: '>'
  }) : null;
};
const MenuItemList = _ref3 => {
  let {
    refEl,
    items,
    itemCl,
    pageNumber,
    onNextPage,
    onClose
  } = _ref3;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: items.map((item, index) => {
      const {
          cn,
          name,
          type,
          id,
          isClose,
          onClick
        } = item,
        _onClick = type === SUB_MENU ? (0, _uiApi.bindTo)(onNextPage, id, name, pageNumber) : _fClick({
          isClose,
          onClick,
          onClose
        }),
        _refEl = index === 0 ? refEl : void 0;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuAriaItem.default, {
        refEl: _refEl,
        className: cn || itemCl,
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
};
var _default = exports.default = MenuItemList;
//# sourceMappingURL=MenuItemList.js.map