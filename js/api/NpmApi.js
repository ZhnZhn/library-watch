'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StringUtil = require('../utils/StringUtil');

var _StringUtil2 = _interopRequireDefault(_StringUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE = 'https://api.npmjs.org';
var REQUEST_PACKAGE = 'Request Package';

//https://api.npmjs.org/downloads/range/last-month

var _rRequestTypeToUrl = {
  NPM_RECENT_VERSION: function NPM_RECENT_VERSION(option) {
    return 'https://registry.npmjs.org/-/package/' + option.repo + '/dist-tags';
  },

  NPM_DOWNLOADS_RECENT_MONTH: function NPM_DOWNLOADS_RECENT_MONTH(option) {
    return BASE + '/downloads/range/last-month/' + option.repo;
  },
  NPM_DOWNLOADS: function NPM_DOWNLOADS(option) {
    var fromDate = option.fromDate;
    var toDate = option.toDate;
    var repo = option.repo;

    return BASE + '/downloads/range/' + fromDate + ':' + toDate + '/' + repo;
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
    var error = json.error;

    if (error) {
      throw {
        errCaption: REQUEST_PACKAGE,
        message: _StringUtil2.default.setFirstToUpperCase(error)
      };
    }
    return true;
  }
};

exports.default = NpmApi;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\api\NpmApi.js.map