"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ChartConfigFactories = require("../charts/ChartConfigFactories");
var _fNpm = _interopRequireDefault(require("./fNpm"));
const _isReleaseVersion = a => (a.split(".")[2] || "").indexOf("-") === -1;
const _compareToken = (a, b) => parseInt(a) > parseInt(b) ? -1 : 1;
const _compareByVersions = (a, b) => {
  const arrA = a.split("."),
    arrB = b.split(".");
  if (arrA[0] === arrB[0]) {
    return arrA[1] === arrB[1] ? _compareToken(arrA[2], arrB[2]) : _compareToken(arrA[1], arrB[1]);
  }
  return _compareToken(arrA[0], arrB[0]);
};
const _findRecentVersion = downloadsKeys => downloadsKeys.filter(_isReleaseVersion).sort(_compareByVersions)[0];
const RGBA_VERSION = (0, _ChartConfigFactories.crRgbaBgColor)("128,192,64");
const RGBA_RECENT_VERSION = (0, _ChartConfigFactories.crRgbaBgColor)("144,89,152");
const _transformDownloads = downloads => {
    const labels = [],
      data = [],
      backgroundColors = [],
      downloadsKeys = Object.keys(downloads),
      recentVersion = _findRecentVersion([...downloadsKeys]);
    let isRecentVersion = !1;
    downloadsKeys.map(key => [key, downloads[key]]).sort((tA, tB) => tB[1] - tA[1]).slice(0, 10).forEach(_ref => {
      let [version, numberOfDownloads] = _ref;
      labels.push(version);
      data.push(numberOfDownloads);
      if (version === recentVersion) {
        isRecentVersion = !0;
        backgroundColors.push(RGBA_RECENT_VERSION);
      } else {
        backgroundColors.push(RGBA_VERSION);
      }
    });
    if (!isRecentVersion && recentVersion) {
      labels.push(recentVersion);
      data.push(downloads[recentVersion]);
      backgroundColors.push(RGBA_RECENT_VERSION);
    }
    return {
      chartConfig: (0, _ChartConfigFactories.crBarConfig)("Downloads", labels, data, backgroundColors, [...backgroundColors]),
      sumDownloads: data.reduce((sum, versionDownloads) => sum + versionDownloads, 0)
    };
  },
  _crElementProps = () => ({
    type: "bar",
    options: {
      indexAxis: "y"
    }
  });
const fNpmTopVersions = (0, _fNpm.default)(_transformDownloads, _crElementProps);
var _default = exports.default = fNpmTopVersions;
//# sourceMappingURL=fNpmTopVersions.js.map