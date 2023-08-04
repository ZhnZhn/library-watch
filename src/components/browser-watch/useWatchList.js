import {
  useWatchList as _useWl
} from '../../flux/watch-list/watchListStore';

import useGroupOptions from './useGroupOptions';
import useWatchListMsEdit from './useWatchListMsEdit';

const FN_NOOP = () => {};

const useWatchList = (
  forActionType,
  setValidationMessages,
  hClear,
  rerender=FN_NOOP
) => {
  const [
    groupOptions,
    updateGroupOptions
  ] = useGroupOptions();

  useWatchListMsEdit(
    forActionType,
    setValidationMessages,
    hClear
  )
  _useWl(watchList => {
    if (watchList) {
      updateGroupOptions()
      rerender()
    }
  })

  return groupOptions;
}

export default useWatchList
