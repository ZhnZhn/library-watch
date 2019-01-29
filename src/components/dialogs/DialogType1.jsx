import React, { Component } from 'react'
//import PropTypes from "prop-types";

import Dialog from '../zhnMoleculs/Dialog'
import ToolBarButton from '../header/ToolBarButton'
import RowInputText from './RowInputText'
import ValidationMessagesFragment from './ValidationMessagesFragment'

import withValidationLoad from './decorators/withValidationLoad'

@withValidationLoad
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
    super()
    this.stock = null
    this._commandButtons = [
       <ToolBarButton
          type="TypeC"
          caption="Clear"
          onClick={this._handleClear}
       />,
       <ToolBarButton
          type="TypeC"
          caption="Load"
          onClick={this._handleLoad}
       />
    ]
    this.state = {
      validationMessages : []
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
   this.inputRepo.setValue('');
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

    const value = this.inputRepo.getValue();
    if (!value) {
      msg = msg.concat(`${this.props.oneTitle} is required`)
    }

    msg.isValid = (msg.length === 0) ? true : false;
    return msg;
  }
  _createLoadOption = () => {
    const { requestType } = this.props;
    return {
      repo : this.inputRepo.getValue(),
      requestType
    };
  }

  _handleClose = () => {
     this._handleCloseWithValidation(
        this._createValidationMessages
     )
   }

  render(){
    const {
            caption, isShow, onShow,
            oneTitle, onePlaceholder
          } = this.props
        , { validationMessages } = this.state;

    return (
       <Dialog
           caption={caption}
           isShow={isShow}
           commandButtons={this._commandButtons}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
        <RowInputText
           ref={c => this.inputRepo = c}
           caption={oneTitle}
           placeholder={onePlaceholder}
        />
        <ValidationMessagesFragment
           validationMessages={validationMessages}
        />
      </Dialog>
    );
  }
}

export default DialogType1
