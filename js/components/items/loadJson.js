"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var C = {
  ERR_RES: "response isn't OK",
  ERR_FORMAT: "response isn't valid"
};

var _crResponseError = function _crResponseError(name) {
  return name + " " + C.ERR_RES;
},
    _crFormatError = function _crFormatError(name) {
  return name + " " + C.ERR_FORMAT;
};

var loadJson = function loadJson(_ref) {
  var name = _ref.name,
      uri = _ref.uri,
      onLoad = _ref.onLoad;
  return fetch(uri).then(function (res) {
    var status = res.status;

    if (status > 199 && status < 300) {
      return res.json();
    } else {
      throw new Error(_crResponseError(name));
    }
  }).then(function (json) {
    if (json && !json.code) {
      onLoad(json);
    } else {
      throw new Error(json.message || _crFormatError(name));
    }
  })["catch"](function (err) {
    console.log(err);
    onLoad({
      errMsg: err.message
    });
  });
};

var _default = loadJson;
exports["default"] = _default;
//# sourceMappingURL=loadJson.js.map