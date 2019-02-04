import React, { Component } from 'react'
//import PropTypes from "prop-types";

import DateUtils from '../../utils/DateUtils'

import crButtons from './crCommandButtons'
import Dialog from '../zhnMoleculs/Dialog'
import RowInputText from './RowInputText'
import RowInputSelect from './RowInputSelect'
import DatesFragment from './DatesFragment'
import ValidationMessagesFragment from './ValidationMessagesFragment'

import withValidationLoad from './decorators/withValidationLoad'

const _sortOptions = [
  { caption: "Activity, Recent Day", value: "activity" },
  { caption: "Creation Date", value: "creation"},
  { caption: "Score", value: "votes" },
  { caption: "Relevance", value: "relevance" }
]

const _initFromDate = DateUtils.getFromDate(1)
    , _initToDate = DateUtils.getToDate()
    , _onTestDate = DateUtils.isValidDate;


@withValidationLoad
class DialogType3 extends Component {
  /*
  static propTypes = {
    caption: PropTypes.string,
    requestType: PropTypes.string,
    oneTitle: PropTypes.string,
    onePlaceholder: PropTypes.string,
    twoTitle: PropTypes.string,
    twoPlaceholder: PropTypes.string,
    isShow: PropTypes.bool,
    onShow: PropTypes.func
  }
  */
  constructor(props){
    super(props)
    this.stock = null
    this.sortByItem = {}
    this._commandButtons = crButtons({
      inst: this, isDefault: true
    })
    this.state = {
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

 _handleSelectSortBy = (item) => {
   this.sortByItem = item
 }

 _handleDefault = () => {
   this.datesFragment.setValues(_initFromDate, _initToDate)
   this.setState({ validationMessages: [] })
 }

 _handleClear = () => {
    this.inputOne.setValue('')
    this.inputTwo.setValue('')
    this.setState({ validationMessages: [] })
 }

 _handleLoad = () => {
    this._handleLoadWithValidation(
      this._createValidationMessages(),
      this._createLoadOption
    )
  }

  _createValidationMessages = () => {
      let msg = [];

      const { isValid, datesMsg } = this.datesFragment.getValidation();
      if (!isValid) { msg = msg.concat(datesMsg) }

      msg.isValid = (msg.length === 0) ? true : false;
      return msg;
  }
 _createLoadOption = () => {
   const repo = this.inputOne.getValue()
       , intitle = this.inputTwo.getValue()
       , { fromDate, toDate } = this.datesFragment.getValues()
       , _fromDate = DateUtils.toUTCMillis(fromDate)/1000
       , _toDate = DateUtils.toUTCMillis(toDate)/1000
       , { requestType } = this.props
       , { value } = this.sortByItem;

   return {
     repo, requestType, intitle,
     sort : value,
     fromdate : _fromDate,
     todate : _toDate
   };
 }

 _handleClose = () => {
    this._handleCloseWithValidation(
       this._createValidationMessages
    )
  }

  _refInputOne = c => this.inputOne = c
  _refInputTwo = c => this.inputTwo = c
  _refDatesFragment = c => this.datesFragment = c

  render(){
    const {
            caption, isShow, onShow,
            oneTitle, onePlaceholder,
            twoTitle, twoPlaceholder
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
           ref={this._refInputOne}
           caption={oneTitle}
           placeholder={onePlaceholder}
           onEnter={this._handleLoad}
        />
        <RowInputText
           ref={this._refInputTwo}
           caption={twoTitle}
           placeholder={twoPlaceholder}
        />
        <RowInputSelect
           caption="Sort By:"
           placeholder="Default: Activity"
           options={_sortOptions}
           onSelect={this._handleSelectSortBy}
        />
        <DatesFragment
            ref={this._refDatesFragment}
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
}

export default DialogType3
