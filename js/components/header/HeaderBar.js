"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _BrowserActions = _interopRequireDefault(require("../../flux/actions/BrowserActions"));

var _ComponentActions = _interopRequireDefault(require("../../flux/actions/ComponentActions"));

var _Type = require("../../constants/Type");

var _Comp = _interopRequireDefault(require("../Comp"));

var _LoadingProgress = _interopRequireDefault(require("./LoadingProgress"));

var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));

var _AppLabel = _interopRequireDefault(require("./AppLabel"));

var _LimitRemainingLabel = _interopRequireDefault(require("./LimitRemainingLabel"));

var _jsxRuntime = require("react/jsx-runtime");

var TITLE = "Library Watch v0.12.0",
    CL_HEADER = "header",
    CL_ICON = "header__icon-app",
    CL_ABOUT = "header__bt-about",
    CL_APP_LABEL = "header__app-label",
    CL_LIBRARY = "header__bt-library",
    S_ROOT_DIV = {
  position: 'relative',
  zIndex: 50
},
    S_BT_ABOUT = {
  "float": 'right',
  marginRight: 20
},
    S_SVG_INFO = {
  position: 'relative',
  top: -2,
  verticalAlign: 'middle',
  marginLeft: 8,
  marginRight: 8
},
    S_BUTTON_SAVE = {
  marginLeft: 10
},
    S_LABEL_LIMIT = {
  "float": 'right',
  paddingTop: 5
},
    BROWSER_CONFIG_LIBRARY = {
  browserType: _Type.BrowserType.LIBRARY,
  caption: 'Library',
  sourceMenuUrl: './data/github/source-menu.json',
  rowClass: 'menu-item'
};

var HeaderBar = function HeaderBar(_ref) {
  var store = _ref.store;

  var _hClickLibrary = (0, _react.useCallback)(function () {
    _BrowserActions["default"].showBrowserDynamic(BROWSER_CONFIG_LIBRARY);
  }, []),
      _hClickWatch = (0, _react.useCallback)(function () {
    _BrowserActions["default"].showBrowser(_Type.BrowserType.WATCH_LIST);
  }, []);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_HEADER,
    style: S_ROOT_DIV,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingProgress["default"], {
      store: store
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconAppLogo["default"], {
      className: CL_ICON,
      title: TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppLabel["default"], {
      className: CL_APP_LABEL,
      caption: TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].FlatButton, {
      className: CL_LIBRARY,
      caption: "Library",
      title: "Click to show library browser",
      accessKey: "l",
      timeout: 0,
      onClick: _hClickLibrary
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].FlatButton, {
      caption: "Watch",
      title: "Click to show watch browser",
      accessKey: "w",
      timeout: 0,
      onClick: _hClickWatch
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ButtonSave, {
      store: store,
      style: S_BUTTON_SAVE
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].FlatButton, {
      className: CL_ABOUT,
      style: S_BT_ABOUT,
      title: "About web app Library Watch",
      accessKey: "a",
      timeout: 0,
      onClick: _ComponentActions["default"].showAbout,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].SvgInfo, {
        style: S_SVG_INFO
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LimitRemainingLabel["default"], {
      store: store,
      style: S_LABEL_LIMIT
    })]
  });
};

var _default = HeaderBar;
exports["default"] = _default;
//# sourceMappingURL=HeaderBar.js.map