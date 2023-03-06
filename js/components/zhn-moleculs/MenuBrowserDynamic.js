"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _useBool2 = _interopRequireDefault(require("../hooks/useBool"));
var _useListen = _interopRequireDefault(require("../hooks/useListen"));
var _Browser = _interopRequireDefault(require("../zhn-atoms/Browser"));
var _CaptionRow = _interopRequireDefault(require("../zhn-atoms/CaptionRow"));
var _ScrollPane = _interopRequireDefault(require("../zhn-atoms/ScrollPane"));
var _MenuPart = _interopRequireDefault(require("./MenuPart"));
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var S_BROWSER = {
    paddingRight: 0
  },
  S_SCROLL_DIV = {
    overflowY: 'auto',
    height: '92%',
    //height: 'calc(100vh - 90px)',
    paddingRight: 10
  };
var MenuBrowserDynamic = function MenuBrowserDynamic(_ref) {
  var isInitShow = _ref.isInitShow,
    caption = _ref.caption,
    rowClass = _ref.rowClass,
    store = _ref.store,
    browserType = _ref.browserType,
    showAction = _ref.showAction,
    updateAction = _ref.updateAction,
    loadCompletedAction = _ref.loadCompletedAction,
    sourceMenuUrl = _ref.sourceMenuUrl,
    onLoadMenu = _ref.onLoadMenu,
    children = _ref.children;
  var _refIsLoaded = (0, _uiApi.useRef)(false),
    _refIsMounted = (0, _uiApi.useRef)(false),
    _useBool = (0, _useBool2["default"])(isInitShow),
    isShow = _useBool[0],
    _hShow = _useBool[1],
    _hHide = _useBool[2],
    _useState = (0, _uiApi.useState)([]),
    menuItems = _useState[0],
    setMenuItems = _useState[1];
  (0, _useListen["default"])(store, function (actionType, data) {
    if (actionType === showAction && data === browserType) {
      _hShow();
    } else if (actionType === loadCompletedAction && data.browserType === browserType) {
      (0, _uiApi.setRefValue)(_refIsLoaded, true);
      setMenuItems([].concat(data.menuItems));
    } else if (actionType === updateAction && data === browserType) {
      setMenuItems([].concat(store.getBrowserMenu(browserType)));
    }
  });
  (0, _uiApi.useEffect)(function () {
    (0, _uiApi.setRefValue)(_refIsMounted, true);
  }, []);

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    if ((0, _uiApi.getRefValue)(_refIsMounted) || !(0, _uiApi.getRefValue)(_refIsLoaded) && isShow) {
      (0, _uiApi.setRefValue)(_refIsMounted, false);
      onLoadMenu({
        browserType: browserType,
        caption: caption,
        sourceMenuUrl: sourceMenuUrl
      });
    }
  }, [isShow]);
  //onLoadMenu, browserType, caption, sourceMenuUrl
  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Browser["default"], {
    isShow: isShow,
    style: S_BROWSER,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionRow["default"], {
      caption: caption,
      onClose: _hHide
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ScrollPane["default"], {
      style: S_SCROLL_DIV,
      children: [menuItems.map(function (menuPart, index) {
        return /*#__PURE__*/(0, _react.createElement)(_MenuPart["default"], (0, _extends2["default"])({}, menuPart, {
          key: index,
          rowClass: rowClass
        }));
      }), children]
    })]
  });
};
var _default = MenuBrowserDynamic;
exports["default"] = _default;
//# sourceMappingURL=MenuBrowserDynamic.js.map