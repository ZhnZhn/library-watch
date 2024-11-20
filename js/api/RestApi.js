"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _RouterApi = _interopRequireDefault(require("./RouterApi"));
const RestApi = {
  getApi: option => _RouterApi.default[option.requestType.split('_')[0]],
  getRequestUrl: option => RestApi.getApi(option).getRequestUrl(option),
  getOnCheckResponse: option => RestApi.getApi(option).checkResponse,
  crKey: option => RestApi.getApi(option).crKey(option)
};
var _default = exports.default = RestApi;
//# sourceMappingURL=RestApi.js.map