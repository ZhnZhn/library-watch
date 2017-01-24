'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ravenJs = require('raven-js');

var _ravenJs2 = _interopRequireDefault(_ravenJs);

var _AppLibraryWatch = require('./components/AppLibraryWatch');

var _AppLibraryWatch2 = _interopRequireDefault(_AppLibraryWatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  _ravenJs2.default.config('https://59cd430997004591af3320a9875237d7@sentry.io/99461').install();
}

var _fnRenderApp = function _fnRenderApp() {
  document.body.removeChild(document.getElementById('preloader'));
  (0, _reactDom.render)(_react2.default.createElement(_AppLibraryWatch2.default, null), document.getElementById("app"));
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
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\index.js.map