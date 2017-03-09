import React, { Component, PropTypes } from 'react'

import InputText from '../zhnAtoms/InputText'

const Styles = {
  ROW_DIV: {
    margin: '5px'
  },
  LABEL_SPAN : {
    color: '#1B75BB',
    display: 'inline-block',
    //verticalAlign: 'top',
    textAlign: 'right',
    width: '100px',
    paddingRight: '5px',
    fontSize: '16px',
    fontWeight: 'bold'
  },

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

class RowInputText extends Component {
  static propTypes = {
    caption: PropTypes.string,
    placeholder: PropTypes.string
  }

  render(){
    const { caption, placeholder } = this.props;
    return (
      <div style={Object.assign({}, Styles.ROW_DIV, Styles.ROOT)}>
         <span style={Object.assign({}, Styles.LABEL_SPAN, Styles.CAPTION)}>
           {caption}
         </span>
         <InputText
            ref={c => this.inputText = c}
            style={Styles.INPUT_TEXT}
            placeholder={placeholder}
         />
      </div>
    )
  }

  getValue(){
    return this.inputText.getValue().trim();
  }
  setValue(value){
    this.inputText.setValue(value)
  }
}

export default RowInputText
