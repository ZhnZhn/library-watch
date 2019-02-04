'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _DateUtils = require('../../utils/DateUtils');

var _DateUtils2 = _interopRequireDefault(_DateUtils);

var _NpmRecentMonthDownloads = require('../items/NpmRecentMonthDownloads');

var _NpmRecentMonthDownloads2 = _interopRequireDefault(_NpmRecentMonthDownloads);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_ITEMS = 30;

/* Irregular Time Inrevals */
var _fnTransformDownloads = function _fnTransformDownloads() {
    var downloads = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{ day: '1970-01-01', downloads: 0 }];

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
            _date$split2 = (0, _slicedToArray3.default)(_date$split, 3),
            y = _date$split2[0],
            m = _date$split2[1],
            d = _date$split2[2];

        if (index % itemStep === 0) {
            if (!_DateUtils2.default.isWeekend(y, m, d)) {
                labels.push(m + '-' + d);
                data.push(value);
            } else if (index - 2 > -1) {
                var _item = downloads[index - 2],
                    _date = _item.day,
                    _value = _item.downloads,
                    _date$split3 = _date.split('-'),
                    _date$split4 = (0, _slicedToArray3.default)(_date$split3, 3),
                    _y = _date$split4[0],
                    _m = _date$split4[1],
                    _d = _date$split4[2];
                /* eslint-disable no-unused-vars */
                labels.push(_m + '-' + _d);
                data.push(_value);
            }
        }

        sumDownloads += value;
    });

    return { sumDownloads: sumDownloads, fromDate: fromDate, toDate: toDate, labels: labels, data: data };
};

var fNpmDownloads = function fNpmDownloads(_ref) {
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
        key = option.key,
        downloads = json.downloads,
        packageName = json.package,
        _fnTransformDownloads2 = _fnTransformDownloads(downloads),
        sumDownloads = _fnTransformDownloads2.sumDownloads,
        fromDate = _fnTransformDownloads2.fromDate,
        toDate = _fnTransformDownloads2.toDate,
        labels = _fnTransformDownloads2.labels,
        data = _fnTransformDownloads2.data;
    //, key = `${repo}_${requestType}_${fromDate}`;

    return factory.createElement(_NpmRecentMonthDownloads2.default, (0, _extends3.default)({
        key: key,
        packageName: packageName,
        caption: packageName,
        requestType: requestType,
        sumDownloads: sumDownloads,
        fromDate: fromDate,
        toDate: toDate,
        labels: labels,
        data: data,
        onCloseItem: onCloseItem.bind(null, chartType, browserType, key)
    }, parentProps));
};

exports.default = fNpmDownloads;
//# sourceMappingURL=fNpmDownloads.js.map