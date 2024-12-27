
const COLORS = [
  "128,192,64",
  "36,156,216",
  "237,86,91",
  "241,174,44",
  "144,89,152"
];

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

export const crRgbaBgColor = str => `rgba(${str}, 0.4)`
const _crBorderColor = str => `rgba(${str}, 1)`;

const _crDataset = ({
  label,
  data,
  strColor,
  hidden
}={}) => {
  const _borderColor = _crBorderColor(strColor || COLORS[0]);
  return {
    ...DATASET_OPTIONS,
    label: label || data.seriaName || "Downloads",
    backgroundColor: crRgbaBgColor(strColor),
    borderColor: _borderColor,
    pointBorderColor: _borderColor,
    pointBackgroundColor: _borderColor,
    pointHoverBackgroundColor: _borderColor,
    hidden: !!hidden,
    data
  };
};

export const fLineConfig = ({
  labels=["1", "2"],
  data=[0, 0]
}) => ({
  labels,
  datasets: [_crDataset({ data })]
})

export const fLineConfigs = ({
  labels=["1", "2"],
  data=[[0, 0]],
  numVisible=5
}) => {
  const numColors = COLORS.length
  , datasets = data.map((arr, index) => _crDataset({
      data: arr,
      strColor: arr.color || COLORS[index % numColors],
      hidden: index >= numVisible
  }));
  return {
    labels,
    datasets
  };
}

export const crBarConfig = (
  label,
  labels,
  data,
  backgroundColor,
  borderColor
) => ({
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
})
