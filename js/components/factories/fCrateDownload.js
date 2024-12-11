"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _CrateDownloads = _interopRequireDefault(require("../items/crate/CrateDownloads"));
var _helperFn = require("./helperFn");
var _jsxRuntime = require("react/jsx-runtime");
//112,15,44 #700f2c
//181,34,52 #b52234
//215,103,85 #d76755
//244,165,130 #f4a582
//146,197,222 #92c5de
//82,156,199 #529cc7
const COLORS = ["112,15,44", "181,34,52", "215,103,85", "244,165,130", "146,197,222", "82,156,199"];
const TOTAL_COLOR = "128,192,64";
const _getDate = item => (item || {}).date;
const _getDownloads = item => (item || {}).downloads;
const _getVersion = item => (item || {}).version;
const _getDateValue = item => [_getDate(item), _getDownloads(item), _getVersion(item)];
const _crLabel = date => {
  const _dateTokens = date.split("-");
  return (0, _helperFn.getArrLength)(_dateTokens) === 3 ? `${_dateTokens[1]}-${_dateTokens[2]}` : date;
};
const _crHm = extraDownloads => {
  const _hm = {};
  const _otherData = [];
  for (const item of extraDownloads) {
    const [date, value] = _getDateValue(item);
    if ((0, _uiApi.isNumber)(value) && (0, _uiApi.isStr)(date)) {
      _hm[date] = value;
      _otherData.push([date, value]);
    }
  }
  _otherData.sort((t1, t2) => t1 > t2 ? 1 : t1 < t2 ? -1 : 0);
  return [_hm, _otherData.map(t => t[1])];
};
const _sumValuesTo = (hm, downloads) => {
  const _hmVersions = {};
  for (const item of downloads) {
    const [date, value, version] = _getDateValue(item);
    if ((0, _uiApi.isNumber)(value) && (0, _uiApi.isStr)(date)) {
      if ((0, _uiApi.isNumber)(hm[date])) {
        hm[date] += value;
      } else {
        hm[date] = value;
      }
      if (_hmVersions[version]) {
        _hmVersions[version].push(value);
      } else {
        const _data = [value];
        _data.seriaName = version;
        _hmVersions[version] = _data;
      }
    }
  }
  return (0, _helperFn.getObjectKeys)(_hmVersions).map(propName => _hmVersions[propName]).sort((arrA, arrB) => arrB.seriaName - arrA.seriaName);
};
const _crArrDateValue = hm => Object.keys(hm).map(key => [key, hm[key]]).sort((t1, t2) => t1 > t2 ? 1 : -1);
const _crLabelsDataSum = arrDateValue => {
  const labels = [],
    data = [];
  let sumDownloads = 0;
  for (const tuple of arrDateValue) {
    labels.push(_crLabel(tuple[0]));
    data.push(tuple[1]);
    sumDownloads += tuple[1];
  }
  return [labels, data, sumDownloads];
};
const _updateSeries = (series, seriaName, color) => {
  series.seriaName = seriaName;
  series.color = color;
  return series;
};
const _updateDataVersions = (totalData, otherData, _dataVersions, _hmVersions) => {
  const _dataLength = (0, _helperFn.getArrLength)(totalData);
  for (let i = 0; i < (0, _helperFn.getArrLength)(_dataVersions); i++) {
    const _series = _dataVersions[i],
      _diffNumber = _dataLength - (0, _helperFn.getArrLength)(_series);
    _updateSeries(_series, _hmVersions[_series.seriaName], COLORS[i]);
    for (let j = 0; j < _diffNumber; j++) {
      _series.unshift(NaN);
    }
  }
  _dataVersions.push(_updateSeries(otherData, "Other", COLORS[5]), _updateSeries(totalData, "Total", TOTAL_COLOR));
};
const _crHmVersions = json1 => {
  const _hm = {},
    versions = json1.versions || [];
  for (let item of versions) {
    _hm[item.id] = item.num;
  }
  return _hm;
};
const fCrateDownload = options => {
  const {
      option,
      json,
      onMoveToTop,
      onCloseItem
    } = options,
    {
      repo,
      key
    } = option,
    {
      version_downloads,
      meta
    } = json,
    _extraDownloads = meta.extra_downloads,
    _extraDownloadsLength = (0, _helperFn.getArrLength)(_extraDownloads),
    [_hm, otherData] = _crHm(_extraDownloads),
    _dataVersions = _sumValuesTo(_hm, version_downloads),
    arrDateValue = _crArrDateValue(_hm),
    [labels, data, sumDownloads] = _crLabelsDataSum(arrDateValue);
  _updateDataVersions(data, otherData, _dataVersions, _crHmVersions(option.json1));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CrateDownloads.default, {
    caption: repo,
    packageName: repo,
    fromDate: _extraDownloadsLength !== 0 ? _getDate(_extraDownloads[0]) : "",
    toDate: _extraDownloadsLength > 0 ? _getDate(_extraDownloads[_extraDownloadsLength - 1]) : "",
    sumDownloads: sumDownloads,
    labels: labels,
    data: _dataVersions,
    sourceLink: option.sourceLink,
    onMoveToTop: onMoveToTop,
    onCloseItem: onCloseItem
  }, key);
};
var _default = exports.default = fCrateDownload;
//# sourceMappingURL=fCrateDownload.js.map