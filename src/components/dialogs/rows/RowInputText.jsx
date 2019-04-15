import React, { Component } from 'react';
//import PropTypes from "prop-types";

import InputText from '../../zhnAtoms/InputText'
import Caption from './Caption'

const S = {
  ROW_DIV: {
    margin: '5px'
  },
  LABEL_SPAN : {
    color: '#1B75BB',
    display: 'inline-block',
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
  /*
  static propTypes = {
    isShowLabel: true,
    caption: PropTypes.string,
    placeholder: PropTypes.string,
    onEnter: PropTypes.function
  }
  */
  static defaultProps = {
    isShowLabel: true,
    caption: ''
  }

  _refInput = c => this.inputText = c

  render(){
    const {
      isShowLabel, caption,
      placeholder, onEnter
    } = this.props
    , _placeholder = isShowLabel
        ? placeholder
        : placeholder || caption;
    return (
      <div style={{ ...S.ROW_DIV, ...S.ROOT }}>
         <Caption
           is={isShowLabel}
           style={{ ...S.LABEL_SPAN, ...S.CAPTION }}
           caption={caption}
         />
         <InputText
            ref={this._refInput}
            style={S.INPUT_TEXT}
            placeholder={_placeholder}
            onEnter={onEnter}
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
