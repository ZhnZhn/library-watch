"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _ErrMsg = _interopRequireDefault(require("./ErrMsg"));

var _CellValue = _interopRequireDefault(require("./CellValue"));

var _Link = _interopRequireDefault(require("./Link"));

var S = {
  ML_8: {
    marginLeft: 8
  }
};
var C = {
  URI: 'https://bundlephobia.com/result?p='
};

var _crHref = function _crHref(name, version) {
  return "" + C.URI + name + "@" + version;
};

var _toKbStr = function _toKbStr(sizeByte) {
  return (sizeByte / 1024).toFixed(1);
};

var BundleInfo = function BundleInfo(_ref) {
  var json = _ref.json;

  if (!json) {
    return null;
  }

  var errMsg = json.errMsg;

  if (errMsg) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrMsg["default"], {
      errMsg: errMsg
    });
  }

  var name = json.name,
      version = json.version,
      gzip = json.gzip,
      size = json.size,
      dependencyCount = json.dependencyCount,
      description = json.description,
      href = _crHref(name, version);

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
      style: S.ML_8,
      children: description
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S.ML_8,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
        href: href,
        caption: "Bundelphobia Link"
      })
    })]
  });
};

var _default = BundleInfo;
exports["default"] = _default;
//# sourceMappingURL=BundleInfo.js.map