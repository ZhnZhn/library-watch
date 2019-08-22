'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _StatCounterShare = require('../items/StatCounterShare');

var _StatCounterShare2 = _interopRequireDefault(_StatCounterShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _filterEmptyDate = function _filterEmptyDate(json) {
  return json.data.filter(function (item) {
    return Boolean(item.Date);
  });
};

var _crArrFromObj = function _crArrFromObj(obj) {
  var _arr = [];
  for (var propName in obj) {
    _arr.push({
      caption: propName,
      value: parseFloat(obj[propName])
    });
  }
  return _arr;
};

var _crTopN = function _crTopN(arr) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

  var _arr2 = arr[arr.length - 1],
      Date = _arr2.Date,
      rest = (0, _objectWithoutProperties3.default)(_arr2, ['Date']),
      _arrRecent = _crArrFromObj(rest);

  _arrRecent.sort(function (a, b) {
    return b.value - a.value;
  });
  var _arrTop = [],
      _toIndex = Math.min(top, _arrRecent.length);
  for (var i = 0; i < _toIndex; i++) {
    var caption = _arrRecent[i].caption;
    if (caption) {
      _arrTop.push(caption);
    }
  }
  return _arrTop;
};

var _fnTransform = function _fnTransform(json) {
  var labels = [],
      _arrTop5 = _crTopN(json),
      _maxSeria = _arrTop5.length,
      arrSeries = _arrTop5.map(function (seriaName) {
    var _arr = [];
    _arr.seriaName = seriaName;
    return _arr;
  });

  json.forEach(function (row) {
    labels.push(row.Date);
    for (var i = 0; i < _maxSeria; i++) {
      var _arr = arrSeries[i];
      _arr.push(row[_arr.seriaName]);
    }
  });

  return {
    labels: labels,
    data: arrSeries
  };
};

var fStatCounter = function fStatCounter(_ref) {
  var factory = _ref.factory,
      option = _ref.option,
      json = _ref.json,
      parentProps = _ref.parentProps,
      onMoveToTop = _ref.onMoveToTop,
      onCloseItem = _ref.onCloseItem,
      onWatchItem = _ref.onWatchItem;

  var requestType = option.requestType,
      chartType = option.chartType,
      browserType = option.browserType,
      key = option.key,
      caption = option.caption,
      sourceLink = option.sourceLink,
      _data = _filterEmptyDate(json),
      _fnTransform2 = _fnTransform(_data),
      labels = _fnTransform2.labels,
      data = _fnTransform2.data,
      fromDate = labels[0],
      toDate = labels[labels.length - 1];

  return factory.createElement(_StatCounterShare2.default, (0, _extends3.default)({
    key: key,
    caption: caption,
    requestType: requestType,
    fromDate: fromDate,
    toDate: toDate,
    labels: labels,
    data: data,
    sourceLink: sourceLink,
    onMoveToTop: onMoveToTop,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key)
  }, parentProps));
};

exports.default = fStatCounter;
//# sourceMappingURL=fStatCounter.js.map