"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apiFn = require("./apiFn");
const API_URL = "https://crates.io";
const _isArr = Array.isArray;
const CrateApi = {
  getRequestUrl(_ref) {
    let {
      repo
    } = _ref;
    return `${API_URL}/api/v1/crates/${repo}/downloads`;
  },
  crKey(_ref2) {
    let {
      repo,
      requestType
    } = _ref2;
    return `${repo}_${requestType}`;
  },
  checkResponse(json, option) {
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
};
var _default = exports.default = CrateApi;
//# sourceMappingURL=CrateApi.js.map