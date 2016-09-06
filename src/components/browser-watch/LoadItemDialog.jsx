import React from 'react';

import WithValidation from '../dialogs/WithValidation';

//import DateUtils from '../../utils/DateUtils';

import ChartActions from '../../flux/actions/ChartActions';
import { BrowserType, ChartType } from '../../constants/Type';
//import ChartType from '../../constants/ChartType';

import ModalDialog from '../zhnMoleculs/ModalDialog';
import ToolBarButton from '../header/ToolBarButton';
//import DatesFragment from '../DatesFragment';
import ValidationMessagesFragment from '../zhnMoleculs/ValidationMessagesFragment';

import DialogStyles from '../styles/DialogStyles'

const styles = DialogStyles;

const DIALOG_CAPTION = "Load Watch Item";

const STYLE = {
  ITEM_DESCRIPTION : {
    fontWeight: 'bold',
    color: 'gray',
    paddingTop : '8px',
    paddingLeft : '8px',
    paddingRight : '8px'
  }
}

const LoadItemDialog = React.createClass({
   ...WithValidation,
   propTypes : {
     isShow  : React.PropTypes.bool.isRequired,
     data    : React.PropTypes.object.isRequired,
     store   : React.PropTypes.object,
     onClose : React.PropTypes.func.isRequired
   },

   getInitialState(){
     //const { fromDate, initToDate, onTestDate } = this.props.data
         //, _initFromDate = (fromDate) ? fromDate : DateUtils.getFromDate(2)
         //, _initToDate = (initToDate) ? initToDate : DateUtils.getToDate()
         //, _onTestDate = (onTestDate) ? onTestDate : DateUtils.isValidDate

    return {
      //initFromDate : _initFromDate,
      //initToDate : _initToDate,
      //onTestDate : _onTestDate,
      validationMessages : []
      }
   },

   shouldComponentUpdate(nextProps, nextState){
     if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
       return false;
     }
     return true;
   },

  _handlerLoad(){
    const validationMessages = this._getValidationMessages();
    if (validationMessages.isValid){
      const { data, onClose } = this.props
          //, { title, subtitle, caption, columnName, dataColumn, seriaColumnNames } = data
          //, { fromDate, toDate } = this.datesFragment.getValues()
          //, option = {
          //   title : title,
          //   subtitle : subtitle,
          //   value : caption,
          //   stock: caption,
          //   fromDate: fromDate,
          //   toDate: toDate,
          //   columnName,
          //   dataColumn,
          //   seriaColumnNames
          //}
      //ChartActions.loadStock(ChartType.WATCH_LIST, BrowserType.WATCH_LIST, option);
      ChartActions.loadStock(ChartType.WATCH_LIST, BrowserType.WATCH_LIST, data);
      onClose();
    }
    this._updateValidationMessages(validationMessages);
  },

  _getValidationMessages(){
    let   msg = [];
    //const { isValid, datesMsg } = this.datesFragment.getValidation();
    //if (!isValid) { msg = msg.concat(datesMsg); }
    msg.isValid = (msg.length === 0) ? true : false;
    return msg;
  },

  _renderDate(date){
    return (
      <div style={Object.assign({}, styles.rowDiv, {lineHeight: 2})} key="3">
        <span style={styles.labelSpan}>
           Date:
        </span>
        <span style={{fontWeight: 'bold'}}>
           {date}
        </span>
      </div>
    );
  },

  render(){
    const { isShow, data } = this.props
        , { caption, descr, date } = data
        , {
           //initFromDate, initToDate, onTestDate,
           validationMessages
         } = this.state
        , _commandButtons = [
       <ToolBarButton
          key="a"
          type="TypeC"
          caption="Load"
          onClick={this._handlerLoad}
       />
    ];
    return (
      <ModalDialog
         caption={DIALOG_CAPTION}
         isShow={isShow}
         commandButtons={_commandButtons}
         onClose={this._handlerClose}
      >
        <div style={Object.assign({}, styles.rowDiv, {lineHeight: 1.5})} key="1">
          <span style={STYLE.ITEM_DESCRIPTION}>
             {descr}
          </span>
        </div>
        <div style={Object.assign({}, styles.rowDiv, {lineHeight: 2})} key="2">
          <span style={styles.labelSpan}>
            Item:
          </span>
          <span style={{fontWeight: 'bold'}}>
             {caption}
          </span>
        </div>
        { date && this._renderDate(date) }

        <ValidationMessagesFragment
            key="4"
            validationMessages={validationMessages}
        />

      </ModalDialog>
    )
  }
});

export default LoadItemDialog
