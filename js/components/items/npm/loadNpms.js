"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _throttleFn = _interopRequireDefault(require("../../../utils/throttleFn"));
var _loadJson = _interopRequireDefault(require("./loadJson"));
var NAME = 'Npms.io',
  NPMS_URI = 'https://api.npms.io/v2/package/',
  WAIT_MLS = 3000,
  _crNpmsUri = function _crNpmsUri(packageName) {
    return "" + NPMS_URI + packageName;
  },
  _loadNpms = function _loadNpms(_ref) {
    var packageName = _ref.packageName,
      onLoad = _ref.onLoad;
    return (0, _loadJson["default"])({
      name: NAME,
      uri: _crNpmsUri(packageName),
      onLoad: onLoad
    });
  },
  loadNpms = (0, _throttleFn["default"])(_loadNpms, WAIT_MLS);
var _default = loadNpms;
exports["default"] = _default;
//# sourceMappingURL=loadNpms.js.map