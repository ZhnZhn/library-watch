"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _RouterApi = _interopRequireDefault(require("./RouterApi"));

var RestApi = {
  getApi: function getApi(option) {
    var requestType = option.requestType,
        id = requestType.split('_')[0];
    return _RouterApi["default"][id];
  },
  getRequestUrl: function getRequestUrl(option) {
    var api = RestApi.getApi(option);
    return api.getRequestUrl(option);
  },
  getOnCheckResponse: function getOnCheckResponse(option) {
    var api = RestApi.getApi(option);
    return api.getOnCheckResponse();
  },
  crKey: function crKey(option) {
    var api = RestApi.getApi(option);
    return api.crKey(option);
  },
  checkResponse: function checkResponse() {
    return true;
  }
};
var _default = RestApi;
exports["default"] = _default;
//# sourceMappingURL=RestApi.js.map