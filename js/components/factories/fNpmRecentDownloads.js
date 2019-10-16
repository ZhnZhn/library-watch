'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _NpmDownloads = require('../items/NpmDownloads');

var _NpmDownloads2 = _interopRequireDefault(_NpmDownloads);

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

    return factory.createElement(_NpmDownloads2.default, (0, _extends3.default)({
        key: key,
        packageName: json.package,
        caption: json.package,
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

exports.default = fNpmRecentDownloads;
//# sourceMappingURL=fNpmRecentDownloads.js.map