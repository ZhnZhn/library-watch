"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _RouterApi = _interopRequireDefault(require("./RouterApi"));
const RestApi = {
  getApi(option) {
    const {
        requestType
      } = option,
      id = requestType.split('_')[0];
    return _RouterApi.default[id];
  },
  getRequestUrl(option) {
    const api = RestApi.getApi(option);
    return api.getRequestUrl(option);
  },
  getOnCheckResponse(option) {
    const api = RestApi.getApi(option);
    return api.checkResponse;
  },
  crKey(option) {
    const api = RestApi.getApi(option);
    return api.crKey(option);
  },
  checkResponse() {
    return true;
  }
};
var _default = exports.default = RestApi;
//# sourceMappingURL=RestApi.js.map