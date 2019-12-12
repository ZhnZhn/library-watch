"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var LIMIT_REMAINING = 'X-RateLimit-Remaining';

var fetchJson = function fetchJson(_ref) {
  var uri = _ref.uri,
      option = _ref.option,
      onFetch = _ref.onFetch,
      onCheckResponse = _ref.onCheckResponse,
      onCompleted = _ref.onCompleted,
      onCatch = _ref.onCatch,
      onFailed = _ref.onFailed,
      _crErr = _ref._crErr,
      _nowTime = _ref._nowTime,
      _doneOk = _ref._doneOk,
      _doneFailure = _ref._doneFailure;
  return fetch(uri).then(function (response) {
    var status = response.status,
        headers = response.headers;
    option.limitRemaining = headers.get(LIMIT_REMAINING);

    if (status >= 200 && status <= 400) {
      return response.json();
    } else {
      throw _crErr(response);
    }
  }).then(function (json) {
    if (onCheckResponse(json, option)) {
      onFetch({
        json: json,
        option: option,
        onCompleted: onCompleted
      });
    }

    _doneOk(_nowTime);
  })["catch"](function (error) {
    onCatch({
      error: error,
      option: option,
      onFailed: onFailed
    });

    _doneFailure(_nowTime);
  });
};

var _default = fetchJson;
exports["default"] = _default;
//# sourceMappingURL=fetchJson.js.map