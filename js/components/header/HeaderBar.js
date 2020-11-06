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

var TITLE = "Library Watch v0.12.0";
var CL = {
  HEADER: "header",
  ICON: "header__icon-app",
  ABOUT: "header__bt-about",
  APP_LABEL: "header__app-label",
  LIBRARY: "header__bt-library"
};
var S = {
  ROOT_DIV: {
    position: 'relative',
    zIndex: 50
  },
  BT_ABOUT: {
    "float": 'right',
    marginRight: 20
  },
  SVG_INFO: {
    position: 'relative',
    top: -2,
    verticalAlign: 'middle',
    marginLeft: 8,
    marginRight: 8
  },
  BUTTON_SAVE: {
    marginLeft: 10
  },
  LABEL_LIMIT: {
    "float": 'right',
    paddingTop: 5
  }
};
var BROWSER_CONFIG = {
  LIBRARY: {
    browserType: _Type.BrowserType.LIBRARY,
    caption: 'Library',
    sourceMenuUrl: './data/github/source-menu.json',
    rowClass: 'menu-item'
  }
};

var HeaderBar = function HeaderBar(_ref) {
  var store = _ref.store;

  var _hClickLibrary = (0, _react.useCallback)(function () {
    _BrowserActions["default"].showBrowserDynamic(BROWSER_CONFIG.LIBRARY);
  }, []),
      _hClickWatch = (0, _react.useCallback)(function () {
    _BrowserActions["default"].showBrowser(_Type.BrowserType.WATCH_LIST);
  }, []);

  return /*#__PURE__*/React.createElement("div", {
    className: CL.HEADER,
    style: S.ROOT_DIV
  }, /*#__PURE__*/React.createElement(_LoadingProgress["default"], {
    store: store
  }), /*#__PURE__*/React.createElement(_IconAppLogo["default"], {
    className: CL.ICON,
    title: TITLE
  }), /*#__PURE__*/React.createElement(_AppLabel["default"], {
    className: CL.APP_LABEL,
    caption: TITLE
  }), /*#__PURE__*/React.createElement(_Comp["default"].FlatButton, {
    className: CL.LIBRARY,
    caption: "Library",
    title: "Click to show library browser",
    accessKey: "l",
    timeout: 0,
    onClick: _hClickLibrary
  }), /*#__PURE__*/React.createElement(_Comp["default"].FlatButton, {
    caption: "Watch",
    title: "Click to show watch browser",
    accessKey: "w",
    timeout: 0,
    onClick: _hClickWatch
  }), /*#__PURE__*/React.createElement(_Comp["default"].ButtonSave, {
    store: store,
    style: S.BUTTON_SAVE
  }), /*#__PURE__*/React.createElement(_Comp["default"].FlatButton, {
    className: CL.ABOUT,
    rootStyle: S.BT_ABOUT,
    title: "About web app Library Watch",
    accessKey: "a",
    timeout: 0,
    onClick: _ComponentActions["default"].showAbout
  }, /*#__PURE__*/React.createElement(_Comp["default"].SvgInfo, {
    style: S.SVG_INFO
  })), /*#__PURE__*/React.createElement(_LimitRemainingLabel["default"], {
    store: store,
    style: S.LABEL_LIMIT
  }));
};

var _default = HeaderBar;
exports["default"] = _default;
//# sourceMappingURL=HeaderBar.js.map