"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBrowser = _interopRequireDefault(require("../hooks/useBrowser"));
var _useRecentFocusedElement = _interopRequireDefault(require("../hooks/useRecentFocusedElement"));
var _Browser = _interopRequireDefault(require("../zhn/Browser"));
var _CaptionRow = _interopRequireDefault(require("../zhn/CaptionRow"));
var _ScrollPane = _interopRequireDefault(require("../zhn/ScrollPane"));
var _MenuPart = _interopRequireDefault(require("./MenuPart"));
var _jsxRuntime = require("react/jsx-runtime");
const S_SCROLL_DIV = {
  overflowY: 'auto',
  height: '92%',
  //height: 'calc(100vh - 90px)',
  paddingRight: 10
};
const BrowserMenu = _ref => {
  let {
    menuItems,
    rowClass,
    refFirstItem
  } = _ref;
  return (0, _uiApi.safeMap)(menuItems, (menuPart, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuPart.default, {
    refFirstItem: index === 0 ? refFirstItem : void 0,
    isInitClose: menuPart.isInitClose,
    caption: menuPart.caption,
    items: menuPart.items,
    rowClass: rowClass
  }, index));
};
const MenuBrowserDynamic = _ref2 => {
  let {
    isShowInitial,
    caption,
    rowClass,
    browserType,
    useMsBrowserDynamic,
    onLoadMenu,
    children
  } = _ref2;
  const _refIsLoaded = (0, _uiApi.useRef)(false),
    [menuItems, setMenuItems, isShow, _hShow, _hHide, _hKeyDown, _refFirstItem] = (0, _useBrowser.default)(isShowInitial),
    [_hFocusElement, _focusPrevElement] = (0, _useRecentFocusedElement.default)();
  useMsBrowserDynamic(msBrowserDynamic => {
    if (msBrowserDynamic) {
      if (msBrowserDynamic.browserType === browserType) {
        const {
          menuItems
        } = msBrowserDynamic;
        if (menuItems) {
          (0, _uiApi.setRefValue)(_refIsLoaded, true);
          setMenuItems([...menuItems]);
        } else {
          _hShow();
          _focusPrevElement();
        }
      }
    }
  });

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    if (isShow && !(0, _uiApi.getRefValue)(_refIsLoaded)) {
      onLoadMenu();
    }
  }, [isShow]);
  //onLoadMenu
  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Browser.default, {
    isShow: isShow,
    onKeyDown: _hKeyDown,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionRow.default, {
      caption: caption,
      onClose: _hHide
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ScrollPane.default, {
      style: S_SCROLL_DIV,
      onFocusIn: _hFocusElement,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(BrowserMenu, {
        menuItems: menuItems,
        rowClass: rowClass,
        refFirstItem: _refFirstItem
      }), children]
    })]
  });
};
var _default = exports.default = MenuBrowserDynamic;
//# sourceMappingURL=MenuBrowserDynamic.js.map