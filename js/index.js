"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _client = require("react-dom/client");
var _ravenJs = _interopRequireDefault(require("raven-js"));
var _AppLibraryWatch = _interopRequireDefault(require("./components/AppLibraryWatch"));
var _jsxRuntime = require("react/jsx-runtime");
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
var _renderApp = function _renderApp() {
  var preloader = document.getElementById('preloader');
  if (preloader) {
    document.body.removeChild(document.getElementById('preloader'));
  }
  (0, _client.createRoot)(document.getElementById("app")).render( /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppLibraryWatch["default"], {}));
};
var _loadingApp = function _loadingApp() {
  var preloader = window.preloader;
  if (preloader) {
    if (!preloader.isErrCss && !preloader.isErrScript) {
      _renderApp();
    } else {
      preloader.stop();
    }
  } else {
    _renderApp();
  }
};
_loadingApp();
//# sourceMappingURL=index.js.map