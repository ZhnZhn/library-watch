"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _MenuAriaItem = _interopRequireDefault(require("./MenuAriaItem"));

var _jsxRuntime = require("react/jsx-runtime");

var SUB_MENU = 'sub';
var S_ITEM = {
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

var _fClick = function _fClick(_ref2) {
  var isClose = _ref2.isClose,
      onClick = _ref2.onClick,
      onClose = _ref2.onClose;
  return typeof onClick === 'function' ? isClose ? function () {
    onClick();
    onClose();
  } : onClick : void 0;
};

var NextPageArrow = function NextPageArrow(_ref3) {
  var type = _ref3.type;
  if (type !== SUB_MENU) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S_NEXT_PAGE,
    children: '>'
  });
};

var _renderMenuItems = function _renderMenuItems(props, ref) {
  var items = props.items,
      itemCl = props.itemCl,
      pageNumber = props.pageNumber,
      onNextPage = props.onNextPage,
      onClose = props.onClose;
  return items.map(function (item, index) {
    var cn = item.cn,
        name = item.name,
        type = item.type,
        id = item.id,
        isClose = item.isClose,
        onClick = item.onClick,
        _onClick = type === SUB_MENU ? onNextPage.bind(null, id, name, pageNumber) : _fClick({
      isClose: isClose,
      onClick: onClick,
      onClose: onClose
    }),
        _ref = index === 0 ? ref : void 0;

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuAriaItem["default"], {
      ref: _ref,
      className: cn || itemCl,
      style: S_ITEM,
      onClick: _onClick,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: name
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(NextPageArrow, {
        type: type
      })]
    }, name);
  });
};

var MenuItemList = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: _renderMenuItems(props, ref)
  });
});
/*
MenuAriaItem.propTypes = {
  items: PropTypes.array,
  itemCl: PropTypes.string
  pageNumber: PropTypes.number,
  onNextPage: PropTypes.func,
  onClose: PropTypes.func
}
*/

var _default = MenuItemList;
exports["default"] = _default;
//# sourceMappingURL=MenuItemList.js.map