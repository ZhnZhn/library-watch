"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../utils/isTypeFn");
const LIMIT_REMAINING = 'X-RateLimit-Remaining';
const fetchJson = ({
  uri,
  option,
  onFetch,
  onCheckResponse,
  onCompleted,
  onCatch,
  onFailed,
  _crErr,
  _nowTime,
  _doneOk,
  _doneFailure
}) => fetch(uri).then(response => {
  const {
    status,
    headers
  } = response;
  option.limitRemaining = headers.get(LIMIT_REMAINING);
  if (status >= 200 && status <= 400) {
    return response.json();
  } else {
    throw _crErr(response);
  }
}).then(json => {
  if ((0, _isTypeFn.isFn)(onCheckResponse)) {
    onCheckResponse(json, option);
  }
  onFetch({
    json,
    option,
    onCompleted
  });
  _doneOk(_nowTime);
}).catch(error => {
  onCatch({
    error,
    option,
    onFailed
  });
  _doneFailure(_nowTime);
});
var _default = exports.default = fetchJson;
//# sourceMappingURL=fetchJson.js.map