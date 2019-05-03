
import CL from '../styles/CL';

const CL_ROW = CL.ROW_MENU_MORE;

const _isFn = fn => typeof fn === 'function';
const _crItem = (
  name, onClick,
  cn=CL_ROW, isClose=true
) => ({
  name, onClick,
  cn, isClose
});

const crNpmModelMore = ({
  onMoveToTop,
  onToggleButtons
}) => {
  const p0 = [
    _crItem('Move to Top', onMoveToTop),
    _isFn(onToggleButtons)
      ? _crItem('Toggle Buttons', onToggleButtons)
      : void 0
  ].filter(Boolean);

  return {
    baseTitleCl: CL_ROW,
    pageWidth: 150,
    maxPages: 1,
    p0
  };
};

export default crNpmModelMore
