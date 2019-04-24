
import CL from '../styles/CL';

const CL_ROW = CL.ROW_MENU_MORE;

const crNpmModelMore = ({ onMoveToTop }) => ({
  baseTitleCl: CL_ROW,
  pageWidth: 130,
  maxPages: 1,
  p0: [
    {
      cn: CL_ROW,
      name: 'Move to Top',
      onClick: onMoveToTop,
      isClose: true
    }
  ]
});

export default crNpmModelMore
