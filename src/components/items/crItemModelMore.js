import { isFn } from '../../utils/isTypeFn';
import { CL_ROW_MENU_MORE } from '../styleFn';

const _crItem = (
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

const crItemModelMore = ({
  onMoveToTop,
  onToggleButtons
}) => {
  const p0 = [
    _crItem('Move to Top', onMoveToTop),
    isFn(onToggleButtons)
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

export default crItemModelMore
