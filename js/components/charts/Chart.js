'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var COLORS = ['rgba(128, 192, 64, 1)'];

var _crDataset = function _crDataset(label, data) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : COLORS[0];
  return {
    label: label,
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(128, 192, 64, 0.4)',
    //rgba(128, 192, 64, 1)
    //rgba(75,192,192,1)
    borderColor: color,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: color,
    //pointBackgroundColor: '#fff',
    pointBackgroundColor: color,
    pointBorderWidth: 1,
    pointHoverRadius: 8,
    pointHoverBackgroundColor: color,
    //pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderColor: 'rgba(164, 135, 212, 1)',
    pointHoverBorderWidth: 4,
    pointRadius: 5,
    pointHitRadius: 10,
    data: data
  };
};

var Chart = {
  fLineConfig: function fLineConfig(_ref) {
    var _ref$labels = _ref.labels,
        labels = _ref$labels === undefined ? ['1', '2'] : _ref$labels,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? [0, 0] : _ref$data;

    return {
      labels: labels,
      datasets: [_crDataset('Downloads', data)]
    };
  },
  fLineConfigs: function fLineConfigs(_ref2) {
    var _ref2$labels = _ref2.labels,
        labels = _ref2$labels === undefined ? ['1', '2'] : _ref2$labels,
        _ref2$data = _ref2.data,
        data = _ref2$data === undefined ? [[0, 0]] : _ref2$data;

    var datasets = [];
    data.forEach(function (arr, index) {
      datasets.push(_crDataset(arr.seriaName, arr, COLORS[index]));
    });
    return {
      labels: labels,
      datasets: datasets
    };
  }
};

exports.default = Chart;
//# sourceMappingURL=Chart.js.map