import React from 'react';

import WithValidation from './WithValidation';
import Dialog from '../zhnMoleculs/Dialog';
import ToolBarButton from '../header/ToolBarButton';
import RowInputText from './RowInputText';
import ValidationMessagesFragment from './ValidationMessagesFragment';

const DialogType1 = React.createClass({

   ...WithValidation,

  displayName : 'DialogType1',

  getInitialState(){
    this.stock = null;

    return {
      validationMessages : []
    };
  },

  shouldComponentUpdate(nextProps, nextState){
    if (this.props !== nextProps){
       if (this.props.isShow === nextProps.isShow){
          return false;
       }
    }
    return true;
  },

 _handlerClear(){
   this.inputRepo.setValue('');
   this.setState({ validationMessages: [] });
 },

 _handlerLoad(){
    this._handlerLoadWithValidation(
      this._createValidationMessages(),
      this._createLoadOption
    );
  },
  _createValidationMessages(){
    let msg = [];

    const value = this.inputRepo.getValue();
    if (!value) {
      msg = msg.concat(`${this.props.oneTitle} is required`);
    }

    msg.isValid = (msg.length === 0) ? true : false;
    return msg;
  },
  _createLoadOption(){
    const { requestType } = this.props;
    return {
      repo : this.inputRepo.getValue(),
      requestType
    }
  },

  _handlerClose(){
     this._handlerCloseWithValidation(
        this._createValidationMessages
     );
   },

  render(){
    const {
            caption, isShow, onShow,
            oneTitle, onePlaceholder
          } = this.props
        , { validationMessages } = this.state
        , _commandButtons = [
       <ToolBarButton
          key="a"
          type="TypeC"
          caption="Clear"
          onClick={this._handlerClear}
       />,
       <ToolBarButton
          key="b"
          type="TypeC"
          caption="Load"
          onClick={this._handlerLoad}
       />
    ];

    return (
       <Dialog
           caption={caption}
           isShow={isShow}
           commandButtons={_commandButtons}
           onShowChart={onShow}
           onClose={this._handlerClose}
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
});

export default DialogType1;
