"use strict";

exports.__esModule = true;
exports.default = void 0;
var _strFn = require("../utils/strFn");
var _apiFn = require("./apiFn");
const API_URL = 'https://api.npmjs.org';
const NPM = 'https://www.npmjs.com';
const NPM_PACKAGE = `${NPM}/package/`;
const REQUEST_PACKAGE = 'Request Package';
const _crPackageLink = name => name ? `${NPM_PACKAGE}${name}` : NPM;
const _addPackageLinkTo = option => {
  const {
    repo
  } = option;
  option.packageLink = _crPackageLink(repo);
};
const _crVersionPackage = repo => repo.replace('/', '%2F');
const _rRequestTypeToUrl = {
  NPM_RECENT_VERSION: option => {
    return `https://registry.npmjs.org/-/package/${option.repo}/dist-tags`;
  },
  NPM_DOWNLOADS_RECENT_MONTH: option => {
    _addPackageLinkTo(option);
    return `${API_URL}/downloads/range/last-month/${option.repo}`;
  },
  NPM_DOWNLOADS: option => {
    const {
      fromDate,
      toDate,
      repo
    } = option;
    _addPackageLinkTo(option);
    return `${API_URL}/downloads/range/${fromDate}:${toDate}/${repo}`;
  },
  NPM_TOP_VERSIONS: option => {
    _addPackageLinkTo(option);
    return `${API_URL}/versions/${_crVersionPackage(option.repo)}/last-week`;
  }
};
const NpmApi = {
  getRequestUrl: (0, _apiFn.fGetRequestUrl)(_rRequestTypeToUrl),
  getOnCheckResponse() {
    return NpmApi.checkResponse;
  },
  crKey(_ref) {
    let {
      repo,
      requestType,
      fromDate = ''
    } = _ref;
    return `${repo}_${requestType}_${fromDate}`;
  },
  checkResponse(json, option) {
    const {
      error
    } = json || {};
    if (error) {
      throw (0, _apiFn.crErrMsg)(REQUEST_PACKAGE, (0, _strFn.setFirstToUpperCase)(error));
    }
    return true;
  }
};
var _default = exports.default = NpmApi;
//# sourceMappingURL=NpmApi.js.map