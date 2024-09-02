import { CL_ROW_MENU_MORE } from '../styleFn';

const _isFn = fn => typeof fn === 'function'
, _crItem = (
  name,
  onClick,
  cn=CL_ROW_MENU_MORE,
  isClose=true
) => ({
  name,
  onClick,
  cn,
  isClose
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
    titleCl: CL_ROW_MENU_MORE,
    pageWidth: 150,
    maxPages: 1,
    p0
  };
};

export default crNpmModelMore
