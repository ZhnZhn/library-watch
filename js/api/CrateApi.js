"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apiFn = require("./apiFn");
const PROVIDER_URL = "https://crates.io",
  API_URL = `${PROVIDER_URL}/api/v1/crates`,
  _isArr = Array.isArray;
const CrateApi = {
  getRequestUrl(option) {
    const {
      repo
    } = option;
    option.sourceLink = `${PROVIDER_URL}/crates/${repo}`;
    return [`${API_URL}/${repo}`, `${API_URL}/${repo}/downloads`];
  },
  crKey(_ref) {
    let {
      repo,
      requestType
    } = _ref;
    return `${repo}_${requestType}`;
  },
  checkResponse(json, option) {
    if (option.json1) {
      const {
          meta
        } = json || {},
        {
          extra_downloads
        } = meta || {};
      if (!_isArr(extra_downloads)) {
        throw (0, _apiFn.crErrMsg)("Request Crate", "Incorrect response");
      }
      return true;
    }
    return true;
  }
};
var _default = exports.default = CrateApi;
//# sourceMappingURL=CrateApi.js.map