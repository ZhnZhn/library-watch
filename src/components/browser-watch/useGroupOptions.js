import useRefInit from '../hooks/useRefInit';
import useRerender from '../hooks/useRerender';

const useGroupOptions = (store) => {
  const [
    groupOptions,
    _refGroupOptions
  ] = useRefInit(store.getWatchGroups)
  , _rerenderComp = useRerender()
  , updateGroupOptions = () => {
    _refGroupOptions.current = store.getWatchGroups()
    _rerenderComp()
  }
  return [
    groupOptions,
    updateGroupOptions
  ];
};

export default useGroupOptions
