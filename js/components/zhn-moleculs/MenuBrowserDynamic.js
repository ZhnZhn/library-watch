"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _Browser = _interopRequireDefault(require("../zhn-atoms/Browser"));
var _CaptionRow = _interopRequireDefault(require("../zhn-atoms/CaptionRow"));
var _ScrollPane = _interopRequireDefault(require("../zhn-atoms/ScrollPane"));
var _MenuPart = _interopRequireDefault(require("./MenuPart"));
var _useBrowserMenu = _interopRequireDefault(require("./useBrowserMenu"));
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
const S_BROWSER = {
    paddingRight: 0
  },
  S_SCROLL_DIV = {
    overflowY: 'auto',
    height: '92%',
    //height: 'calc(100vh - 90px)',
    paddingRight: 10
  };
const MenuBrowserDynamic = _ref => {
  let {
    isInitShow,
    caption,
    rowClass,
    browserType,
    useMsBrowserDynamic,
    sourceMenuUrl,
    onLoadMenu,
    children
  } = _ref;
  const _refIsLoaded = (0, _uiApi.useRef)(false),
    _refIsMounted = (0, _uiApi.useRef)(false),
    [isShow, _hShow, _hHide] = (0, _useBool.default)(isInitShow),
    [menuItems, setMenuItems] = (0, _uiApi.useState)([]),
    _refFirstItem = (0, _useBrowserMenu.default)(isShow, menuItems);
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
        }
      }
    }
  });
  (0, _uiApi.useEffect)(() => {
    (0, _uiApi.setRefValue)(_refIsMounted, true);
  }, []);

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    if ((0, _uiApi.getRefValue)(_refIsMounted) || !(0, _uiApi.getRefValue)(_refIsLoaded) && isShow) {
      (0, _uiApi.setRefValue)(_refIsMounted, false);
      onLoadMenu({
        browserType,
        caption,
        sourceMenuUrl
      });
    }
  }, [isShow]);
  //onLoadMenu, browserType, caption, sourceMenuUrl
  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Browser.default, {
    isShow: isShow,
    style: S_BROWSER,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionRow.default, {
      caption: caption,
      onClose: _hHide
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ScrollPane.default, {
      style: S_SCROLL_DIV,
      children: [menuItems.map((menuPart, index) => /*#__PURE__*/(0, _react.createElement)(_MenuPart.default, {
        ...menuPart,
        key: index,
        rowClass: rowClass,
        refFirstItem: index === 0 ? _refFirstItem : void 0
      })), children]
    })]
  });
};
var _default = exports.default = MenuBrowserDynamic;
//# sourceMappingURL=MenuBrowserDynamic.js.map