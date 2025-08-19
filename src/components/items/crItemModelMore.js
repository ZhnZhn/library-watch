import { isFn } from '../../utils/isTypeFn';

const _crItem = (
  name,
  onClick,
  isClose=!0
) => ({
  name,
  onClick,
  isClose
});

const crItemModelMore = ({
  onMoveToTop,
  onToggleButtons
}) => {
  const p0 = [
    _crItem('Move to Top', onMoveToTop),
    isFn(onToggleButtons)
      ? {..._crItem('Buttom Buttons', onToggleButtons), isInitial: !0}
      : void 0
  ].filter(Boolean);

  return {
    pageWidth: 195,
    maxPages: 1,
    p0
  };
};

export default crItemModelMore
