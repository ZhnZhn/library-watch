"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _StatcounterShare = _interopRequireDefault(require("../items/StatcounterShare"));
var _helperFn = require("./helperFn");
var _jsxRuntime = require("react/jsx-runtime");
const _filterEmptyDate = json => json.data.filter(item => Boolean(item.Date));
const _crArrFromObj = obj => (0, _helperFn.getObjectKeys)(obj).map(propName => ({
  caption: propName,
  value: parseFloat(obj[propName])
}));
const _compareByValue = (a, b) => b.value - a.value;
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
  _arrRecent.sort(_compareByValue);
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
const _crLabelsDataTuple = json => {
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
  return [labels, arrSeries];
};
const _crCaption = _ref => {
  let {
    caption,
    region
  } = _ref;
  return `${(region || {}).caption || ""}: ${caption}`;
};
const fStatcounter = _ref2 => {
  let {
    option,
    json,
    parentProps,
    onMoveToTop,
    onCloseItem,
    onWatchItem
  } = _ref2;
  const [labels, data] = _crLabelsDataTuple(_filterEmptyDate(json));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_StatcounterShare.default, {
    caption: _crCaption(option),
    requestType: option.requestType,
    fromDate: labels[0],
    toDate: labels[labels.length - 1],
    labels: labels,
    data: data,
    sourceLink: option.sourceLink,
    onMoveToTop: onMoveToTop,
    onCloseItem: onCloseItem,
    ...parentProps
  }, option.key);
};
var _default = exports.default = fStatcounter;
//# sourceMappingURL=fStatcounter.js.map