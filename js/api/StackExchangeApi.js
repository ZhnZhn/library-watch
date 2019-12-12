"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _StringUtil = _interopRequireDefault(require("../utils/StringUtil"));

var BASE = "https://api.stackexchange.com/2.2"; // /questions/{ids}/linked Get the questions that link to the questions identified by a set of ids.
// /questions/{ids}/related Get the questions that are related to the questions identified by a set of ids.

var _rRequestTypeToUrl = {
  SE_QUESTIONS: function SE_QUESTIONS(_ref) {
    var repo = _ref.repo,
        _ref$sort = _ref.sort,
        sort = _ref$sort === void 0 ? 'week' : _ref$sort,
        fromdate = _ref.fromdate,
        todate = _ref.todate;
    return BASE + "/questions?page=1&pagesize=50&order=desc&fromdate=" + fromdate + "&todate=" + todate + "&sort=" + sort + "&tagged=" + repo + "&site=stackoverflow";
  },
  SE_SEARCH_QUESTIONS: function SE_SEARCH_QUESTIONS(_ref2) {
    var _ref2$repo = _ref2.repo,
        repo = _ref2$repo === void 0 ? 'css' : _ref2$repo,
        _ref2$intitle = _ref2.intitle,
        intitle = _ref2$intitle === void 0 ? '' : _ref2$intitle,
        _ref2$sort = _ref2.sort,
        sort = _ref2$sort === void 0 ? 'activity' : _ref2$sort,
        fromdate = _ref2.fromdate,
        todate = _ref2.todate;

    if (!repo && !intitle) {
      repo = 'css';
    }

    return BASE + "/search?page=1&pagesize=50&order=desc&fromdate=" + fromdate + "&todate=" + todate + "&sort=" + sort + "&tagged=" + repo + "&intitle=" + intitle + "&site=stackoverflow";
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
  crKey: function crKey(_ref3) {
    var repo = _ref3.repo,
        requestType = _ref3.requestType;
    return repo + "_" + requestType;
  },
  checkResponse: function checkResponse(json, option) {
    if (json === void 0) {
      json = {};
    }

    var _json = json,
        error_message = _json.error_message,
        _json$error_name = _json.error_name,
        error_name = _json$error_name === void 0 ? '' : _json$error_name;

    if (error_message) {
      throw {
        errCaption: _StringUtil["default"].setFirstToUpperCase(error_name.replace('_', ' ')),
        message: _StringUtil["default"].setFirstToUpperCase(error_message)
      };
    }

    return true;
  }
};
var _default = StackExchangeApi;
exports["default"] = _default;
//# sourceMappingURL=StackExchangeApi.js.map