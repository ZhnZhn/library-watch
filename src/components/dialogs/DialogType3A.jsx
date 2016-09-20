import React from 'react';

import DateUtils from '../../utils/DateUtils';

import WithValidation from './WithValidation';
import ZhDialog from '../zhnMoleculs/ZhDialog';
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

  _handlerLoad(){
     this._handlerLoadWithValidation(
       this._createValidationMessages(),
       this._createLoadOption
     );
   },
   _createValidationMessages(){
       let msg = [];

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
               caption="Load"
               onClick={this._handlerLoad}
             />
           ]
        , {validationMessages} = this.state;

    return (
       <ZhDialog
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
      </ZhDialog>
    );
  }
});

export default DialogType3A;
