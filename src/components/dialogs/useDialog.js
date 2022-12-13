import { isWideWidth } from '../has';
import useToggle from '../hooks/useToggle';

import useMenuMore from './useMenuMore';
import useToolbarButtons from './useToolbarButtons';

const useDialog = (
  toggleIsShowDates
) => {
  const [
    isToolbar,
    _toggleIsToolbar
  ] = useToggle(true)
  , [
    isShowLabels,
    _toggleIsShowLabels
  ] = useToggle(isWideWidth)
  , _MENU_MORE = useMenuMore(
     _toggleIsToolbar,
     _toggleIsShowLabels,
     toggleIsShowDates
  )
  , _TOOLBAR_BUTTONS = useToolbarButtons(
     _toggleIsShowLabels,
     toggleIsShowDates
  );

  return [
    _MENU_MORE,
    _TOOLBAR_BUTTONS,
    isToolbar,
    isShowLabels
  ];
};

export default useDialog
