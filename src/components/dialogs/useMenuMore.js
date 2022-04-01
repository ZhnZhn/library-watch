import useRefInit from '../hooks/useRefInit';

const CL_ROW = 'row__pane-topic not-selected';

const _crMenuItem = (
  name,
  onClick
) => ({
  name,
  onClick,
  isClose: true
});

const useMenuMore = (
  toggleIsLabels,
  toggleIsToolbar
) => useRefInit(()=>({
  titleCl: CL_ROW,
  pageWidth: 160,
  maxPages: 1,
  p0: [
    _crMenuItem('Toggle Labels', toggleIsLabels),
    _crMenuItem('Toggle ToolBar', toggleIsToolbar)
  ]
}))[0];

export default useMenuMore
