import { Component } from 'react';

//import PropTypes from "prop-types";

import FlatButton from '../zhn-m/FlatButton';
import ModalDialog from '../zhn-moleculs/ModalDialog';
import InputFileReader from '../zhn-atoms/InputFileReader';
import ValidationMessages from './rows/ValidationMessages';
import DialogStyles from '../styles/DialogStyles';

const styles = DialogStyles;

const C = {
  FILE_NOT_CHOOSED : 'Please choose file for loading.'
};

const STYLE = {
  MODAL_DIALOG : {
    minWidth: 320
  },
  ROW_INPUT_FILE : {
    marginTop: 16,
    marginBottom: 16
  },
  ROW_VALIDATION : {
    width: '100%',
    marginRight: 16
  }
}

class LoadFileDialog extends Component {
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      onLoad: PropTypes.func
    }),
    onClose: PropTypes.func
  }
  */

  constructor(props){
    super(props)
    this.progressEvent = null
    this.file = null
    this._commandButtons = [
      <FlatButton
        key="load"
        isPrimary={true}
        caption="Load"
        timeout={2000}
        onClick={this._handleLoad}
     />
   ]
   this.state = {
     validationMessages: []
   }
  }


  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }

  _handleChange = (results) => {
    if (results && results[0] ){
      const [progressEvent, file] = results[0]
      this.progressEvent = progressEvent
      this.file = file
    } else {
      this.progressEvent = null
      this.file = null
    }
  }

  _handleLoad = () => {
    if (this.progressEvent && this.file){
      const { data } = this.props
          , { onLoad } = data
      onLoad({ progressEvent : this.progressEvent });
      this.setState({
        validationMessages : []
      })
    } else {
      this.setState({
        validationMessages : [C.FILE_NOT_CHOOSED]
      })
    }
  }

  _handleClose = () => {
    const { onClose } = this.props;

    if (this.state.validationMessages.length !== 0){
      this.setState({ validationMessages : [] });
    }
    onClose()
  }

  render(){
    const { isShow } = this.props
        , { validationMessages } = this.state;
    return (
      <ModalDialog
        style={STYLE.MODAL_DIALOG}
        caption="Load Watch Items from File"
        isShow={isShow}
        commandButtons={this._commandButtons}
        onClose={this._handleClose}
      >
         <div style={{ ...styles.rowDiv, ...STYLE.ROW_INPUT_FILE }}>
            <InputFileReader
               as="text"
               onChange={this._handleChange}
            />
         </div>
         <div style={{ ...styles.rowDiv, ...STYLE.ROW_VALIDATION }}>
           <ValidationMessages
             validationMessages={validationMessages}
           />
         </div>
      </ModalDialog>
    )
  }
}

export default LoadFileDialog
