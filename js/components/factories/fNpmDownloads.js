"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _dateFn = require("../../utils/dateFn");
var _NpmDownloads = _interopRequireDefault(require("../items/npm/NpmDownloads"));
var MAX_ITEMS = 30;
var _trimRecentZeroValue = function _trimRecentZeroValue(data, labels) {
  var _indexRecent = data.length - 1;
  if (_indexRecent >= 0 && data[_indexRecent] === 0) {
    data.splice(_indexRecent);
    labels.splice(_indexRecent);
  }
};

/* Irregular Time Inrevals */
var _transformDownloads = function _transformDownloads(downloads) {
  if (downloads === void 0) {
    downloads = [{
      day: '1970-01-01',
      downloads: 0
    }];
  }
  var labels = [],
    data = [],
    itemLen = downloads.length,
    fromDate = downloads[0].day,
    toDate = itemLen > 0 ? downloads[itemLen - 1].day : fromDate,
    itemStep = itemLen > MAX_ITEMS ? Math.round(itemLen / MAX_ITEMS) : 1;
  var sumDownloads = 0;
  downloads.forEach(function (item, index) {
    var date = item.day,
      value = item.downloads,
      _date$split = date.split('-'),
      y = _date$split[0],
      m = _date$split[1],
      d = _date$split[2];
    if (index % itemStep === 0) {
      if (!(0, _dateFn.isWeekend)(y, m, d)) {
        labels.push(m + "-" + d);
        data.push(value);
      } else if (index - 2 > -1) {
        var _item = downloads[index - 2],
          _date = _item.day,
          _value = _item.downloads,
          _date$split2 = _date.split('-'),
          _y = _date$split2[0],
          _m = _date$split2[1],
          _d = _date$split2[2];

        /* eslint-disable no-unused-vars */
        labels.push(_m + "-" + _d);
        data.push(_value);
      }
    }
    sumDownloads += value;
  });
  _trimRecentZeroValue(data, labels);
  return {
    sumDownloads: sumDownloads,
    fromDate: fromDate,
    toDate: toDate,
    labels: labels,
    data: data
  };
};
var fNpmDownloads = function fNpmDownloads(_ref) {
  var createElement = _ref.createElement,
    option = _ref.option,
    json = _ref.json,
    parentProps = _ref.parentProps,
    onMoveToTop = _ref.onMoveToTop,
    onCloseItem = _ref.onCloseItem,
    onWatchItem = _ref.onWatchItem;
  var repo = option.repo,
    requestType = option.requestType,
    chartType = option.chartType,
    browserType = option.browserType,
    key = option.key,
    packageLink = option.packageLink,
    downloads = json.downloads,
    packageName = json["package"],
    _transformDownloads2 = _transformDownloads(downloads),
    sumDownloads = _transformDownloads2.sumDownloads,
    fromDate = _transformDownloads2.fromDate,
    toDate = _transformDownloads2.toDate,
    labels = _transformDownloads2.labels,
    data = _transformDownloads2.data;
  return createElement(_NpmDownloads["default"], (0, _extends2["default"])({
    key: key,
    packageName: packageName,
    packageLink: packageLink,
    caption: packageName,
    requestType: requestType,
    sumDownloads: sumDownloads,
    fromDate: fromDate,
    toDate: toDate,
    labels: labels,
    data: data,
    onMoveToTop: onMoveToTop,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key)
  }, parentProps));
};
var _default = fNpmDownloads;
exports["default"] = _default;
//# sourceMappingURL=fNpmDownloads.js.map