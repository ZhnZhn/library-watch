"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fNpm = _interopRequireDefault(require("./fNpm"));
const _transformDownloads = downloads => {
    let labels = [],
      data = [];
    Object.keys(downloads).map(key => [key, downloads[key]]).sort((tA, tB) => tB[1] - tA[1]).slice(0, 10).forEach(tuple => {
      labels.push(tuple[0]);
      data.push(tuple[1]);
    });
    return {
      data,
      labels,
      sumDownloads: data.reduce((sum, versionDownloads) => sum + versionDownloads, 0)
    };
  },
  _crElementProps = () => ({
    type: 'bar',
    options: {
      indexAxis: 'y'
    }
  });
const fNpmTopVersions = (0, _fNpm.default)(_transformDownloads, _crElementProps);
var _default = exports.default = fNpmTopVersions;
//# sourceMappingURL=fNpmTopVersions.js.map