"use strict";

exports.__esModule = true;
exports.fGetRequestUrl = exports.crErrMsg = void 0;
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
//# sourceMappingURL=apiFn.js.map