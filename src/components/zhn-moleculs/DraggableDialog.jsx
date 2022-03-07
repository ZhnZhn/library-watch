import { Component } from 'react';
//import PropTypes from "prop-types";

import crCn from '../zhn-utils/crCn';
import {
  isKeyEscape,
  focusNode
} from '../zhn-utils/utils';

import ModalSlider from '../zhn-modal-slider/ModalSlider';
import SvgMore from '../zhn-atoms/SvgMore';
import SvgClose from '../zhn-atoms/SvgClose';
import FlatButton from '../zhn-m/FlatButton'

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

, _isFn = fn => typeof fn === 'function';

class DraggableDialog extends Component {
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    caption: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    commandButtons: PropTypes.arrayOf(PropTypes.element),
    onShowChart: PropTypes.func,
    onClose: PropTypes.func
  }
  */
  static defaultProps = {
    onClose: () => {}
  }

  state = {
    isMore: false
  }

  componentDidMount(){
     Interact.makeDragable(this.rootDiv);
     this.focus()
  }

  _hasShowed(prevProps) {
    return !prevProps.isShow
      && this.props.isShow;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this._hasShowed(prevProps)) {
      this.focus()
    }
  }

  _hKeyDown = evt => {
    if (isKeyEscape(evt)) {
      evt.preventDefault()
      evt.stopPropagation()
      this._hClose()
    }
  }
  _hClose = () => {
     this.props.onClose()
     this.focusPrev()
  }

  _toggleMore = () => {
    this.setState(prevState => ({
      isMore: !prevState.isMore
    }))
  }

  _refBtMore = node => this.btMore = node
  _refRootDiv = node => this.rootDiv = node

  render(){
    const {
       menuModel,
       isShow,
       caption,
       children,
       commandButtons,
       onShowChart,
       onFront
     } = this.props
    , { isMore } = this.state
    , _styleShow = isShow
        ? STYLE.SHOW
        : STYLE.HIDE
    , _className = crCn(
        CL_DRAGGABLE_DIALOG,
        [isShow, CL_SHOW_POPUP]
    );

    return (
      /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
      <div
        ref={this._refRootDiv}
        role="dialog"
        tabIndex="-1"
        aria-label={caption}
        aria-hidden={!isShow}
        className={_className}
        style={{
          ...S_ROOT_DIV_DRAG,
          ..._styleShow
        }}
        onClick={onFront}
        onKeyDown={this._hKeyDown}
       >
       {/*eslint-enable jsx-a11y/no-noninteractive-element-interactions*/}
        <div style={STYLE.CAPTION_DIV}>
          { menuModel && <>
             <ModalSlider
               isShow={isMore}
               className={CL_MENU_MORE}
               model={menuModel}
               onClose={this._toggleMore}
             />
             <SvgMore
               btRef={this._refBtMore}
               style={S_BT_MORE}
               svgStyle={S_BT_MORE_SVG}
               onClick={this._toggleMore}
             />
           </>
          }
          <span className={CL_NOT_SELECTED}>
            {caption}
          </span>
          <SvgClose
             style={STYLE.SVG_CLOSE}
             onClose={this._hClose}
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
              //accessKey="s"
              onClick={onShowChart}
            />
          }
          <FlatButton
            key="close"
            rootStyle={STYLE.BT_ROOT}
            caption="Close"
            title="Close Draggable Dialog"
            //accessKey="c"
            onClick={this._hClose}
          />
        </div>
      </div>
    );
  }

  focus() {
    this._prevFocused = document.activeElement
    focusNode(this.btMore || this.rootDiv)
  }

  focusPrev() {
    focusNode(this._prevFocused)
    this._prevFocused = null
  }

}

export default DraggableDialog
