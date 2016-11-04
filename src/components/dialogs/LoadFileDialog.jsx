import React from 'react';

import ModalDialog from '../zhnMoleculs/ModalDialog';
import InputFileReader from '../zhnAtoms/InputFileReader';
import ToolBarButton from '../header/ToolBarButton';
import ValidationMessagesFragment from '../zhnMoleculs/ValidationMessagesFragment';
import DialogStyles from '../styles/DialogStyles'

const styles = DialogStyles;

const C = {
  FILE_NOT_CHOOSED : 'Choose file with Watch Items for Load'
}

const STYLE = {
  MODAL_DIALOG : {
    minWidth: '320px'
  },
  ROW_INPUT_FILE : {
    marginTop: '16px',
    marginBottom: '16px'
  },
  ROW_VALIDATION : {
    marginRight: '16px'
  }
}


const LoadFileDialog = React.createClass({
  getInitialState(){
    this.progressEvent = undefined;
    this.file = undefined;
    return {
      validationMessages : []
    };
  },

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  },

  _handlerChange(results){
    //console.log(results)
    if (results && results[0] ){
      const [progressEvent, file] = results[0]
      this.progressEvent = progressEvent;
      this.file = file
   } else {
     this.progressEvent = undefined;
     this.file = undefined;
   }
  },

  _handlerLoad(){
    if (this.progressEvent && this.file){
      //console.log(this.file.name);
      //console.log(this.progressEvent.target.result);
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
  },

  _handlerClose(){
    const { onClose } = this.props;

    if (this.state.validationMessages.length !== 0){
      this.setState({ validationMessages : [] });
    }
    onClose();
  },

  render(){
    const { isShow } = this.props
        //, { caption } = data
        , { validationMessages } = this.state
        , _commandButtons = [
            <ToolBarButton
              key="a"
              type="TypeC"
              caption="Load"
              onClick={this._handlerLoad}
           />
        ]
    return (
      <ModalDialog
        style={STYLE.MODAL_DIALOG}
        caption="Load Watch Items from File"
        isShow={isShow}
        commandButtons={_commandButtons}
        onClose={this._handlerClose}
      >
         <div
            key="1"
            style={Object.assign({}, styles.rowDiv, STYLE.ROW_INPUT_FILE)}

         >
            <InputFileReader
               as="text"
               onChange={this._handlerChange}
            />
         </div>
         <div
            key="2"
            style={Object.assign({}, styles.rowDiv, STYLE.ROW_VALIDATION)}
         >
           <ValidationMessagesFragment
              validationMessages={validationMessages}
           />
         </div>
      </ModalDialog>
    )
  }
});

export default LoadFileDialog
