'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var BASE = 'https://api.npmjs.org';
var REQUEST_PACKAGE = 'Request Package';

var _fnFirstToUpperCase = function _fnFirstToUpperCase(msg) {
  return msg.charAt(0).toUpperCase() + msg.substring(1);
};

var _rRequestTypeToUrl = {
  NPM_RECENT_VERSION: function NPM_RECENT_VERSION(option) {
    return 'https://registry.npmjs.org/-/package/' + option.repo + '/dist-tags';
  },

  NPM_RECENT_MONTH: function NPM_RECENT_MONTH(option) {
    return BASE + '/downloads/point/last-month/' + option.repo;
  }
};

var NpmApi = {
  getRequestUrl: function getRequestUrl(option) {
    var fnFactory = _rRequestTypeToUrl[option.requestType];
    return fnFactory(option);
  },
  getOnCheckResponse: function getOnCheckResponse() {
    return this.checkResponse;
  },
  checkResponse: function checkResponse() {
    var json = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var option = arguments[1];
    var _json$error = json.error;
    var msg = _json$error === undefined ? 'Empty error description.' : _json$error;

    if (msg) {
      throw {
        errCaption: REQUEST_PACKAGE,
        message: _fnFirstToUpperCase(msg)
      };
    }
    return true;
  }
};

exports.default = NpmApi;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\api\NpmApi.js.map