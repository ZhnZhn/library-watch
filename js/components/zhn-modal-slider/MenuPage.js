"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _styleFn = require("../styleFn");
var _useFocus = require("../hooks/useFocus");
var _useCanBeHidden = _interopRequireDefault(require("./useCanBeHidden"));
var _FocusTrap = _interopRequireDefault(require("../zhn-moleculs/FocusTrap"));
var _MenuTitle = _interopRequireDefault(require("./MenuTitle"));
var _MenuItemList = _interopRequireDefault(require("./MenuItemList"));
var _jsxRuntime = require("react/jsx-runtime");
/*
const _fFocus = ref => () => {
  focusRefInput(ref)
};
*/const MenuPage = _ref => {
  let {
    isShow,
    items = [],
    style,
    isVisible,
    canBeHidden,
    title,
    titleCl,
    itemCl,
    pageCurrent,
    pageNumber,
    onClose,
    children,
    onNextPage,
    onPrevPage
  } = _ref;
  const _hClickTitle = (0, _uiApi.useCallback)(() => {
      onPrevPage(pageNumber);
    }, [onPrevPage, pageNumber]),
    [_refFirstItem, _refLastItem, _getRefItem] = (0, _useFocus.useItemsFocusTrap)(items, isVisible, !title),
    _style = (0, _useCanBeHidden.default)(canBeHidden);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      ...style,
      ...(0, _styleFn.crVisibilityHidden)(isVisible),
      ..._style
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FocusTrap.default, {
      refFirst: _refFirstItem,
      refLast: _refLastItem,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuTitle.default, {
        refEl: _refFirstItem,
        titleCl: titleCl,
        title: title,
        onClick: _hClickTitle
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItemList.default, {
        getRefItem: _getRefItem,
        items: items,
        itemCl: itemCl || titleCl,
        pageNumber: pageNumber,
        onNextPage: onNextPage,
        onClose: onClose
      }), children]
    })
  });
};

/*
MenuPage.propTypes = {
  isShow: PropTypes.bool,
  isVisible: PropTypes.bool,
  canBeHidden: PropTypes.bool,
  title: PropTypes.string,
  pageNumber: PropTypes.number,
  items: PropTypes.arrayOf(
     PropTypes.shapeOf({
        name: PropTypes.string,
        type: PropTypes.string,
        id: PropTypes.string,
        onClick: PropTypes.func
     })
  ),
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = exports.default = MenuPage;
//# sourceMappingURL=MenuPage.js.map