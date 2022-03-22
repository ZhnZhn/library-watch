import useRefInit from '../hooks/useRefInit';
import useRerender from '../hooks/useRerender';

const _setRefValue = (ref, value) => ref.current = value;

const useGroupOptions = (store) => {
  const [
    groupOptions,
    _refGroupOptions
  ] = useRefInit(store.getWatchGroups)
  , _rerenderComp = useRerender()
  , updateGroupOptions = () => {
    _setRefValue(_refGroupOptions, store.getWatchGroups())
    _rerenderComp()
  }
  return [
    groupOptions,
    updateGroupOptions
  ];
};

export default useGroupOptions
