import React, { Component } from 'react';
//import PropTypes from 'prop-types'

import InputText from '../zhnAtoms/InputText';
import DialogStyles from '../styles/DialogStyles'
import crRowCaption from './crRowCaption'

const styles = DialogStyles;
const S = {
  ROOT: {
    lineHeight: 2
  },
  CAPTION: {
    width: 120
  },
  INPUT_TEXT: {
    width : 250,
    marginLeft : 0,
    marginRight: 0,
    paddingLeft: 10,
    height: 30
  }
};


class RowInputText extends Component {
  /*
  static propTypes = {
    caption: PropTypes.string
  },
  */
  _refInput = c => this.inputText = c

  render(){    
    return (
      <div style={{ ...styles.rowDiv, ...S.ROOT }}>
         <span style={{ ...styles.labelSpan, ...S.CAPTION }}>
           {crRowCaption(this.props.caption)}
         </span>
         <InputText
            ref={this._refInput}
            style={S.INPUT_TEXT}
         />
      </div>
    )
  }

  getValue(){
    return this.inputText.getValue().trim();
  }
  setValue(value){
    this.inputText.setValue(value);
  }
}

export default RowInputText
