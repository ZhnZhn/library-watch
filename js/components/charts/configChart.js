"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _assign = Object.assign;

var configChart = function configChart(Chart) {
  var _d = Chart.defaults;
  _d.color = 'black';
  _d.font.size = 14;
  _d.font.weight = 'bold';
  _d.plugins.tooltip = _assign(_d.plugins.tooltip || {}, {
    titleColor: '#a487d4',
    titleFont: {
      size: 16
    },
    bodyColor: '#80c040',
    bodyFont: {
      size: 16
    }
  });
};

var _default = configChart;
exports["default"] = _default;
//# sourceMappingURL=configChart.js.map