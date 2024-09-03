"use strict";

exports.__esModule = true;
exports.fGetRequestUrl = void 0;
var _isTypeFn = require("../utils/isTypeFn");
const fGetRequestUrl = (hmRoutes, dfRoute) => option => {
  const {
      requestType = dfRoute
    } = option,
    crRequestUrl = requestType && hmRoutes[requestType];
  return (0, _isTypeFn.isFn)(crRequestUrl) ? crRequestUrl(option) : void 0;
};
exports.fGetRequestUrl = fGetRequestUrl;
//# sourceMappingURL=apiFn.js.map