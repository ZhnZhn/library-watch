import React from 'react';
import createReactClass from 'create-react-class'

//import PropTypes from 'prop-types'

import InputText from '../zhnAtoms/InputText';
import DialogStyles from '../styles/DialogStyles'

const styles = DialogStyles;
const Styles = {
  ROOT : {
    lineHeight: 2
  },
  CAPTION : {
    width: '120px'
  },
  INPUT_TEXT : {
    width : '250px',
    marginLeft : 0,
    marginRight: 0,
    paddingLeft: '10px',
    height: '30px'
  }
}

const RowInputText = createReactClass({
  displayName : 'RowInputText',
  /*
  propTypes : {
    caption : PropTypes.string
  },
  */
  render(){
    const {caption} = this.props;
    return (
      <div style={Object.assign({}, styles.rowDiv, Styles.ROOT)}>
         <span style={Object.assign({}, styles.labelSpan, Styles.CAPTION)}>
           {caption}
         </span>
         <InputText
            ref={c => this.inputText = c}
            style={Styles.INPUT_TEXT}
         />
      </div>
    )
  },

  getValue(){
    return this.inputText.getValue().trim();
  },
  setValue(value){
    this.inputText.setValue(value);
  }
});

export default RowInputText
