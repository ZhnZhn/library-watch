
const COLORS = [
  '128,192,64',
  '36,156,216',
  '237,86,91',
  '241,174,44',
  '144,89,152'
  //'rgba(128, 192, 64, 1)',
];

const _crBgColor = str => `rgba(${str}, 0.4)`;
const _crBorderColor = str => `rgba(${str}, 1)`;

const _crDataset = ({
  label,
  data,
  strColor=COLORS[0],
  hidden=false
}={}) => {
  const _label = label || data.seriaName || 'Downloads'
  , _borderColor = _crBorderColor(strColor);
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
    pointBackgroundColor : _borderColor,
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

export const fLineConfig = ({
  labels=['1', '2'],
  data=[0, 0]
}) => ({
  labels,
  datasets: [_crDataset({ data })]
})

export const fLineConfigs = ({
  labels=['1', '2'],
  data=[[0, 0]],
  numVisible=5
}) => {
  const numColors = COLORS.length
  , datasets = data.map((arr, index) => _crDataset({
      data: arr,
      strColor: arr.color || COLORS[index % numColors],
      hidden: index >= numVisible ? true : false
  }));
  return {
    labels,
    datasets
  };
};
