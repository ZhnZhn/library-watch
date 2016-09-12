
const Chart = {

  fLineConfig({ labels=['1', '2'], data=[0, 0] }) {
    return {
      labels: labels,
      datasets: [
        {
          label: 'Downloads',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(128, 192, 64, 0.4)',
          //rgba(128, 192, 64, 1)
          //rgba(75,192,192,1)
          borderColor: 'rgba(128, 192, 64, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(128, 192, 64, 1)',
          //pointBackgroundColor: '#fff',
          pointBackgroundColor : 'rgba(128, 192, 64, 1)',
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: 'rgba(128, 192, 64, 1)',
          //pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderColor: 'rgba(164, 135, 212, 1)',
          pointHoverBorderWidth: 4,
          pointRadius: 5,
          pointHitRadius: 10,
          data: data
        }
      ]
    }
  }

};

export default Chart
