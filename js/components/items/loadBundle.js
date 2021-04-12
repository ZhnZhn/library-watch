"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _loadJson = _interopRequireDefault(require("./loadJson"));

var C = {
  NAME: 'Bundlephobia.com',
  URI: 'https://bundlephobia.com/api/size?package='
};

var _crBundleUri = function _crBundleUri(packageName) {
  return "" + C.URI + packageName;
};

var loadBundle = function loadBundle(_ref) {
  var packageName = _ref.packageName,
      onLoad = _ref.onLoad;
  return (0, _loadJson["default"])({
    name: C.NAME,
    uri: _crBundleUri(packageName),
    onLoad: onLoad
  });
};

var _default = loadBundle;
exports["default"] = _default;
//# sourceMappingURL=loadBundle.js.map