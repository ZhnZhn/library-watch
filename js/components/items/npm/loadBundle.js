"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _throttleFn = _interopRequireDefault(require("../../../utils/throttleFn"));
var _loadJson = _interopRequireDefault(require("./loadJson"));
const NAME = 'Bundlephobia.com',
  BUNDLE_URI = 'https://bundlephobia.com/api/size?package=',
  WAIT_MLS = 3000;
const _crBundleUri = packageName => `${BUNDLE_URI}${packageName}`;
const _loadBundle = _ref => {
  let {
    packageName,
    onLoad
  } = _ref;
  return (0, _loadJson.default)({
    name: NAME,
    uri: _crBundleUri(packageName),
    onLoad
  });
};
const loadBundle = (0, _throttleFn.default)(_loadBundle, WAIT_MLS);
var _default = exports.default = loadBundle;
//# sourceMappingURL=loadBundle.js.map