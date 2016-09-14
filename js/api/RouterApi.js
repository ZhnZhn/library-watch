'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GitHubApi = require('./GitHubApi');

var _GitHubApi2 = _interopRequireDefault(_GitHubApi);

var _NpmApi = require('./NpmApi');

var _NpmApi2 = _interopRequireDefault(_NpmApi);

var _StackExchangeApi = require('./StackExchangeApi');

var _StackExchangeApi2 = _interopRequireDefault(_StackExchangeApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouterApi = {
  GH: _GitHubApi2.default,
  NPM: _NpmApi2.default,
  SE: _StackExchangeApi2.default
};

exports.default = RouterApi;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\api\RouterApi.js.map