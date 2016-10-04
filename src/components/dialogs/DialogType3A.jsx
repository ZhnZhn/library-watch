import React from 'react';

import DateUtils from '../../utils/DateUtils';

import WithValidation from './WithValidation';
import Dialog from '../zhnMoleculs/Dialog';
import ToolBarButton from '../header/ToolBarButton';
import RowInputText from './RowInputText';
import DatesFragment from './DatesFragment';
import ValidationMessagesFragment from './ValidationMessagesFragment';


const _initFromDate = DateUtils.getFromDate(1)
    , _initToDate = DateUtils.getToDate()
    , _onTestDate = DateUtils.isValidDate

const DialogType3A = React.createClass({
  ...WithValidation,

  displayName : 'DialogType3A',

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

 _handlerDefault(){
    this.datesFragment.setValues(_initFromDate, _initToDate);
 },

 _handlerClear(){
    this.inputRepo.setValue('');
    this.setState({ validationMessages: []});
 },

  _handlerLoad(){
     this._handlerLoadWithValidation(
       this._createValidationMessages(),
       this._createLoadOption
     );
   },
   _createValidationMessages(){
       let msg = [];

       const repo = this.inputRepo.getValue();
       if (!repo) {
          msg = msg.concat(`${this.props.oneTitle} is required`);
       }

       const { isValid, datesMsg } = this.datesFragment.getValidation();
       if (!isValid) { msg = msg.concat(datesMsg); }

       msg.isValid = (msg.length === 0) ? true : false;
       return msg;
   },
   _createLoadOption(){
     const repo = this.inputRepo.getValue()
         , { fromDate, toDate } = this.datesFragment.getValues()
         , { requestType } = this.props

     return {
       repo, requestType,
       fromDate, toDate
     };
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
        , _commandButtons = [
              <ToolBarButton
                key="a"
                type="TypeC"
                caption="Default"
                onClick={this._handlerDefault}
              />,
              <ToolBarButton
                key="b"
                type="TypeC"
                caption="Clear"
                onClick={this._handlerClear}
              />,
             <ToolBarButton
               key="c"
               type="TypeC"
               caption="Load"
               onClick={this._handlerLoad}
             />
           ]
        , {validationMessages} = this.state;

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
        <DatesFragment
            ref={c => this.datesFragment = c}
            initFromDate={_initFromDate}
            initToDate={_initToDate}
            onTestDate={_onTestDate}
        />
        <ValidationMessagesFragment
           validationMessages={validationMessages}
        />
      </Dialog>
    );
  }
});

export default DialogType3A;
