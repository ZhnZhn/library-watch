"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _ravenJs = _interopRequireDefault(require("raven-js"));

var _AppLibraryWatch = _interopRequireDefault(require("./components/AppLibraryWatch"));

/* eslint-disable no-undef */
if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable no-undef */
  console.log('Development Mode:');

  window.onerror = function (message, source, lineno, colno, error) {
    console.log('window.onerror:');
    console.log(message);
    return false;
  };
}

if (process.env.NODE_ENV === 'production') {
  _ravenJs["default"].config('https://59cd430997004591af3320a9875237d7@sentry.io/99461').install();
}

var _fnRenderApp = function _fnRenderApp() {
  var preloader = document.getElementById('preloader');

  if (preloader) {
    document.body.removeChild(document.getElementById('preloader'));
  }

  (0, _reactDom.render)(_react["default"].createElement(_AppLibraryWatch["default"], null), document.getElementById("app"));
};

var _fnLoading = function _fnLoading() {
  var preloader = window.preloader;

  if (preloader) {
    if (!preloader.isErrCss && !preloader.isErrScript) {
      _fnRenderApp();
    } else {
      preloader.stop();
    }
  } else {
    _fnRenderApp();
  }
};

_fnLoading();
//# sourceMappingURL=index.js.map