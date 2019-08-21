
const COLORS = [
  'rgba(128, 192, 64, 1)',
  //'blue'
];

const _crDataset = ( label, data, color=COLORS[0] ) => ({
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
  pointBackgroundColor : color,
  pointBorderWidth: 1,
  pointHoverRadius: 8,
  pointHoverBackgroundColor: color,
  //pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderColor: 'rgba(164, 135, 212, 1)',
  pointHoverBorderWidth: 4,
  pointRadius: 5,
  pointHitRadius: 10,
  data: data
});

const Chart = {

  fLineConfig({ labels=['1', '2'], data=[0, 0] }) {
    return {
      labels: labels,
      datasets: [
        _crDataset('Downloads', data)
      ]
    }
  },

  fLineConfigs({ labels=['1', '2'], data=[[0, 0]] }) {
    const datasets = [];
    data.forEach((arr, index) => {
      datasets.push(_crDataset(arr.seriaName, arr, COLORS[index]))
    })
    return {
      labels,
      datasets
    };
  },

};

export default Chart
