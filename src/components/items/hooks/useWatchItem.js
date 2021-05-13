import { useCallback } from 'react';

import crItemWatch from './crItemWatch'

const useWatchItem = ({
  onWatchItem,
  repo,
  requestType,  
}, itemDescription) => useCallback(() => {
      onWatchItem(crItemWatch(repo, requestType, itemDescription));
//eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

export default useWatchItem
