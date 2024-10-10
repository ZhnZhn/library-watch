"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _StatcounterShare = _interopRequireDefault(require("../items/StatcounterShare"));
const _filterEmptyDate = json => json.data.filter(item => Boolean(item.Date));
const _crArrFromObj = obj => {
  const _arr = [];
  for (let propName in obj) {
    _arr.push({
      caption: propName,
      value: parseFloat(obj[propName])
    });
  }
  return _arr;
};
const _crTopN = function (arr, top) {
  if (top === void 0) {
    top = 5;
  }
  /*eslint-disable no-unused-vars */
  const {
      Date,
      ...rest
    } = arr[arr.length - 1]
    /*eslint-enable no-unused-vars */,
    _arrRecent = _crArrFromObj(rest);
  _arrRecent.sort((a, b) => b.value - a.value);
  const _arrTop = [],
    _toIndex = _arrRecent.length;
  for (let i = 0; i < _toIndex; i++) {
    const caption = _arrRecent[i].caption;
    if (caption) {
      _arrTop.push(caption);
    }
  }
  return _arrTop;
};
const _fnTransform = json => {
  const labels = [],
    _arrTop5 = _crTopN(json),
    _maxSeria = _arrTop5.length,
    arrSeries = _arrTop5.map(seriaName => {
      const _arr = [];
      _arr.seriaName = seriaName;
      return _arr;
    });
  json.forEach(row => {
    labels.push(row.Date);
    for (let i = 0; i < _maxSeria; i++) {
      const _arr = arrSeries[i];
      _arr.push(row[_arr.seriaName]);
    }
  });
  return {
    labels,
    data: arrSeries
  };
};
const _crCaption = function (_temp) {
  let {
    caption,
    region = {}
  } = _temp === void 0 ? {} : _temp;
  return `${region.caption || ''}: ${caption}`;
};
const fStatcounter = _ref => {
  let {
    createElement,
    option,
    json,
    parentProps,
    onMoveToTop,
    onCloseItem,
    onWatchItem
  } = _ref;
  const {
      requestType,
      chartType,
      browserType,
      key,
      sourceLink
    } = option,
    _data = _filterEmptyDate(json),
    {
      labels,
      data
    } = _fnTransform(_data),
    fromDate = labels[0],
    toDate = labels[labels.length - 1],
    _caption = _crCaption(option);
  return createElement(_StatcounterShare.default, {
    key,
    caption: _caption,
    requestType,
    fromDate,
    toDate,
    labels,
    data,
    sourceLink,
    onMoveToTop,
    onCloseItem: (0, _uiApi.bindTo)(onCloseItem, chartType, browserType, key),
    ...parentProps
  });
};
var _default = exports.default = fStatcounter;
//# sourceMappingURL=fStatcounter.js.map