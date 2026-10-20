import { TITLE_BUTTON_SAVE } from '../../constants/Tokens'
import { saveWatchList } from '../../flux/watch-list/watchListStore';

import { useState } from '../uiApi';
import { crStyle2 } from '../styleFn';

import useWatchEditedColor from '../styles/useWatchEditedColor';

import ButtonCircle from '../zhn/ButtonCircle';

const CAPTION = "S"
, _crBtStyle = color => color
  ? {
    color,
    borderColor: color
  } : void 0;

const ButtonSave = ({
  className,
  style
}) => {
  const _color = useWatchEditedColor()
  , _style = crStyle2(
    style,
    _crBtStyle(_color)
  );

  return (
    <ButtonCircle
       className={className}
       caption={CAPTION}
       title={TITLE_BUTTON_SAVE}
       style={_style}
       onClick={saveWatchList}
    />
  );
};

export default ButtonSave
