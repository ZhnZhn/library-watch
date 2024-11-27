"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _CrateDownloads = _interopRequireDefault(require("../items/crate/CrateDownloads"));
const _getDate = item => (item || {}).date;
const _getDownloads = item => (item || {}).downloads;
const _getDateValue = item => [_getDate(item), _getDownloads(item)];
const _crLabel = date => {
  const _dateTokens = date.split("-");
  return _dateTokens.length === 3 ? `${_dateTokens[1]}-${_dateTokens[2]}` : date;
};
const _crHm = extraDownloads => {
  const _hm = {};
  for (const item of extraDownloads) {
    const [date, value] = _getDateValue(item);
    if ((0, _uiApi.isNumber)(value) && (0, _uiApi.isStr)(date)) {
      _hm[date] = value;
    }
  }
  return _hm;
};
const _sumValuesTo = (hm, downloads) => {
  for (const item of downloads) {
    const [date, value] = _getDateValue(item);
    if ((0, _uiApi.isNumber)(value) && (0, _uiApi.isStr)(date)) {
      if ((0, _uiApi.isNumber)(hm[date])) {
        hm[date] += value;
      } else {
        hm[date] = value;
      }
    }
  }
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
const _crSourceLink = repo => `https://crates.io/crates/${repo}`;
const fCrateDownload = options => {
  const {
      createElement,
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
    _extraDownloadsLength = _extraDownloads.length;
  const _hm = _crHm(_extraDownloads);
  _sumValuesTo(_hm, version_downloads);
  const arrDateValue = _crArrDateValue(_hm),
    [labels, data, sumDownloads] = _crLabelsDataSum(arrDateValue);
  return createElement(_CrateDownloads.default, {
    key,
    caption: repo,
    packageName: repo,
    fromDate: _extraDownloadsLength !== 0 ? _getDate(_extraDownloads[0]) : "",
    toDate: _extraDownloadsLength > 0 ? _getDate(_extraDownloads[_extraDownloadsLength - 1]) : "",
    sumDownloads,
    labels,
    data,
    sourceLink: _crSourceLink(repo),
    onMoveToTop,
    onCloseItem
  });
};
var _default = exports.default = fCrateDownload;
//# sourceMappingURL=fCrateDownload.js.map