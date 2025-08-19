import { crClNotSelected } from '../styleFn';
import { isWideWidth } from '../has';
import useRefInit from '../hooks/useRefInit';

const CL_ROW = crClNotSelected("row__pane-topic");

const _crMenuItem = (
  name,
  onClick,
  isInitial = !1
) => onClick ? ({
  name,
  onClick,
  isInitial,
  isClose: !0
}) : null;

const useMenuMore = (
  toggleIsLabels,
  toggleIsDates
) => useRefInit(()=>({
  titleCl: CL_ROW,
  pageWidth: 175,
  maxPages: 1,
  p0: [
    _crMenuItem('Input Labels', toggleIsLabels, isWideWidth()),
    _crMenuItem('Input Dates', toggleIsDates)
  ].filter(Boolean)
}))[0];

export default useMenuMore
