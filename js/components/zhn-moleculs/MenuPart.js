"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));

var _MenuBadge = _interopRequireDefault(require("../zhn-atoms/MenuBadge"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose2"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_NOT_SELECTED = 'not-selected',
    CL_ROW_ITEM = "row__topic " + CL_NOT_SELECTED,
    FILL_OPEN = '#1b2836',
    FILL_CLOSE = 'transparent',
    S_CAPTION_ROW = {
  paddingLeft: 6
};

var MenuItem = function MenuItem(_ref) {
  var title = _ref.title,
      className = _ref.className,
      menuBadge = _ref.menuBadge,
      onClick = _ref.onClick;

  var _hKeyDown = (0, _useKeyEnter["default"])(onClick);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "menuitem",
    tabIndex: 0,
    className: className,
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: [title, menuBadge]
  });
};

var _renderMenuItems = function _renderMenuItems(rowClass, items) {
  if (items === void 0) {
    items = [];
  }

  return (items || []).map(function (item, index) {
    var counter = item.counter,
        title = item.title,
        onClick = item.onClick,
        _className = rowClass ? rowClass + ' ' + CL_NOT_SELECTED : CL_ROW_ITEM,
        menuBadge = counter !== 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuBadge["default"], {
      counter: counter,
      isOpen: item.isOpen,
      onBadgeOpen: item.onBadgeOpen,
      onBadgeClose: item.onBadgeClose
    }) : null;

    return /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuItem, {
      className: _className,
      title: title,
      menuBadge: menuBadge,
      onClick: onClick
    }, index);
  });
};

var MenuPart = function MenuPart(_ref2) {
  var rowClass = _ref2.rowClass,
      caption = _ref2.caption,
      items = _ref2.items,
      isInitClose = _ref2.isInitClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OpenClose["default"], {
    styleCaptionRow: S_CAPTION_ROW,
    fillOpen: FILL_OPEN,
    fillClose: FILL_CLOSE,
    caption: caption,
    isClose: isInitClose,
    children: _renderMenuItems(rowClass, items)
  });
};
/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
*/


var _default = MenuPart;
exports["default"] = _default;
//# sourceMappingURL=MenuPart.js.map