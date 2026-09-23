"use strict";

exports.__esModule = true;
exports.fGetRequestUrl = exports.crProviderApi = exports.crErrMsg = void 0;
var _isTypeFn = require("../utils/isTypeFn");
const fGetRequestUrl = (hmRoutes, dfRoute) => option => {
  const {
      requestType = dfRoute
    } = option,
    crRequestUrl = requestType && hmRoutes[requestType];
  return (0, _isTypeFn.isFn)(crRequestUrl) ? crRequestUrl(option) : void 0;
};
exports.fGetRequestUrl = fGetRequestUrl;
const crErrMsg = (errCaption, message) => ({
  errCaption,
  message
});
exports.crErrMsg = crErrMsg;
const _crKeyDf = ({
  repo,
  requestType
}) => `${repo}_${requestType}`;
const crProviderApi = (getRequestUrl, checkResponse, crKey = _crKeyDf) => ({
  getRequestUrl,
  crKey,
  checkResponse
});
exports.crProviderApi = crProviderApi;
//# sourceMappingURL=apiFn.js.map