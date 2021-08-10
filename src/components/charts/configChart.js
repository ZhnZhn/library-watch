
const _assign = Object.assign;

const configChart = Chart => {
  const _d =  Chart.defaults;
  _d.color = 'black'
  _d.font.size = 14
  _d.font.weight = 'bold'

  _d.plugins.tooltip = _assign(_d.plugins.tooltip || {}, {
    titleColor: '#a487d4',
    titleFont: { size: 16 },
    bodyColor: '#80c040',
    bodyFont: { size: 16 }
  })
};

export default configChart
