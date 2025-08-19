import { isFn } from '../../utils/isTypeFn';

const _crItem = (
  name,
  onClick,
  isClose=true
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
      ? _crItem('Toggle Buttons', onToggleButtons)
      : void 0
  ].filter(Boolean);

  return {
    pageWidth: 150,
    maxPages: 1,
    p0
  };
};

export default crItemModelMore
