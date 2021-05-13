import { useCallback } from 'react';

import crItemWatch from './crItemWatch';

const useWatchItem = (
  onWatchItem,
  props,
  itemDescription,
  crCaption
) => useCallback(() => {
   onWatchItem(crItemWatch(props, itemDescription, crCaption));
//eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

export default useWatchItem
