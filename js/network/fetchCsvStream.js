'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _papaparse = require('papaparse');

var _papaparse2 = _interopRequireDefault(_papaparse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchCsvStream = function fetchCsvStream(_ref) {
  var uri = _ref.uri,
      option = _ref.option,
      onFetch = _ref.onFetch,
      onCompleted = _ref.onCompleted,
      onCatch = _ref.onCatch,
      onFailed = _ref.onFailed,
      _crErr = _ref._crErr,
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
    var _str = String.fromCharCode.apply(String, (0, _toConsumableArray3.default)(result.value));
    return _papaparse2.default.parse(_str, { header: true });
  }).then(function (json) {
    onFetch({ json: json, option: option, onCompleted: onCompleted });
    _doneOk(_nowTime);
  }).catch(function (error) {
    onCatch({ error: error, option: option, onFailed: onFailed });
    _doneFailure(_nowTime);
  });
};

exports.default = fetchCsvStream;
//# sourceMappingURL=fetchCsvStream.js.map