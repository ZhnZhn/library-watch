"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _styleFn = require("../styleFn");
var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));
var _AtomCounter = _interopRequireDefault(require("../zhn/AtomCounter"));
var _OpenClose = _interopRequireDefault(require("../zhn/OpenClose2"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_NOT_SELECTED = (0, _styleFn.crClNotSelected)(),
  CL_ROW_ITEM = "row__topic",
  FILL_OPEN = "#1b2836",
  FILL_CLOSE = "transparent",
  S_CAPTION_ROW = {
    paddingLeft: 6
  };
const MenuItem = _ref => {
  let {
    item,
    className
  } = _ref;
  const _hKeyDown = (0, _useKeyEnter.default)(item.onClick);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "menuitem",
    tabIndex: 0,
    className: className,
    onClick: item.onClick,
    onKeyDown: _hKeyDown,
    children: [item.title, /*#__PURE__*/(0, _jsxRuntime.jsx)(_AtomCounter.default, {
      atom: item.atomCounter,
      onOpen: item.onOpen,
      onClose: item.onClose
    })]
  });
};
const MenuPart = _ref2 => {
  let {
    refFirstItem,
    rowClass,
    caption,
    items,
    isInitClose
  } = _ref2;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OpenClose.default, {
    refItem: refFirstItem,
    styleCaptionRow: S_CAPTION_ROW,
    fillOpen: FILL_OPEN,
    fillClose: FILL_CLOSE,
    caption: caption,
    isClose: isInitClose,
    children: (0, _uiApi.safeMap)(items, (item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuItem, {
      className: `${rowClass || CL_ROW_ITEM} ${CL_NOT_SELECTED}`,
      item: item
    }, item.id || index))
  });
};

/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
*/
var _default = exports.default = MenuPart;
//# sourceMappingURL=MenuPart.js.map