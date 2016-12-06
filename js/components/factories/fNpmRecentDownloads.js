'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _NpmRecentMonthDownloads = require('../items/NpmRecentMonthDownloads');

var _NpmRecentMonthDownloads2 = _interopRequireDefault(_NpmRecentMonthDownloads);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnTransformDownloads = function _fnTransformDownloads() {
    var downloads = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{ day: '0-0-0', downloads: 0 }];

    var labels = [],
        data = [],
        fromDate = downloads[0].day,
        toDate = downloads[downloads.length - 1].day;
    var sumDownloads = 0;

    downloads.forEach(function (item) {
        var day = item.day,
            downloads = item.downloads,
            arrDate = day.split('-');


        labels.push('' + arrDate[2]);
        data.push(downloads);
        sumDownloads = sumDownloads + downloads;
    });

    return { sumDownloads: sumDownloads, fromDate: fromDate, toDate: toDate, labels: labels, data: data };
};

var fNpmRecentDownloads = function fNpmRecentDownloads(_ref) {
    var factory = _ref.factory,
        option = _ref.option,
        json = _ref.json,
        parentProps = _ref.parentProps,
        onCloseItem = _ref.onCloseItem,
        onWatchItem = _ref.onWatchItem;

    var repo = option.repo,
        requestType = option.requestType,
        chartType = option.chartType,
        browserType = option.browserType,
        downloads = json.downloads,
        _fnTransformDownloads2 = _fnTransformDownloads(downloads),
        sumDownloads = _fnTransformDownloads2.sumDownloads,
        fromDate = _fnTransformDownloads2.fromDate,
        toDate = _fnTransformDownloads2.toDate,
        labels = _fnTransformDownloads2.labels,
        data = _fnTransformDownloads2.data,
        key = repo + '_' + requestType;

    return factory.createElement(_NpmRecentMonthDownloads2.default, _extends({
        key: key,
        packageName: json.package,
        requestType: requestType,
        caption: json.package,
        sumDownloads: sumDownloads,
        fromDate: fromDate,
        toDate: toDate,
        labels: labels,
        data: data,
        onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
        onWatchItem: onWatchItem
    }, parentProps));
};

exports.default = fNpmRecentDownloads;
//# sourceMappingURL=fNpmRecentDownloads.js.map