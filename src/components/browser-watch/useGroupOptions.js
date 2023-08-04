import {
  getWatchGroups
} from '../../flux/watch-list/watchListStore';

import useRefInit from '../hooks/useRefInit';
import useRerender from '../hooks/useRerender';

const useGroupOptions = (store) => {
  const [
    groupOptions,
    _refGroupOptions
  ] = useRefInit(getWatchGroups)
  , _rerender = useRerender()
  , updateGroupOptions = () => {
    _refGroupOptions.current = getWatchGroups()
    _rerender()
  }
  return [
    groupOptions,
    updateGroupOptions
  ];
};

export default useGroupOptions
