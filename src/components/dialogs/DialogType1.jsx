import React, { Component } from 'react'
//import PropTypes from "prop-types";

import Decor from './decorators/Decorators'
import helperFns from './helperFns/helperFns'
import D from './DialogCell'

const { crMenuMore, crButtons } = helperFns;

@Decor.withToolbar
@Decor.withValidationLoad
class DialogType1 extends Component {
  /*
  static propTypes = {
    caption: PropTypes.string,
    requestType: PropTypes.string,
    oneTitle: PropTypes.string,
    onePlaceholder: PropTypes.string,
    isShow: PropTypes.bool,
    onShow: PropTypes.func
  }
  */

  constructor(props){
    super(props)
    this.stock = null
    this.toolbarButtons = this._createType2WithToolbar(props)
    this._menuMore = crMenuMore(this, {
      toggleLabels: this._clickLabelWithToolbar,
      toggleToolBar: this._toggleWithToolbar,
    })
    this._commandButtons = crButtons({ inst: this })
    this.state = {
      isToolbar: true,
      isShowLabels: true,
      validationMessages: []
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.props !== nextProps){
       if (this.props.isShow === nextProps.isShow){
          return false;
       }
    }
    return true;
  }

 _handleClear = () => {
   this.inputOne.setValue('');
   this.setState({ validationMessages: [] });
 }

 _handleLoad = () => {
    this._handleLoadWithValidation(
      this._createValidationMessages(),
      this._createLoadOption
    )
  }
  _createValidationMessages = () => {
    let msg = [];

    const value = this.inputOne.getValue();
    if (!value) {
      msg = msg.concat(`${this.props.oneTitle} is required`)
    }

    msg.isValid = (msg.length === 0) ? true : false;
    return msg;
  }
  _createLoadOption = () => {
    const { requestType } = this.props;
    return {
      repo : this.inputOne.getValue(),
      requestType
    };
  }

  _handleClose = () => {
     this._handleCloseWithValidation(
        this._createValidationMessages
     )
   }

  _refInputOne = c => this.inputOne = c

  render(){
    const {
      caption, isShow, onShow,
      oneTitle, onePlaceholder
    } = this.props
    , {
      isToolbar,
      isShowLabels,
      validationMessages
    } = this.state;

    return (
       <D.DraggableDialog
           isShow={isShow}
           caption={caption}
           menuModel={this._menuMore}
           commandButtons={this._commandButtons}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
        <D.Toolbar
           isShow={isToolbar}
           buttons={this.toolbarButtons}
        />
        <D.RowInputText
           ref={this._refInputOne}
           isShowLabel={isShowLabels}
           caption={oneTitle}
           placeholder={onePlaceholder}
           onEnter={this._handleLoad}
        />
        <D.ValidationMessages
           validationMessages={validationMessages}
        />
      </D.DraggableDialog>
    );
  }
}

export default DialogType1
