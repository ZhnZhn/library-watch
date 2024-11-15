"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _CrateApi = _interopRequireDefault(require("./CrateApi"));
var _GitHubApi = _interopRequireDefault(require("./GitHubApi"));
var _NpmApi = _interopRequireDefault(require("./NpmApi"));
var _StackExchangeApi = _interopRequireDefault(require("./StackExchangeApi"));
var _StatCounterApi = _interopRequireDefault(require("./StatCounterApi"));
const RouterApi = {
  CR: _CrateApi.default,
  GH: _GitHubApi.default,
  NPM: _NpmApi.default,
  SE: _StackExchangeApi.default,
  ST: _StatCounterApi.default
};
var _default = exports.default = RouterApi;
//# sourceMappingURL=RouterApi.js.map