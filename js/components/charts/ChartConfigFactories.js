"use strict";

exports.__esModule = true;
exports.fLineConfigs = exports.fLineConfig = exports.crRgbaBgColor = exports.crLinearScale = exports.crBarConfig = void 0;
var _ChartFn = require("./ChartFn");
const COLORS = ["128,192,64", "36,156,216", "237,86,91", "241,174,44", "144,89,152"];
const DATASET_OPTIONS = {
  fill: false,
  lineTension: 0.1,
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: "miter",
  pointBorderWidth: 1,
  pointHoverRadius: 8,
  pointHoverBorderColor: "rgba(164, 135, 212, 1)",
  pointHoverBorderWidth: 4,
  pointRadius: 5,
  pointHitRadius: 10
};
const crRgbaBgColor = str => `rgba(${str}, 0.4)`;
exports.crRgbaBgColor = crRgbaBgColor;
const _crBorderColor = str => `rgba(${str}, 1)`;
const _crDataset = function (_temp) {
  let {
    label,
    data,
    strColor,
    hidden
  } = _temp === void 0 ? {} : _temp;
  const _strColor = strColor || COLORS[0],
    _borderColor = _crBorderColor(_strColor);
  return {
    ...DATASET_OPTIONS,
    label: label || data.seriaName || "Downloads",
    backgroundColor: crRgbaBgColor(_strColor),
    borderColor: _borderColor,
    pointBorderColor: _borderColor,
    pointBackgroundColor: _borderColor,
    pointHoverBackgroundColor: _borderColor,
    hidden: !!hidden,
    data
  };
};
const fLineConfig = _ref => {
  let {
    labels = ["1", "2"],
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
    labels = ["1", "2"],
    data = [[0, 0]],
    numVisible = 5
  } = _ref2;
  const numColors = COLORS.length,
    datasets = data.map((arr, index) => _crDataset({
      data: arr,
      strColor: arr.color || COLORS[index % numColors],
      hidden: index >= numVisible
    }));
  return {
    labels,
    datasets
  };
};
exports.fLineConfigs = fLineConfigs;
const crBarConfig = (label, labels, data, backgroundColor, borderColor) => ({
  labels,
  datasets: [{
    ...DATASET_OPTIONS,
    label,
    data,
    backgroundColor,
    borderColor,
    borderRadius: 2,
    minBarLength: 10
  }]
});
exports.crBarConfig = crBarConfig;
const crLinearScale = pnAxis => ({
  scales: {
    [pnAxis]: {
      type: "linear",
      ticks: {
        callback: _ChartFn.formatTicks
      }
    }
  }
});
exports.crLinearScale = crLinearScale;
//# sourceMappingURL=ChartConfigFactories.js.map