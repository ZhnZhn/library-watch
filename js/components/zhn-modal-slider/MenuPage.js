"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _MenuTitle = _interopRequireDefault(require("./MenuTitle"));
var _MenuItemList = _interopRequireDefault(require("./MenuItemList"));
var _jsxRuntime = require("react/jsx-runtime");
const _fFocus = ref => () => {
  (0, _uiApi.focusRefInput)(ref);
};
const MenuPage = _ref => {
  let {
    isShow,
    items = [],
    style,
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
  const _refTitle = (0, _uiApi.useRef)(),
    _refFirst = (0, _uiApi.useRef)(),
    _hClickTitle = (0, _uiApi.useCallback)(() => {
      onPrevPage(pageNumber);
    }, [onPrevPage, pageNumber]),
    _isFocus = pageCurrent === pageNumber && isShow;
  (0, _uiApi.useEffect)(() => {
    if (_isFocus) {
      if ((0, _uiApi.getRefValue)(_refTitle)) {
        setTimeout(_fFocus(_refTitle), 1000);
      } else if ((0, _uiApi.getRefValue)(_refFirst)) {
        setTimeout(_fFocus(_refFirst), 1000);
      }
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuTitle.default, {
      refEl: _refTitle,
      titleCl: titleCl,
      title: title,
      onClick: _hClickTitle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItemList.default, {
      refEl: _refFirst,
      items: items,
      itemCl: itemCl || titleCl,
      pageNumber: pageNumber,
      onNextPage: onNextPage,
      onClose: onClose
    }), children]
  });
};

/*
MenuPage.propTypes = {
  isShow: PropTypes.bool,
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