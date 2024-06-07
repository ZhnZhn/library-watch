import { useState } from '../uiApi';

import {
  getIsWatchEdited,
  useIsWatchEdited,
  saveWatchList
} from '../../flux/watch-list/watchListStore';

import { crStyle2 } from '../zhn-utils/crStyle';
import ButtonCircle from '../zhn/ButtonCircle';

const CAPTION = "S"
, TITLE = "Save Watch Items to Locale Storage"
, COLOR_NOT_WATCH_EDITED = 'grey'
, S_NOT_WATCH_EDITED = {
   borderColor: COLOR_NOT_WATCH_EDITED,
   color: COLOR_NOT_WATCH_EDITED
};


const ButtonSave = ({
  className,
  style
}) => {
  const [
    isWatchEdited,
    setIsWatchEdited
  ] = useState(getIsWatchEdited);

  useIsWatchEdited(isWatchEdited => {
    setIsWatchEdited(!!isWatchEdited)
  })

  const _style = crStyle2(
    style,
    isWatchEdited && S_NOT_WATCH_EDITED
  );

  return (
    <ButtonCircle
       className={className}
       caption={CAPTION}
       title={TITLE}
       style={_style}
       onClick={saveWatchList}
    />
  );
};

export default ButtonSave
