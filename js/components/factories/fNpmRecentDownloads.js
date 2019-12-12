"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _NpmDownloads = _interopRequireDefault(require("../items/NpmDownloads"));

var _fnTransformDownloads = function _fnTransformDownloads(downloads) {
  if (downloads === void 0) {
    downloads = [{
      day: '0-0-0',
      downloads: 0
    }];
  }

  var labels = [],
      data = [],
      fromDate = downloads[0].day,
      toDate = downloads[downloads.length - 1].day;
  var sumDownloads = 0;
  downloads.forEach(function (item) {
    var day = item.day,
        downloads = item.downloads,
        arrDate = day.split('-');
    labels.push("" + arrDate[2]);
    data.push(downloads);
    sumDownloads = sumDownloads + downloads;
  });
  return {
    sumDownloads: sumDownloads,
    fromDate: fromDate,
    toDate: toDate,
    labels: labels,
    data: data
  };
};

var fNpmRecentDownloads = function fNpmRecentDownloads(_ref) {
  var factory = _ref.factory,
      option = _ref.option,
      json = _ref.json,
      parentProps = _ref.parentProps,
      onCloseItem = _ref.onCloseItem,
      onWatchItem = _ref.onWatchItem;

  var requestType = option.requestType,
      chartType = option.chartType,
      browserType = option.browserType,
      key = option.key,
      packageLink = option.packageLink,
      downloads = json.downloads,
      _fnTransformDownloads2 = _fnTransformDownloads(downloads),
      sumDownloads = _fnTransformDownloads2.sumDownloads,
      fromDate = _fnTransformDownloads2.fromDate,
      toDate = _fnTransformDownloads2.toDate,
      labels = _fnTransformDownloads2.labels,
      data = _fnTransformDownloads2.data;

  return factory.createElement(_NpmDownloads["default"], (0, _extends2["default"])({
    key: key,
    packageName: json["package"],
    caption: json["package"],
    packageLink: packageLink,
    requestType: requestType,
    sumDownloads: sumDownloads,
    fromDate: fromDate,
    toDate: toDate,
    labels: labels,
    data: data,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
    onWatchItem: onWatchItem
  }, parentProps));
};

var _default = fNpmRecentDownloads;
exports["default"] = _default;
//# sourceMappingURL=fNpmRecentDownloads.js.map