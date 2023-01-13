"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _StringUtil = require("../utils/StringUtil");
var _rRequestTypeToUrl2;
var BASE_URL = "https://api.stackexchange.com/2.2",
  DF_REQUEST_TYPE = 'SE_QUESTIONS';

// /questions/{ids}/linked Get the questions that link to the questions identified by a set of ids.
// /questions/{ids}/related Get the questions that are related to the questions identified by a set of ids.

var _rRequestTypeToUrl = (_rRequestTypeToUrl2 = {}, _rRequestTypeToUrl2[DF_REQUEST_TYPE] = function (_ref) {
  var repo = _ref.repo,
    _ref$sort = _ref.sort,
    sort = _ref$sort === void 0 ? 'week' : _ref$sort,
    fromdate = _ref.fromdate,
    todate = _ref.todate;
  return BASE_URL + "/questions?page=1&pagesize=50&order=desc&fromdate=" + fromdate + "&todate=" + todate + "&sort=" + sort + "&tagged=" + (repo || 'css') + "&site=stackoverflow";
}, _rRequestTypeToUrl2.SE_SEARCH_QUESTIONS = function SE_SEARCH_QUESTIONS(_ref2) {
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
  return BASE_URL + "/search?page=1&pagesize=50&order=desc&fromdate=" + fromdate + "&todate=" + todate + "&sort=" + sort + "&tagged=" + repo + "&intitle=" + intitle + "&site=stackoverflow";
}, _rRequestTypeToUrl2);
var StackExchangeApi = {
  getRequestUrl: function getRequestUrl(option) {
    var _option = option || {},
      requestType = _option.requestType;
    return _rRequestTypeToUrl[requestType || DF_REQUEST_TYPE](_option);
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
    var _ref4 = json || {},
      error_message = _ref4.error_message,
      _ref4$error_name = _ref4.error_name,
      error_name = _ref4$error_name === void 0 ? '' : _ref4$error_name;
    if (error_message) {
      throw {
        errCaption: (0, _StringUtil.setFirstToUpperCase)(error_name.replace('_', ' ')),
        message: (0, _StringUtil.setFirstToUpperCase)(error_message)
      };
    }
    return true;
  }
};
var _default = StackExchangeApi;
exports["default"] = _default;
//# sourceMappingURL=StackExchangeApi.js.map