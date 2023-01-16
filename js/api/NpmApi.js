"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _strFn = require("../utils/strFn");
var BASE = 'https://api.npmjs.org';
var NPM_PACKAGE = 'https://www.npmjs.com/package/';
var NPM = 'https://www.npmjs.com';
var REQUEST_PACKAGE = 'Request Package';

//https://api.npmjs.org/downloads/range/last-month

var _crPackageLink = function _crPackageLink(name) {
  return name ? "" + NPM_PACKAGE + name : NPM;
};
var _addPackageLinkTo = function _addPackageLinkTo(option) {
  var repo = option.repo;
  option.packageLink = _crPackageLink(repo);
};
var _rRequestTypeToUrl = {
  NPM_RECENT_VERSION: function NPM_RECENT_VERSION(option) {
    return "https://registry.npmjs.org/-/package/" + option.repo + "/dist-tags";
  },
  NPM_DOWNLOADS_RECENT_MONTH: function NPM_DOWNLOADS_RECENT_MONTH(option) {
    _addPackageLinkTo(option);
    return BASE + "/downloads/range/last-month/" + option.repo;
  },
  NPM_DOWNLOADS: function NPM_DOWNLOADS(option) {
    var fromDate = option.fromDate,
      toDate = option.toDate,
      repo = option.repo;
    _addPackageLinkTo(option);
    return BASE + "/downloads/range/" + fromDate + ":" + toDate + "/" + repo;
  }
};
var NpmApi = {
  getRequestUrl: function getRequestUrl(option) {
    var fnFactory = _rRequestTypeToUrl[option.requestType];
    return fnFactory(option);
  },
  getOnCheckResponse: function getOnCheckResponse() {
    return NpmApi.checkResponse;
  },
  crKey: function crKey(_ref) {
    var repo = _ref.repo,
      requestType = _ref.requestType,
      _ref$fromDate = _ref.fromDate,
      fromDate = _ref$fromDate === void 0 ? '' : _ref$fromDate;
    return repo + "_" + requestType + "_" + fromDate;
  },
  checkResponse: function checkResponse(json, option) {
    if (json === void 0) {
      json = {};
    }
    var _json = json,
      error = _json.error;
    if (error) {
      throw {
        errCaption: REQUEST_PACKAGE,
        message: (0, _strFn.setFirstToUpperCase)(error)
      };
    }
    return true;
  }
};
var _default = NpmApi;
exports["default"] = _default;
//# sourceMappingURL=NpmApi.js.map