
import CL from '../styles/CL'

const CL_ROW = CL.ROW_MENU_MORE;

const crModelMore = ({
  chartType,
  onPlusWidth, onMinusWidth,
  onRemoveAll
}) => ({
  baseTitleCl: CL_ROW,
  pageWidth: 180,
  maxPages: 2,
  p0: [
    {
      id: 'p1',
      type: 'sub',
      cn: CL_ROW,
      name: 'Resize'
    },{
      cn: CL_ROW,
      name: 'Remove All Items',
      onClick: onRemoveAll,
      isClose: true
    }
  ],
  p1: [
    {
      cn: CL_ROW,
      name: '+10px to Width',
      onClick: onPlusWidth
    },{
      cn: CL_ROW,
      name: '-10px to Width',
      onClick: onMinusWidth
    }
  ]
});

export default crModelMore
