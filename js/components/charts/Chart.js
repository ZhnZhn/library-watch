"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var COLORS = ['128,192,64', '36,156,216', '237,86,91', '241,174,44', '144,89,152' //'rgba(128, 192, 64, 1)',
];

var _crBgColor = function _crBgColor(str) {
  return "rgba(" + str + ", 0.4)";
};

var _crBorderColor = function _crBorderColor(str) {
  return "rgba(" + str + ", 1)";
};

var _crDataset = function _crDataset(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      label = _ref.label,
      data = _ref.data,
      _ref$strColor = _ref.strColor,
      strColor = _ref$strColor === void 0 ? COLORS[0] : _ref$strColor,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden;

  var _label = label || data.seriaName || 'Downloads',
      _borderColor = _crBorderColor(strColor);

  return {
    hidden: hidden,
    label: _label,
    fill: false,
    lineTension: 0.1,
    backgroundColor: _crBgColor(strColor),
    //rgba(128, 192, 64, 1)
    //rgba(75,192,192,1)
    borderColor: _borderColor,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: _borderColor,
    //pointBackgroundColor: '#fff',
    pointBackgroundColor: _borderColor,
    pointBorderWidth: 1,
    pointHoverRadius: 8,
    pointHoverBackgroundColor: _borderColor,
    //pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderColor: 'rgba(164, 135, 212, 1)',
    pointHoverBorderWidth: 4,
    pointRadius: 5,
    pointHitRadius: 10,
    data: data
  };
};

var Chart = {
  fLineConfig: function fLineConfig(_ref2) {
    var _ref2$labels = _ref2.labels,
        labels = _ref2$labels === void 0 ? ['1', '2'] : _ref2$labels,
        _ref2$data = _ref2.data,
        data = _ref2$data === void 0 ? [0, 0] : _ref2$data;
    return {
      labels: labels,
      datasets: [_crDataset({
        data: data
      })]
    };
  },
  fLineConfigs: function fLineConfigs(_ref3) {
    var _ref3$labels = _ref3.labels,
        labels = _ref3$labels === void 0 ? ['1', '2'] : _ref3$labels,
        _ref3$data = _ref3.data,
        data = _ref3$data === void 0 ? [[0, 0]] : _ref3$data,
        _ref3$numVisible = _ref3.numVisible,
        numVisible = _ref3$numVisible === void 0 ? 5 : _ref3$numVisible;
    var datasets = [],
        numColors = COLORS.length;
    data.forEach(function (arr, index) {
      datasets.push(_crDataset({
        data: arr,
        strColor: COLORS[index % numColors],
        hidden: index >= numVisible ? true : false
      }));
    });
    return {
      labels: labels,
      datasets: datasets
    };
  }
};
var _default = Chart;
exports["default"] = _default;
//# sourceMappingURL=Chart.js.map