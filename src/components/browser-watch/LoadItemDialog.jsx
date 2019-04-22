import React, { Component } from 'react';
//import PropTypes from 'prop-types'

import ChartActions from '../../flux/actions/ChartActions';
import { BrowserType, ChartType } from '../../constants/Type';
import ModalDialog from '../zhn-moleculs/ModalDialog';
import FlatButton from '../zhn-m/FlatButton'


import DialogStyles from '../styles/DialogStyles'

const styles = DialogStyles;

const DIALOG_CAPTION = "Load Watch Item";

const S = {
  ITEM_DESCRIPTION : {
    fontWeight: 'bold',
    color: 'gray',
    paddingTop : '8px',
    paddingLeft : '8px',
    paddingRight : '8px'
  },
  LH_2: {
    lineHeight: 2
  },
  LH_1_5: {
    lineHeight: 1.5
  },
  BOLD: {
    fontWeight: 'bold'
  }
}

class LoadItemDialog extends Component {
  /*
   static propTypes = {
     isShow  : PropTypes.bool.isRequired,
     data    : PropTypes.object.isRequired,
     store   : PropTypes.object,
     onClose : PropTypes.func.isRequired
   },
   */
   constructor(props){
     super(props)
     this._commandButtons = [
      <FlatButton
        key="load"
        isPrimary={true}
        caption="Load"
        onClick={this._handlerLoad}
      />
     ]
   }

   shouldComponentUpdate(nextProps, nextState){
     if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
       return false;
     }
     return true;
   }

  _handlerLoad = () => {
     const { data, onClose } = this.props
     ChartActions.loadStock(ChartType.WATCH_LIST, BrowserType.WATCH_LIST, data);
     onClose();
  }

  _handlerClose = () => {
     this.props.onClose();
  }

  _renderDate = (date) => {
    return (
      <div style={{ ...styles.rowDiv, ...S.LH_2 }} key="3">
        <span style={styles.labelSpan}>
           Date:
        </span>
        <span style={S.BOLD}>
           {date}
        </span>
      </div>
    );
  }

  render(){
    const { isShow, data } = this.props
        , { caption, descr, date } = data;

    return (
      <ModalDialog
         caption={DIALOG_CAPTION}
         isShow={isShow}
         commandButtons={this._commandButtons}
         onClose={this._handlerClose}
      >
        <div style={{ ...styles.rowDiv, ...S.LH_1_5 }} key="1">
          <span style={S.ITEM_DESCRIPTION}>
             {descr}
          </span>
        </div>
        <div style={{ ...styles.rowDiv, ...S.LH_2 }} key="2">
          <span style={styles.labelSpan}>
            Item:
          </span>
          <span style={S.BOLD}>
             {caption}
          </span>
        </div>
        { date && this._renderDate(date) }

      </ModalDialog>
    )
  }
}

export default LoadItemDialog
