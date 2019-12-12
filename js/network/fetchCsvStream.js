"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _papaparse = _interopRequireDefault(require("papaparse"));

var fetchCsvStream = function fetchCsvStream(_ref) {
  var uri = _ref.uri,
      option = _ref.option,
      onFetch = _ref.onFetch,
      onCheckResponse = _ref.onCheckResponse,
      onCompleted = _ref.onCompleted,
      onCatch = _ref.onCatch,
      onFailed = _ref.onFailed,
      _crErr = _ref._crErr,
      _crErrResp = _ref._crErrResp,
      _nowTime = _ref._nowTime,
      _doneOk = _ref._doneOk,
      _doneFailure = _ref._doneFailure;
  return fetch(uri).then(function (response) {
    if (response.body) {
      var _reader = response.body.getReader();

      return _reader.read();
    } else {
      throw _crErr(response);
    }
  }).then(function (result) {
    var _str = String.fromCharCode.apply(String, result.value);

    return _papaparse["default"].parse(_str, {
      header: true
    });
  }).then(function (json) {
    if (onCheckResponse(json)) {
      onFetch({
        json: json,
        option: option,
        onCompleted: onCompleted
      });

      _doneOk(_nowTime);
    } else {
      throw _crErrResp();
    }
  })["catch"](function (error) {
    onCatch({
      error: error,
      option: option,
      onFailed: onFailed
    });

    _doneFailure(_nowTime);
  });
};

var _default = fetchCsvStream;
exports["default"] = _default;
//# sourceMappingURL=fetchCsvStream.js.map