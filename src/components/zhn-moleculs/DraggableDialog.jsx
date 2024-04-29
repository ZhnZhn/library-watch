import { crClNotSelected } from '../styleFn';

import useKeyEscape from '../hooks/useKeyEscape';
import useToggle from '../hooks/useToggle';
import useXYMovable from '../hooks/useXYMovable';
import useDialogFocus from './useDialogFocus';

import crCn from '../zhn-utils/crCn';

import ModalSlider from '../zhn-modal-slider/ModalSlider';
import SvgMore from '../zhn-atoms/SvgMore';
import SvgClose from '../zhn-atoms/SvgClose';
import FlatButton from '../zhn-m/FlatButton';

import {
  CL_SHOW_POPUP,
  S_SHOW,
  S_HIDE,
  S_DIALOG_DIV,
  S_CAPTION_DIV,
  S_SVG_CLOSE,
  S_COMMAND_DIV,
  S_BT_ROOT
} from './Dialog.Style';

const CL_DRAGGABLE_DIALOG = "draggable-dialog"
, CL_NOT_SELECTED = crClNotSelected()
, CL_MENU_MORE = 'popup-menu dialog__menu-more'

, S_DRAGGABLE_DIALOG = {
  ...S_DIALOG_DIV,
  position: 'absolute',
  top: 30,
  left: 50,
  zIndex: 10
}
, S_CAPTION = {
  ...S_CAPTION_DIV,
  cursor: 'move'
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

, FN_NOOP = () => {}
, _isFn = fn => typeof fn === 'function';

const DraggableDialog = ({
  refEl,
  menuModel,
  isShow,
  caption,
  children,
  commandButtons,
  onShowChart,
  onClose=FN_NOOP
}) => {
  const [
    _refRootDiv,
    _refBtMore
  ] = useDialogFocus(refEl, isShow)
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
      ? S_SHOW
      : S_HIDE;

  useXYMovable(_refRootDiv)

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
       ...S_DRAGGABLE_DIALOG,
       ..._styleShow
       }}
       onKeyDown={_hKeyDown}
     >
     {/*eslint-enable jsx-a11y/no-noninteractive-element-interactions*/}
      <div style={S_CAPTION}>
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
           style={S_SVG_CLOSE}
           onClose={onClose}
        />
      </div>
      <div>
         {children}
      </div>
      <div style={S_COMMAND_DIV}>
        {commandButtons}
        {
          _isFn(onShowChart) && <FlatButton
            key="show"
            timeout={0}
            rootStyle={S_BT_ROOT}
            caption="Show"
            title="Show Pane Container"
            onClick={onShowChart}
          />
        }
        <FlatButton
          key="close"
          timeout={0}
          rootStyle={S_BT_ROOT}
          caption="Close"
          title="Close Draggable Dialog"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default DraggableDialog
