import { useSyncExternalStore } from '../uiApi';
import useRefInit from './useRefInit';

const useSubscribe = (
  store,
  selector,
  onChange
) => {
  const _subscribe = useRefInit(() => (rerender) => (rerender(), store.subscribe(selector, onChange)))[0]
  , _getSnapshot = useRefInit(() => () => selector(store.getState()))[0];
  useSyncExternalStore(
    _subscribe,
    _getSnapshot
  )
}

export default useSubscribe
