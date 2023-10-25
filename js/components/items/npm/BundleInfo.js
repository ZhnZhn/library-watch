"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crGitRepositoryHref = _interopRequireDefault(require("./crGitRepositoryHref"));
var _crGitRepositoryCaption = _interopRequireDefault(require("./crGitRepositoryCaption"));
var _checkResponseJson = _interopRequireDefault(require("./checkResponseJson"));
var _CellValue = _interopRequireDefault(require("../CellValue"));
var _Link = _interopRequireDefault(require("../../zhn-atoms/Link"));
var _CL = require("../../styles/CL");
var _jsxRuntime = require("react/jsx-runtime");
const S_ML_8 = {
    marginLeft: 8
  },
  S_MR_24 = {
    marginRight: 24
  },
  API_URL = 'https://bundlephobia.com/result?p=',
  _crBundleHref = (name, version) => `${API_URL}${name}@${version}`,
  _toKbStr = sizeByte => (sizeByte / 1024).toFixed(1);
const BundleInfo = _ref => {
  let {
    json
  } = _ref;
  const result = (0, _checkResponseJson.default)(json);
  if (result !== true) {
    return result;
  }
  const {
      name,
      version,
      gzip,
      size,
      dependencyCount,
      description,
      repository
    } = json,
    gitHref = (0, _crGitRepositoryHref.default)(repository),
    gitCaption = (0, _crGitRepositoryCaption.default)(gitHref),
    bundleHref = _crBundleHref(name, version);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue.default, {
        caption: "name",
        value: name
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue.default, {
        caption: "version",
        value: version
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue.default, {
        caption: "size kB",
        value: _toKbStr(size)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue.default, {
        caption: "gzip kB",
        value: _toKbStr(gzip)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue.default, {
        caption: "dependencyCount",
        value: dependencyCount
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_ML_8,
      children: description
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S_ML_8,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        href: gitHref,
        className: _CL.CL_SOURCE_LINK,
        style: S_MR_24,
        children: gitCaption
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        href: bundleHref,
        className: _CL.CL_SOURCE_LINK,
        children: "Bundelphobia Link"
      })]
    })]
  });
};
var _default = exports.default = BundleInfo;
//# sourceMappingURL=BundleInfo.js.map