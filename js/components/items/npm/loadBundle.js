"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _throttleFn = _interopRequireDefault(require("../../../utils/throttleFn"));
var _loadJson = _interopRequireDefault(require("./loadJson"));
var NAME = 'Bundlephobia.com',
  BUNDLE_URI = 'https://bundlephobia.com/api/size?package=',
  WAIT_MLS = 3000;
var _crBundleUri = function _crBundleUri(packageName) {
  return "" + BUNDLE_URI + packageName;
};
var _loadBundle = function _loadBundle(_ref) {
  var packageName = _ref.packageName,
    onLoad = _ref.onLoad;
  return (0, _loadJson["default"])({
    name: NAME,
    uri: _crBundleUri(packageName),
    onLoad: onLoad
  });
};
var loadBundle = (0, _throttleFn["default"])(_loadBundle, WAIT_MLS);
var _default = loadBundle;
exports["default"] = _default;
//# sourceMappingURL=loadBundle.js.map