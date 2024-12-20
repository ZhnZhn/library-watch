"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fNpm = _interopRequireDefault(require("./fNpm"));
const _compareToken = (a, b) => parseInt(a) > parseInt(b) ? -1 : 1;
const _findRecentVersion = downloadsKeys => {
  let recentVersion = "";
  try {
    recentVersion = downloadsKeys.filter(a => a.split(".")[2].indexOf("-") === -1).sort((a, b) => {
      const arrA = a.split("."),
        arrB = b.split(".");
      if (arrA[0] === arrB[0]) {
        return arrA[1] === arrB[1] ? _compareToken(arrA[2], arrB[2]) : _compareToken(arrA[1], arrB[1]);
      }
      return _compareToken(arrA[0], arrB[0]);
    })[0];
  } catch (err) {
    console.log(err);
  }
  return recentVersion;
};
const _transformDownloads = downloads => {
    const labels = [],
      data = [],
      downloadsKeys = Object.keys(downloads),
      recentVersion = _findRecentVersion([...downloadsKeys]);
    let isRecentVersion = !1;
    downloadsKeys.map(key => [key, downloads[key]]).sort((tA, tB) => tB[1] - tA[1]).slice(0, 10).forEach(_ref => {
      let [version, numberOfDownloads] = _ref;
      labels.push(version);
      data.push(numberOfDownloads);
      if (version === recentVersion) {
        isRecentVersion = !0;
      }
    });
    if (!isRecentVersion && recentVersion) {
      labels.push(recentVersion);
      data.push(downloads[recentVersion]);
    }
    return {
      data,
      labels,
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