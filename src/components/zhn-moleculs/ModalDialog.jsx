import {
  useRef,
  useCallback,
  useEffect,
  getRefValue,
  setRefValue
} from '../uiApi';
import useRerender from '../hooks/useRerender';
import useKeyEscape from '../hooks/useKeyEscape';

import Caption from './DialogCaption'
import FlatButton from '../zhn-m/FlatButton'

const CL_SHOWING = 'show-popup'
, CL_HIDING = 'hide-popup'

, S_SHOW = { display: 'block' }
, S_HIDE = { display: 'none' }
, S_HIDE_POPUP = {
  opacity: 0,
  transform: 'scaleY(0)'
}
, S_DIALOG_DIV = {
  position: 'absolute',
  top: '20%',
  left: '40%',
  display: 'block',
  backgroundColor: '#4d4d4d',
  border: 'solid 2px #232f3b',
  borderRadius: '5px',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
  zIndex: 10
}
, S_COMMAND_DIV = {
   textAlign: 'right',
   margin: '8px 4px 10px 0',
   cursor: 'default'
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
      ? [CL_SHOWING, S_SHOW]
      : [CL_HIDING, S_HIDE_POPUP]
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
         ...S_DIALOG_DIV,
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
