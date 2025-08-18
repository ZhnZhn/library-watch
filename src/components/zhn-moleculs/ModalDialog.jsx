import {
  useRef,
  useCallback,
  useEffect,
  getRefValue,
  setRefValue
} from '../uiApi';
import useRerender from '../hooks/useRerender';
import { useKeyEscape } from '../hooks/fUseKey';

import Caption from './DialogCaption'
import FlatButton from '../zhn-m/FlatButton'

import {
  CL_SHOW_POPUP,
  CL_HIDE_POPUP,
  S_SHOW,
  S_HIDE,
  S_DIALOG_DIV,
  S_COMMAND_DIV
} from './Dialog.Style';

const S_HIDE_POPUP = {
  opacity: 0,
  transform: 'scaleY(0)'
}
, S_MODAL_DIALOG = {
  ...S_DIALOG_DIV,
  position: 'absolute',
  top: '20%',
  left: '40%',
  display: 'block',
  zIndex: 10
};

const ModalDialog = ({
  isShow,
  isWithButton=true,
  timeout=450,
  style,
  caption,
  commandButtons,
  onClose,
  children
}) => {
  const _rerenderComp = useRerender()
  , _hKeyDown = useKeyEscape(onClose)
  , _refWasClosing = useRef()
  , _hClickDialog = useCallback(event => {
    event.stopPropagation()
  }, []);

  useEffect(() => {
    if (getRefValue(_refWasClosing)){
      setTimeout(_rerenderComp, timeout)
    }
  })

  let _className, _style;
  if (getRefValue(_refWasClosing)){
    _style = S_HIDE;
    setRefValue(_refWasClosing, false)
  } else {
    [_className, _style] = isShow
      ? [CL_SHOW_POPUP, S_SHOW]
      : [CL_HIDE_POPUP, S_HIDE_POPUP]
    if (!isShow){
      setRefValue(_refWasClosing, true)
    }
  }

  return (
    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    <div
       role="dialog"
       tabIndex="-1"
       aria-label={caption}
       aria-hidden={!isShow}
       className={_className}
       style={{
         ...S_MODAL_DIALOG,
         ...style,
         ..._style
       }}
       onClick={_hClickDialog}
       onKeyDown={_hKeyDown}
    >
    {/*eslint-enable jsx-a11y/no-noninteractive-element-interactions*/}
       <Caption
         caption={caption}
         onClose={onClose}
       />
       <div>
        {children}
       </div>
       {isWithButton && <div style={S_COMMAND_DIV}>
           {commandButtons}
           <FlatButton
             key="close"
             caption="Close"
             title="Click to close modal dialog"
             timeout={0}
             onClick={onClose}
           />
         </div>
       }
   </div>
  );
};

export default ModalDialog
