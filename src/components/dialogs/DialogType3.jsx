import React from 'react';

import DateUtils from '../../utils/DateUtils';

import WithValidation from './WithValidation';
import Dialog from '../zhnMoleculs/Dialog';
import ToolBarButton from '../header/ToolBarButton';
import RowInputText from './RowInputText';
import RowInputSelect from './RowInputSelect';
import DatesFragment from './DatesFragment';
import ValidationMessagesFragment from './ValidationMessagesFragment';

const _sortOptions = [
  { caption: "Activity, Recent Day", value: "activity" },
  { caption: "Creation Date", value: "creation"},
  { caption: "Score", value: "votes" },
  { caption: "Relevance", value: "relevance" }
]

const _initFromDate = DateUtils.getFromDate(1)
    , _initToDate = DateUtils.getToDate()
    , _onTestDate = DateUtils.isValidDate

const DialogType3 = React.createClass({
  ...WithValidation,

  displayName : 'DialogType2',

  getInitialState(){
    this.stock = null;
    this.sortByItem = {};
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

 _handlerSelectSortBy(item){
   this.sortByItem = item;
 },

 _handlerDefault(){
   this.datesFragment.setValues(_initFromDate, _initToDate);
   this.setState({ validationMessages: [] });
 },

 _handlerClear(){
    this.inputRepo.setValue('');
    this.inputTwo.setValue('');
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

      const { isValid, datesMsg } = this.datesFragment.getValidation();
      if (!isValid) { msg = msg.concat(datesMsg); }

      msg.isValid = (msg.length === 0) ? true : false;
      return msg;
  },
 _createLoadOption(){
   const repo = this.inputRepo.getValue()
       , intitle = this.inputTwo.getValue()
       , { fromDate, toDate } = this.datesFragment.getValues()
       , _fromDate = DateUtils.toUTCMillis(fromDate)/1000
       , _toDate = DateUtils.toUTCMillis(toDate)/1000
       , { requestType } = this.props
       , { value } = this.sortByItem

   return {
     repo, requestType, intitle,
     sort : value,
     fromdate : _fromDate,
     todate : _toDate
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
            oneTitle, onePlaceholder,
            twoTitle, twoPlaceholder
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
        , { validationMessages } = this.state;

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
        <RowInputText
           ref={c => this.inputTwo = c}
           caption={twoTitle}
           placeholder={twoPlaceholder}
        />
        <RowInputSelect
           caption="Sort By:"
           placeholder="Default: Activity"
           options={_sortOptions}
           onSelect={this._handlerSelectSortBy}
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

export default DialogType3;
