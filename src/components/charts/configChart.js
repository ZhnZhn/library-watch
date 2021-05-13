
const _assign = Object.assign;

const configChart = Chart => {
  _assign(Chart.defaults.global, {
    defaultFontColor: 'black',
    defaultFontSize: 14,
    defaultFontStyle: 'bold'
  })

  _assign(Chart.defaults.global.tooltips, {
    titleFontColor: '#a487d4',
    titleFontSize: 16,
    bodyFontColor: '#80c040',
    bodyFontSize: 16
  })

  _assign(Chart.defaults.global.legend, {
    display: true,
    position: 'bottom'
  })
};

export default configChart
