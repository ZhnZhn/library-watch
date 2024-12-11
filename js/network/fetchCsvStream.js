"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _papaparse = _interopRequireDefault(require("papaparse"));
const fetchCsvStream = _ref => {
  let {
    uri,
    option,
    onFetch,
    onCheckResponse,
    onCompleted,
    onCatch,
    onFailed,
    _crErr,
    _crErrResp,
    _nowTime,
    _doneOk,
    _doneFailure
  } = _ref;
  return fetch(uri).then(response => {
    if (response.body) {
      const _reader = response.body.getReader();
      return _reader.read();
    } else {
      throw _crErr(response);
    }
  }).then(result => {
    const _str = String.fromCharCode(...result.value);
    return _papaparse.default.parse(_str, {
      header: true
    });
  }).then(json => {
    if (onCheckResponse(json)) {
      onFetch({
        json,
        option,
        onCompleted
      });
      _doneOk(_nowTime);
    } else {
      throw _crErrResp();
    }
  }).catch(error => {
    onCatch({
      error,
      option,
      onFailed
    });
    _doneFailure(_nowTime);
  });
};
var _default = exports.default = fetchCsvStream;
//# sourceMappingURL=fetchCsvStream.js.map