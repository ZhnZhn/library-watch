"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _throttleFn = _interopRequireDefault(require("../../../utils/throttleFn"));
var _loadJson = _interopRequireDefault(require("./loadJson"));
const NAME = 'Npms.io',
  NPMS_URI = 'https://api.npms.io/v2/package/',
  WAIT_MLS = 3000,
  _crNpmsUri = packageName => `${NPMS_URI}${packageName}`,
  _loadNpms = _ref => {
    let {
      packageName,
      onLoad
    } = _ref;
    return (0, _loadJson.default)({
      name: NAME,
      uri: _crNpmsUri(packageName),
      onLoad
    });
  },
  loadNpms = (0, _throttleFn.default)(_loadNpms, WAIT_MLS);
var _default = exports.default = loadNpms;
//# sourceMappingURL=loadNpms.js.map