import { isWideWidth } from '../has';
import useToggle from '../hooks/useToggle';

import useMenuMore from './useMenuMore';

const useDialog = (
  toggleIsShowDates
) => {
  const [
    isShowLabels,
    _toggleIsShowLabels
  ] = useToggle(isWideWidth)
  , _MENU_MORE = useMenuMore(
     _toggleIsShowLabels,
     toggleIsShowDates
  );

  return [
    _MENU_MORE,
    isShowLabels
  ];
};

export default useDialog
