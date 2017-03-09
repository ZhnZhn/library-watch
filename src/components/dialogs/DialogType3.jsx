import React, { Component, PropTypes } from 'react'

import DateUtils from '../../utils/DateUtils'

import Dialog from '../zhnMoleculs/Dialog'
import ToolBarButton from '../header/ToolBarButton'
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

  constructor(props){
    super()
    this.stock = null
    this.sortByItem = {}
    this._commandButtons = [
      <ToolBarButton
        type="TypeC"
        caption="Default"
        onClick={this._handleDefault}
       />,
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

 _handleSelectSortBy = (item) => {
   this.sortByItem = item
 }

 _handleDefault = () => {
   this.datesFragment.setValues(_initFromDate, _initToDate)
   this.setState({ validationMessages: [] })
 }

 _handleClear = () => {
    this.inputRepo.setValue('')
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
   const repo = this.inputRepo.getValue()
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
           onSelect={this._handleSelectSortBy}
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
}

export default DialogType3
