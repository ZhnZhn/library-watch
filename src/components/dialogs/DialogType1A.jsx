import { Component } from 'react'
//import PropTypes from "prop-types";

import DateUtils from '../../utils/DateUtils'

import D from './DialogCell'
import Decor from './decorators/Decorators'
import helperFns from './helperFns/helperFns'

const { crMenuMore, crButtons } = helperFns;

const MARKET_SHARES = [
  { caption: "OS: Desktop, Mobile, Tablet, Console", value: "os"},
  { caption: "Windows: Desktop", value: "win-desktop"},
  { caption: "macOS: Desktop", value: "mac-desktop"},
  { caption: "Android: Mobile, Tablet", value: "android-mobile" },
  { caption: "IOS: Mobile, Tablet", value: "ios-mobile" },
  { caption: "Browser: All Platforms", value: "browser" }
];
const REGIONS = [
  { caption: "Worldwide", value: "worlwide", v2: "ww"  },
  { caption: "Africa", value: "africa", v2: "af" },
  { caption: "Asia", value: "asia", v2: "as" },
  { caption: "Antarctica", value: "antarctica", v2: "an" },
  { caption: "Australia", value: "australia", v2: "au" },
  { caption: "Europe", value: "europe", v2: "eu" },
  { caption: "North America", value: "north-america", v2: "na" },
  { caption: "South America", value: "south-america", v2: "sa" },
  { caption: "Oceania", value: "oceania", v2: "oc" }
];

const _initFromDate = DateUtils.getFromDate(1)
    , _initToDate = DateUtils.getToDate()
    , _onTestDate = DateUtils.isValidDate;

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
    this._item = MARKET_SHARES[0];
    this._region = REGIONS[0];
    this.toolbarButtons = this._createType2WithToolbar(props, {
      hasDate: false
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

 _hSelectItem = (item) => {
   this._item = item
 }
 _hSelectRegion = item => {
   this._region = item
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
   const { requestType } = this.props
   , { value, caption } = this._item;
   return {
     requestType,
     value,
     caption: caption,
     region: this._region
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
           placeholder={MARKET_SHARES[0].caption}
           options={MARKET_SHARES}
           onSelect={this._hSelectItem}
        />
        <D.RowInputSelect
           isShowLabel={isShowLabels}
           caption="Region"
           placeholder={REGIONS[0].caption}
           options={REGIONS}
           onSelect={this._hSelectRegion}
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
