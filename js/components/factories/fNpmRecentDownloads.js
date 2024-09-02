"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fNpm = _interopRequireDefault(require("./fNpm"));
const _transformDownloads = function (downloads) {
  if (downloads === void 0) {
    downloads = [{
      day: '0-0-0',
      downloads: 0
    }];
  }
  const labels = [],
    data = [],
    fromDate = downloads[0].day,
    toDate = downloads[downloads.length - 1].day;
  let sumDownloads = 0;
  downloads.forEach(item => {
    const {
        day,
        downloads
      } = item,
      arrDate = day.split('-');
    labels.push(`${arrDate[2]}`);
    data.push(downloads);
    sumDownloads = sumDownloads + downloads;
  });
  return {
    sumDownloads,
    fromDate,
    toDate,
    labels,
    data
  };
};
const fNpmRecentDownloads = (0, _fNpm.default)(_transformDownloads);
var _default = exports.default = fNpmRecentDownloads;
//# sourceMappingURL=fNpmRecentDownloads.js.map