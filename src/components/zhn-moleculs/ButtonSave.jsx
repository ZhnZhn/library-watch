import { useState } from '../uiApi';

import useListen from '../hooks/useListen';

import WatchActions, { WatchActionTypes } from '../../flux/actions/WatchActions';
import ButtonCircle from '../zhn-atoms/ButtonCircle';

const CAPTION = "S"
, TITLE = "Save Watch Items to Locale Storage"
, S_NOT_WATCH_EDITED = {
   borderColor : 'gray',
   color : 'gray'
};

const ButtonSave = ({
  className,
  style,
  store
}) => {
  const [
    isWatchEdited,
    setIsWatchEdited
  ] = useState(() => store.getWatchEdited());

  useListen(store, (actionType, value) => {
    if (actionType === WatchActionTypes.SET_WATCH_EDITED){
      setIsWatchEdited(value)
    }
  })

  const _style = isWatchEdited
    ? style
    : {...style, ...S_NOT_WATCH_EDITED};

  return (
    <ButtonCircle
       className={className}
       caption={CAPTION}
       title={TITLE}
       style={_style}
       onClick={WatchActions.saveWatch}
    />
  );
};

export default ButtonSave
