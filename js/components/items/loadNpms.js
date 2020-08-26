"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var C = {
  NPMS_URI: 'https://api.npms.io/v2/package/',
  ERR_RES: "Npms.io response isn't OK",
  ERR_FORMAT_DF: "Npms.io response isn't valid"
};

var _crNpmsUri = function _crNpmsUri(packageName) {
  return "" + C.NPMS_URI + packageName;
};

var loadNpms = function loadNpms(_ref) {
  var packageName = _ref.packageName,
      onLoad = _ref.onLoad;
  return fetch(_crNpmsUri(packageName)).then(function (res) {
    var status = res.status;

    if (status > 199 && status < 300) {
      return res.json();
    } else {
      throw new Error(C.ERR_RES);
    }
  }).then(function (json) {
    if (json && !json.code) {
      onLoad(json);
    } else {
      throw new Error(json.message || C.ERR_FORMAT_DF);
    }
  })["catch"](function (err) {
    console.log(err);
    onLoad({
      errMsg: err.message
    });
  });
};

var _default = loadNpms;
exports["default"] = _default;
//# sourceMappingURL=loadNpms.js.map