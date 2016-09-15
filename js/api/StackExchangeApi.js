'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StringUtil = require('../utils/StringUtil');

var _StringUtil2 = _interopRequireDefault(_StringUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE = "https://api.stackexchange.com/2.2";

// /questions/{ids}/linked Get the questions that link to the questions identified by a set of ids.
// /questions/{ids}/related Get the questions that are related to the questions identified by a set of ids.

var _rRequestTypeToUrl = {
  SE_QUESTIONS: function SE_QUESTIONS(_ref) {
    var repo = _ref.repo;
    var _ref$sort = _ref.sort;
    var sort = _ref$sort === undefined ? 'week' : _ref$sort;
    var fromdate = _ref.fromdate;
    var todate = _ref.todate;

    return BASE + '/questions?page=1&pagesize=50&order=desc&fromdate=' + fromdate + '&todate=' + todate + '&sort=' + sort + '&tagged=' + repo + '&site=stackoverflow';
  },
  SE_SEARCH_QUESTIONS: function SE_SEARCH_QUESTIONS(_ref2) {
    var _ref2$repo = _ref2.repo;
    var repo = _ref2$repo === undefined ? 'css' : _ref2$repo;
    var _ref2$intitle = _ref2.intitle;
    var intitle = _ref2$intitle === undefined ? '' : _ref2$intitle;
    var _ref2$sort = _ref2.sort;
    var sort = _ref2$sort === undefined ? 'activity' : _ref2$sort;
    var fromdate = _ref2.fromdate;
    var todate = _ref2.todate;

    if (!repo && !intitle) {
      repo = 'css';
    }
    return BASE + '/search?page=1&pagesize=50&order=desc&fromdate=' + fromdate + '&todate=' + todate + '&sort=' + sort + '&tagged=' + repo + '&intitle=' + intitle + '&site=stackoverflow';
  }
};

var StackExchangeApi = {
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
    var error_message = json.error_message;
    var _json$error_name = json.error_name;
    var error_name = _json$error_name === undefined ? '' : _json$error_name;

    if (error_message) {
      throw {
        errCaption: _StringUtil2.default.setFirstToUpperCase(error_name.replace('_', ' ')),
        message: _StringUtil2.default.setFirstToUpperCase(error_message)
      };
    }
    return true;
  }
};

exports.default = StackExchangeApi;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\api\StackExchangeApi.js.map