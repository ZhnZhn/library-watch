"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crGitRepositoryHref = _interopRequireDefault(require("./crGitRepositoryHref"));

var _crGitRepositoryCaption = _interopRequireDefault(require("./crGitRepositoryCaption"));

var _checkResponseJson = _interopRequireDefault(require("./checkResponseJson"));

var _CellValue = _interopRequireDefault(require("./CellValue"));

var _Link = _interopRequireDefault(require("./Link"));

var _jsxRuntime = require("react/jsx-runtime");

var S_ML_8 = {
  marginLeft: 8
},
    S_MR_24 = {
  marginRight: 24
};
var API_URL = 'https://bundlephobia.com/result?p=';

var _crBundleHref = function _crBundleHref(name, version) {
  return "" + API_URL + name + "@" + version;
};

var _toKbStr = function _toKbStr(sizeByte) {
  return (sizeByte / 1024).toFixed(1);
};

var BundleInfo = function BundleInfo(_ref) {
  var json = _ref.json;
  var result = (0, _checkResponseJson["default"])(json);

  if (result !== true) {
    return result;
  }

  var name = json.name,
      version = json.version,
      gzip = json.gzip,
      size = json.size,
      dependencyCount = json.dependencyCount,
      description = json.description,
      repository = json.repository,
      gitHref = (0, _crGitRepositoryHref["default"])(repository),
      gitCaption = (0, _crGitRepositoryCaption["default"])(gitHref),
      bundleHref = _crBundleHref(name, version);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue["default"], {
        caption: "name",
        value: name
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue["default"], {
        caption: "version",
        value: version
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue["default"], {
        caption: "size kB",
        value: _toKbStr(size)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue["default"], {
        caption: "gzip kB",
        value: _toKbStr(gzip)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue["default"], {
        caption: "dependencyCount",
        value: dependencyCount
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_ML_8,
      children: description
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S_ML_8,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
        href: gitHref,
        caption: gitCaption,
        style: S_MR_24
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
        href: bundleHref,
        caption: "Bundelphobia Link"
      })]
    })]
  });
};

var _default = BundleInfo;
exports["default"] = _default;
//# sourceMappingURL=BundleInfo.js.map