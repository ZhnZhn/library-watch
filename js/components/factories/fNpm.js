"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ChartConfigFactories = require("../charts/ChartConfigFactories");
var _NpmDownloads = _interopRequireDefault(require("../items/npm/NpmDownloads"));
var _jsxRuntime = require("react/jsx-runtime");
const _crElementPropsDf = () => ({
  type: "line",
  options: {
    ...(0, _ChartConfigFactories.crLinearScale)("y")
  }
});
const fNpm = function (transformDownloads, crElementProps) {
  if (crElementProps === void 0) {
    crElementProps = _crElementPropsDf;
  }
  return options => {
    const {
      option,
      json,
      parentProps,
      onMoveToTop,
      onCloseItem
    } = options;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_NpmDownloads.default, {
      packageName: json.package,
      caption: json.package,
      packageLink: option.packageLink,
      requestType: option.requestType

      //sumDownloads={sumDownloads}
      //fromDate={fromDate}
      //toDate={toDate}
      //labels={labels}
      //data={data}
      ,
      ...transformDownloads(json.downloads),
      onMoveToTop: onMoveToTop,
      onCloseItem: onCloseItem,
      ...crElementProps(options),
      ...parentProps
    }, option.key);
  };
};
var _default = exports.default = fNpm;
//# sourceMappingURL=fNpm.js.map