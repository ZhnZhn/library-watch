"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _throttleOnce = _interopRequireDefault(require("../../utils/throttleOnce"));

var _loadJson = _interopRequireDefault(require("./loadJson"));

var C = {
  NAME: 'Npms.io',
  NPMS_URI: 'https://api.npms.io/v2/package/',
  WAIT: 3000
};

var _crNpmsUri = function _crNpmsUri(packageName) {
  return "" + C.NPMS_URI + packageName;
};

var _loadNpms = function _loadNpms(_ref) {
  var packageName = _ref.packageName,
      onLoad = _ref.onLoad;
  return (0, _loadJson["default"])({
    name: C.NAME,
    uri: _crNpmsUri(packageName),
    onLoad: onLoad
  });
};

var loadNpms = (0, _throttleOnce["default"])(_loadNpms, C.WAIT);
var _default = loadNpms;
exports["default"] = _default;
//# sourceMappingURL=loadNpms.js.map