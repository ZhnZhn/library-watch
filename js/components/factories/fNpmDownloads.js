"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _DateUtils = _interopRequireDefault(require("../../utils/DateUtils"));

var _NpmDownloads = _interopRequireDefault(require("../items/NpmDownloads"));

var MAX_ITEMS = 30;
/* Irregular Time Inrevals */

var _fnTransformDownloads = function _fnTransformDownloads(downloads) {
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
      if (!_DateUtils["default"].isWeekend(y, m, d)) {
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
  return {
    sumDownloads: sumDownloads,
    fromDate: fromDate,
    toDate: toDate,
    labels: labels,
    data: data
  };
};

var fNpmDownloads = function fNpmDownloads(_ref) {
  var factory = _ref.factory,
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
      _fnTransformDownloads2 = _fnTransformDownloads(downloads),
      sumDownloads = _fnTransformDownloads2.sumDownloads,
      fromDate = _fnTransformDownloads2.fromDate,
      toDate = _fnTransformDownloads2.toDate,
      labels = _fnTransformDownloads2.labels,
      data = _fnTransformDownloads2.data;

  return factory.createElement(_NpmDownloads["default"], (0, _extends2["default"])({
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