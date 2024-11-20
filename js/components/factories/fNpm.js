"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _NpmDownloads = _interopRequireDefault(require("../items/npm/NpmDownloads"));
const FN_NOOP = () => ({}),
  fNpm = function (transformDownloads, crElementProps) {
    if (crElementProps === void 0) {
      crElementProps = FN_NOOP;
    }
    return options => {
      const {
          createElement,
          option,
          json,
          parentProps,
          onMoveToTop,
          onCloseItem
        } = options,
        {
          requestType,
          key,
          packageLink
        } = option,
        {
          downloads,
          package: packageName
        } = json,
        {
          sumDownloads,
          fromDate,
          toDate,
          labels,
          data
        } = transformDownloads(downloads);
      return createElement(_NpmDownloads.default, {
        key,
        packageName,
        caption: packageName,
        packageLink,
        requestType,
        sumDownloads,
        fromDate,
        toDate,
        labels,
        data,
        onMoveToTop,
        onCloseItem,
        ...crElementProps(options),
        ...parentProps
      });
    };
  };
var _default = exports.default = fNpm;
//# sourceMappingURL=fNpm.js.map