"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _throttleOnce = _interopRequireDefault(require("../../utils/throttleOnce"));

var _loadJson = _interopRequireDefault(require("./loadJson"));

var C = {
  NAME: 'Bundlephobia.com',
  URI: 'https://bundlephobia.com/api/size?package=',
  WAIT: 3000
};

var _crBundleUri = function _crBundleUri(packageName) {
  return "" + C.URI + packageName;
};

var _loadBundle = function _loadBundle(_ref) {
  var packageName = _ref.packageName,
      onLoad = _ref.onLoad;
  return (0, _loadJson["default"])({
    name: C.NAME,
    uri: _crBundleUri(packageName),
    onLoad: onLoad
  });
};

var loadBundle = (0, _throttleOnce["default"])(_loadBundle, C.WAIT);
var _default = loadBundle;
exports["default"] = _default;
//# sourceMappingURL=loadBundle.js.map