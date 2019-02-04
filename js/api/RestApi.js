'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RouterApi = require('./RouterApi');

var _RouterApi2 = _interopRequireDefault(_RouterApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RestApi = {
  getApi: function getApi(option) {
    var requestType = option.requestType,
        id = requestType.split('_')[0];

    return _RouterApi2.default[id];
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

exports.default = RestApi;
//# sourceMappingURL=RestApi.js.map