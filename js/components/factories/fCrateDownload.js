"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _CrateDownloads = _interopRequireDefault(require("../items/crate/CrateDownloads"));
const fCrateDownload = options => {
  const {
      createElement,
      option,
      json,
      onCloseItem
    } = options,
    {
      repo,
      chartType,
      browserType,
      key
    } = option,
    labels = [],
    data = [],
    _labelLength = labels.length;
  let sumDownloads = 0;
  for (const item of json.meta.extra_downloads) {
    labels.push(item.date);
    data.push(item.downloads);
    sumDownloads += item.downloads;
  }
  return createElement(_CrateDownloads.default, {
    key,
    caption: repo,
    packageName: repo,
    fromDate: _labelLength !== 0 ? labels[0] : "",
    toDate: _labelLength > 0 ? labels[labels.length - 1] : "",
    sumDownloads,
    labels,
    data,
    onCloseItem: (0, _uiApi.bindTo)(onCloseItem, chartType, browserType, key)
  });
};
var _default = exports.default = fCrateDownload;
//# sourceMappingURL=fCrateDownload.js.map