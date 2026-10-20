import { useState } from '../uiApi';
import {
  getIsWatchEdited,
  useIsWatchEdited
} from '../../flux/watch-list/watchListStore';

const WATCH_EDITED_COLOR = "#607d8b";

const useWatchEditedColor = () => {
  const [
    isWatchEdited,
    setIsWatchEdited
  ] = useState(getIsWatchEdited);

  useIsWatchEdited(isWatchEdited => {
    setIsWatchEdited(!!isWatchEdited)
  })
  return isWatchEdited
    ? WATCH_EDITED_COLOR
    : void 0;
}

export default useWatchEditedColor
