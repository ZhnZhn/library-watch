'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ravenJs = require('raven-js');

var _ravenJs2 = _interopRequireDefault(_ravenJs);

var _AppGitHub = require('./components/AppGitHub');

var _AppGitHub2 = _interopRequireDefault(_AppGitHub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
window.onerror = function(message, source, lineno, colno, error) {
   console.log(message);
   return false;
}
*/

_ravenJs2.default.config('https://59cd430997004591af3320a9875237d7@sentry.io/99461').install();

var _fnRemoveSpinner = function _fnRemoveSpinner() {
   document.body.removeChild(document.getElementById('spinner'));
};

(0, _reactDom.render)(_react2.default.createElement(_AppGitHub2.default, null), document.getElementById("app"), _fnRemoveSpinner);
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\index.js.map