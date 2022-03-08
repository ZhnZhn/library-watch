import {
  forwardRef,
  useEffect
} from '../uiApi';

import useKeyEscape from '../hooks/useKeyEscape';
import useToggle from '../hooks/useToggle';
import useDialogFocus from './useDialogFocus';

import crCn from '../zhn-utils/crCn';

import ModalSlider from '../zhn-modal-slider/ModalSlider';
import SvgMore from '../zhn-atoms/SvgMore';
import SvgClose from '../zhn-atoms/SvgClose';
import FlatButton from '../zhn-m/FlatButton';

import Interact from '../../utils/Interact';
import STYLE from './Dialog.Style';

const CL_DRAGGABLE_DIALOG = "draggable-dialog"
, CL_SHOW_POPUP = 'show-popup'
, CL_NOT_SELECTED = 'not-selected'
, CL_MENU_MORE = 'popup-menu dialog__menu-more'

, S_ROOT_DIV_DRAG = {
  ...STYLE.ROOT_DIV,
  position: 'absolute',
  top: 30,
  left: 50,
  zIndex: 10
}
, S_BT_MORE = {
  position: 'absolute',
  top: 2,
  left: 0
}
, S_BT_MORE_SVG = {
  stroke: 'inherit',
  fill: 'inherit'
}
, S_CHILDREN_DIV = { cursor: 'default' }

, FN_NOOP = () => {}
, _isFn = fn => typeof fn === 'function';

const DraggableDialog = forwardRef(({
  menuModel,
  isShow,
  caption,
  children,
  commandButtons,
  onShowChart,
  onClose=FN_NOOP
}, ref) => {
  const [
    _refRootDiv,
    _refBtMore
  ] = useDialogFocus(ref, isShow)
  , [
    _isMore,
    _toggleMore
  ] = useToggle()
  , _hKeyDown = useKeyEscape(onClose)
  , _className = crCn(
      CL_DRAGGABLE_DIALOG,
      [isShow, CL_SHOW_POPUP]
  )
  , _styleShow = isShow
      ? STYLE.SHOW
      : STYLE.HIDE;

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(()=>{
    Interact.makeDragable(_refRootDiv.current);
  }, [])
  // _refRootDiv
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    <div
       ref={_refRootDiv}
       role="dialog"
       tabIndex="-1"
       aria-label={caption}
       aria-hidden={!isShow}
       className={_className}
       style={{
       ...S_ROOT_DIV_DRAG,
       ..._styleShow
       }}
       onKeyDown={_hKeyDown}
     >
     {/*eslint-enable jsx-a11y/no-noninteractive-element-interactions*/}
      <div style={STYLE.CAPTION_DIV}>
        { menuModel && <>
           <ModalSlider
             isShow={_isMore}
             className={CL_MENU_MORE}
             model={menuModel}
             onClose={_toggleMore}
           />
           <SvgMore
             btRef={_refBtMore}
             style={S_BT_MORE}
             svgStyle={S_BT_MORE_SVG}
             onClick={_toggleMore}
           />
         </>
        }
        <span className={CL_NOT_SELECTED}>
          {caption}
        </span>
        <SvgClose
           style={STYLE.SVG_CLOSE}
           onClose={onClose}
        />
      </div>
      <div style={S_CHILDREN_DIV}>
         {children}
      </div>
      <div style={STYLE.COMMAND_DIV}>
        {commandButtons}
        {
          _isFn(onShowChart) && <FlatButton
            key="show"
            rootStyle={STYLE.BT_ROOT}
            caption="Show"
            title="Show Pane Container"
            onClick={onShowChart}
          />
        }
        <FlatButton
          key="close"
          rootStyle={STYLE.BT_ROOT}
          caption="Close"
          title="Close Draggable Dialog"
          onClick={onClose}
        />
      </div>
    </div>
  );
});

export default DraggableDialog
