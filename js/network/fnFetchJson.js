"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = function _default(_ref) {
  var uri = _ref.uri,
      onCatch = _ref.onCatch;
  return Promise.resolve().then(function () {
    return fetch(uri);
  }).then(function (response) {
    var status = response.status,
        statusText = response.statusText;

    if (status >= 200 && status <= 400) {
      return response.json();
    } else if (status > 400 && status < 500) {
      throw {
        errCaption: 'Request Error',
        message: status + " : " + statusText
      };
    } else if (status >= 500 && status < 600) {
      throw {
        errCaption: 'Response Error',
        message: status + " : " + statusText
      };
    }
  }).then(function (json) {
    return json;
  })["catch"](function (error) {
    onCatch({
      error: error
    });
  });
};

exports["default"] = _default;
//# sourceMappingURL=fnFetchJson.js.map