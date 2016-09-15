"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

    return BASE + "/questions?page=1&pagesize=50&order=desc&fromdate=" + fromdate + "&todate=" + todate + "&sort=" + sort + "&tagged=" + repo + "&site=stackoverflow";
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
    return true;
  }
};

exports.default = StackExchangeApi;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\api\StackExchangeApi.js.map