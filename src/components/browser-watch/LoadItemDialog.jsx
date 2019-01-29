import React from 'react';
import createReactClass from 'create-react-class'

//import PropTypes from 'prop-types'

import ChartActions from '../../flux/actions/ChartActions';
import { BrowserType, ChartType } from '../../constants/Type';
//import ChartType from '../../constants/ChartType';

import ModalDialog from '../zhnMoleculs/ModalDialog';
import ToolBarButton from '../header/ToolBarButton';


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

const LoadItemDialog = createReactClass({
  /*
   propTypes : {
     isShow  : PropTypes.bool.isRequired,
     data    : PropTypes.object.isRequired,
     store   : PropTypes.object,
     onClose : PropTypes.func.isRequired
   },
   */

   shouldComponentUpdate(nextProps, nextState){
     if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
       return false;
     }
     return true;
   },

  _handlerLoad(){
     const { data, onClose } = this.props
     ChartActions.loadStock(ChartType.WATCH_LIST, BrowserType.WATCH_LIST, data);
     onClose();
  },

  _handlerClose(){
     this.props.onClose();
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

      </ModalDialog>
    )
  }
});

export default LoadItemDialog
