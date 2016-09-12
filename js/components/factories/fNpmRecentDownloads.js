'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _NpmRecentMonthDownloads = require('../items/NpmRecentMonthDownloads');

var _NpmRecentMonthDownloads2 = _interopRequireDefault(_NpmRecentMonthDownloads);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnTransformDownloads = function _fnTransformDownloads() {
    var downloads = arguments.length <= 0 || arguments[0] === undefined ? [{ day: '0-0-0', downloads: 0 }] : arguments[0];

    var labels = [],
        data = [],
        fromDate = downloads[0].day,
        toDate = downloads[downloads.length - 1].day;
    var sumDownloads = 0;

    downloads.forEach(function (item) {
        var day = item.day;
        var downloads = item.downloads;
        var arrDate = day.split('-');

        labels.push('' + arrDate[2]);
        data.push(downloads);
        sumDownloads = sumDownloads + downloads;
    });

    return { sumDownloads: sumDownloads, fromDate: fromDate, toDate: toDate, labels: labels, data: data };
};

var fNpmRecentDownloads = function fNpmRecentDownloads(_ref) {
    var factory = _ref.factory;
    var option = _ref.option;
    var json = _ref.json;
    var parentProps = _ref.parentProps;
    var onCloseItem = _ref.onCloseItem;
    var onWatchItem = _ref.onWatchItem;
    var repo = option.repo;
    var requestType = option.requestType;
    var chartType = option.chartType;
    var browserType = option.browserType;
    var downloads = json.downloads;

    var _fnTransformDownloads2 = _fnTransformDownloads(downloads);

    var sumDownloads = _fnTransformDownloads2.sumDownloads;
    var fromDate = _fnTransformDownloads2.fromDate;
    var toDate = _fnTransformDownloads2.toDate;
    var labels = _fnTransformDownloads2.labels;
    var data = _fnTransformDownloads2.data;
    var key = repo + '_' + requestType;

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
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\factories\fNpmRecentDownloads.js.map