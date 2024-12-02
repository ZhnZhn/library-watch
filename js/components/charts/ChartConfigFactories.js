"use strict";

exports.__esModule = true;
exports.fLineConfigs = exports.fLineConfig = void 0;
const COLORS = ['128,192,64', '36,156,216', '237,86,91', '241,174,44', '144,89,152'
//'rgba(128, 192, 64, 1)',
];
const _crBgColor = str => `rgba(${str}, 0.4)`;
const _crBorderColor = str => `rgba(${str}, 1)`;
const _crDataset = function (_temp) {
  let {
    label,
    data,
    strColor = COLORS[0],
    hidden = false
  } = _temp === void 0 ? {} : _temp;
  const _label = label || data.seriaName || 'Downloads',
    _borderColor = _crBorderColor(strColor);
  return {
    hidden,
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
const fLineConfig = _ref => {
  let {
    labels = ['1', '2'],
    data = [0, 0]
  } = _ref;
  return {
    labels,
    datasets: [_crDataset({
      data
    })]
  };
};
exports.fLineConfig = fLineConfig;
const fLineConfigs = _ref2 => {
  let {
    labels = ['1', '2'],
    data = [[0, 0]],
    numVisible = 5
  } = _ref2;
  const numColors = COLORS.length,
    datasets = data.map((arr, index) => _crDataset({
      data: arr,
      strColor: arr.color || COLORS[index % numColors],
      hidden: index >= numVisible ? true : false
    }));
  return {
    labels,
    datasets
  };
};
exports.fLineConfigs = fLineConfigs;
//# sourceMappingURL=ChartConfigFactories.js.map