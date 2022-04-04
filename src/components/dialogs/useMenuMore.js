import useRefInit from '../hooks/useRefInit';

const CL_ROW = 'row__pane-topic not-selected';

const _crMenuItem = (
  name,
  onClick
) => onClick ? ({
  name,
  onClick,
  isClose: true
}) : null;

const useMenuMore = (
  toggleIsToolbar,
  toggleIsLabels,
  toggleIsDates
) => useRefInit(()=>({
  titleCl: CL_ROW,
  pageWidth: 160,
  maxPages: 1,
  p0: [
    _crMenuItem('Toggle Dates', toggleIsDates),
    _crMenuItem('Toggle Labels', toggleIsLabels),
    _crMenuItem('Toggle ToolBar', toggleIsToolbar)
  ].filter(Boolean)
}))[0];

export default useMenuMore
