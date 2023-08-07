import { useCallback } from '../uiApi';
import ButtonCircle2 from './ButtonCircle2';

const CL_MENU_BADGE = "menu__badge"
, S_OPEN = { color: '#a487d4' };

const AtomCounter = ({
  atom,
  onOpen,
  onClose
}) => {
  const { useAtomValue } = atom
  , { is, v } = useAtomValue()
  , _hClick = useCallback(evt => {
    evt.preventDefault()
    evt.stopPropagation()    
    if (is){
      onClose()
    } else {
      onOpen()
    }
  }, [is, onOpen, onClose])
  , _style = is
     ? S_OPEN
     : null;
  return v === 0 ? null: (
    <ButtonCircle2
      className={CL_MENU_BADGE}
      style={_style}
      caption={v}
      onClick={_hClick}
    />
  );
};

export default AtomCounter
