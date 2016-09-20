'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _DateUtils = require('../../utils/DateUtils');

var _DateUtils2 = _interopRequireDefault(_DateUtils);

var _NpmRecentMonthDownloads = require('../items/NpmRecentMonthDownloads');

var _NpmRecentMonthDownloads2 = _interopRequireDefault(_NpmRecentMonthDownloads);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_ITEMS = 30;

var _fnTransformDownloads = function _fnTransformDownloads() {
    var downloads = arguments.length <= 0 || arguments[0] === undefined ? [{ day: '0-0-0', downloads: 0 }] : arguments[0];

    var labels = [],
        data = [],
        itemLen = downloads.length,
        fromDate = downloads[0].day,
        toDate = downloads[itemLen - 1].day,
        itemStep = itemLen > MAX_ITEMS ? Math.round(itemLen / MAX_ITEMS) : 1;
    var sumDownloads = 0;

    downloads.forEach(function (item, index) {
        var date = item.day;
        var value = item.downloads;

        var _date$split = date.split('-');

        var _date$split2 = _slicedToArray(_date$split, 3);

        var y = _date$split2[0];
        var m = _date$split2[1];
        var d = _date$split2[2];


        if (index % itemStep === 0) {
            if (!_DateUtils2.default.isWeekend(y, m, d)) {
                labels.push(m + '-' + d);
                data.push(value);
            } else if (index - 2 > -1) {
                var _item = downloads[index - 2];
                var _date = _item.day;
                var _value = _item.downloads;
                /* eslint-disable no-unused-vars */

                var _date$split3 = _date.split('-');

                var _date$split4 = _slicedToArray(_date$split3, 3);

                var _y = _date$split4[0];
                var _m = _date$split4[1];
                var _d = _date$split4[2];
                /* eslint-disable no-unused-vars */

                labels.push(_m + '-' + _d);
                data.push(_value);
            }
        }

        sumDownloads = sumDownloads + value;
    });

    return { sumDownloads: sumDownloads, fromDate: fromDate, toDate: toDate, labels: labels, data: data };
};

var fNpmDownloads = function fNpmDownloads(_ref) {
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
    var key = repo + '_' + requestType + '_' + fromDate;

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
        onCloseItem: onCloseItem.bind(null, chartType, browserType, key)
    }, parentProps));
};

exports.default = fNpmDownloads;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\factories\fNpmDownloads.js.map