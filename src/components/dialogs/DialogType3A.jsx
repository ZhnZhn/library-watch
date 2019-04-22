import React, { Component } from 'react'
//import PropTypes from "prop-types";

import DateUtils from '../../utils/DateUtils'

import D from './DialogCell'
import Decor from './decorators/Decorators'
import helperFns from './helperFns/helperFns'

const { crMenuMore, crButtons } = helperFns;

const _initFromDate = DateUtils.getFromDate(1)
    , _initToDate = DateUtils.getToDate()
    , _onTestDate = DateUtils.isValidDate;

@Decor.withToolbar
@Decor.withValidationLoad
class DialogType3A extends Component {
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
    this.toolbarButtons = this._createType2WithToolbar(props, {
      hasDate: true
    })
    this._menuMore = crMenuMore(this, {
      toggleDates: this._clickDateWithToolbar,
      toggleLabels: this._clickLabelWithToolbar,
      toggleToolBar: this._toggleWithToolbar,
    })
    this._commandButtons = crButtons({
      inst: this, isDefault: true
    })
    this.state = {
      isToolbar: true,
      isShowLabels: true,
      isShowDate: true,
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

 _handleDefault = () => {
    this.datesFragment.setValues(_initFromDate, _initToDate)
 }

 _handleClear = () => {
    this.inputOne.setValue('')
    this.setState({ validationMessages: []})
 }

  _handleLoad = () => {
     this._handleLoadWithValidation(
       this._createValidationMessages(),
       this._createLoadOption
     )
   }
   _createValidationMessages = () => {
       let msg = [];

       const repo = this.inputOne.getValue()
       if (!repo) {
          msg = msg.concat(`${this.props.oneTitle} is required`);
       }

       const { isValid, datesMsg } = this.datesFragment.getValidation();
       if (!isValid) { msg = msg.concat(datesMsg); }

       msg.isValid = (msg.length === 0) ? true : false;
       return msg;
   }
   _createLoadOption = () => {
     const repo = this.inputOne.getValue()
         , { fromDate, toDate } = this.datesFragment.getValues()
         , { requestType } = this.props;

     return {
       repo, requestType,
       fromDate, toDate
     };
   }

   _handleClose = () => {
      this._handleCloseWithValidation(
         this._createValidationMessages
      );
    }

  _refInputOne = c => this.inputOne = c
  _refInputDates = c => this.datesFragment = c

   render(){
     const {
        caption, isShow, onShow,
        oneTitle, onePlaceholder
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
        <D.RowInputText
           ref={this._refInputOne}
           isShowLabel={isShowLabels}
           caption={oneTitle}
           placeholder={onePlaceholder}
           onEnter={this._handleLoad}
        />
        <D.ShowHide isShow={isShowDate}>
          <D.Dates
              ref={this._refInputDates}
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

export default DialogType3A
