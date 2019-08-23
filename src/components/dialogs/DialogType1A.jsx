import React, { Component } from 'react'
//import PropTypes from "prop-types";

import DateUtils from '../../utils/DateUtils'

import D from './DialogCell'
import Decor from './decorators/Decorators'
import helperFns from './helperFns/helperFns'

const { crMenuMore, crButtons } = helperFns;

const OS_OPTIONS = [
  { caption: "OS Desktop, Mobile, Tablet, Console", value: "os"},
  { caption: "Windows Desktop", value: "win-desktop"},
  { caption: "macOS Desktop", value: "mac-desktop"},
  { caption: "Android Mobile, Tablet", value: "android-mobile" },
  { caption: "IOS Mobile, Tablet", value: "ios-mobile" },
  { caption: "Browser: All Platforms", value: "browser" }
];

const _initFromDate = DateUtils.getFromDate(1)
    , _initToDate = DateUtils.getToDate()
    , _onTestDate = DateUtils.isValidDate;

@Decor.withToolbar
@Decor.withValidationLoad
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
    this.sortByItem = OS_OPTIONS[0];
    this.toolbarButtons = this._createType2WithToolbar(props, {
      hasDate: false
    })
    this._menuMore = crMenuMore(this, {
      toggleDates: this._clickDateWithToolbar,
      toggleLabels: this._clickLabelWithToolbar,
      toggleToolBar: this._toggleWithToolbar,
    })
    this._commandButtons = crButtons({
      inst: this, isDefault: false
    })
    this.state = {
      isToolbar: true,
      isShowLabels: true,
      isShowDate: false,
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
   const
        //{ fromDate, toDate } = this.datesFragment.getValues()
       //, _fromDate = DateUtils.toUTCMillis(fromDate)/1000
       //, _toDate = DateUtils.toUTCMillis(toDate)/1000
        { requestType } = this.props
       , { value, caption } = this.sortByItem;

   return {
     requestType,
     value,
     caption: caption
     //fromdate : _fromDate,
     //todate : _toDate
   };
 }

 _handleClose = () => {
    this._handleCloseWithValidation(
       this._createValidationMessages
    )
  }

  _refDatesFragment = c => this.datesFragment = c

  render(){
    const {
        caption, isShow, onShow,
      } = this.props
    , {
      isToolbar,
      isShowLabels,
      isShowDate,
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
        <D.RowInputSelect
           isShowLabel={isShowLabels}
           caption="Item"
           placeholder={OS_OPTIONS[0].caption}
           options={OS_OPTIONS}
           onSelect={this._handleSelectSortBy}
        />
        <D.ShowHide isShow={isShowDate}>
          <D.Dates
              ref={this._refDatesFragment}
              isShowLabels={isShowLabels}
              initFromDate={_initFromDate}
              initToDate={_initToDate}
              onTestDate={_onTestDate}
          />
        </D.ShowHide>
        <D.ValidationMessages
           validationMessages={validationMessages}
        />
      </D.DraggableDialog>
    );
  }
}

export default DialogType3
