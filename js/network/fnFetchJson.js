"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = _ref => {
  let {
    uri,
    onCatch
  } = _ref;
  return Promise.resolve().then(() => {
    return fetch(uri);
  }).then(response => {
    const {
      status,
      statusText
    } = response;
    if (status >= 200 && status <= 400) {
      return response.json();
    } else if (status > 400 && status < 500) {
      throw {
        errCaption: 'Request Error',
        message: `${status} : ${statusText}`
      };
    } else if (status >= 500 && status < 600) {
      throw {
        errCaption: 'Response Error',
        message: `${status} : ${statusText}`
      };
    }
  }).then(json => {
    return json;
  }).catch(error => {
    onCatch({
      error
    });
  });
};
exports.default = _default;
//# sourceMappingURL=fnFetchJson.js.map