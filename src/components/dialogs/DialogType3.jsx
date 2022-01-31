import { Component } from 'react'
//import PropTypes from "prop-types";

import D from './DialogCell'
import Decor from './decorators/Decorators'
import helperFns from './helperFns/helperFns'

const {
  dateConfig,
  crMenuMore, crButtons,
  toUTCSecond
} = helperFns;

const _sortOptions = [
  { caption: "Activity, Recent Day", value: "activity" },
  { caption: "Creation Date", value: "creation"},
  { caption: "Score", value: "votes" },
  { caption: "Relevance", value: "relevance" }
];

const {
  _initFromDate,
  _initToDate,
  _onTestDate
} = dateConfig;

@Decor.dialog
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
    this.toolbarButtons = this._createType2WithToolbar(props, {
      hasDate: true
    })
    this._menuMore = crMenuMore(this, {
      toggleDates: this._clickDateWithToolbar,
      toggleLabels: this._clickLabelWithToolbar,
      toggleToolBar: this._toggleWithToolbar,
    })
    this._commandButtons = crButtons({ inst: this })
    this.state = {
      ...this._withInitialState()
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
       , _fromDate = toUTCSecond(fromDate)
       , _toDate = toUTCSecond(toDate)
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
        <D.RowInputText
           ref={this._refInputTwo}
           isShowLabel={isShowLabels}
           caption={twoTitle}
           placeholder={twoPlaceholder}
        />
        <D.RowInputSelect
           isShowLabel={isShowLabels}
           caption="Sort By"
           placeholder="Default: Activity"
           options={_sortOptions}
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
