import React, { Component } from 'react';
import InputText from '../../zhn-atoms/InputText';
import Caption from './Caption'

const S = {
  ROW_DIV: {
    margin: 5
  },
  LABEL_SPAN : {
    color: '#1b75bb',
    display: 'inline-block',
    width: 100,
    paddingRight: 5,
    textAlign: 'right',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  ROOT : {
    lineHeight: 2
  },
  CAPTION : {
    width: 120
  },
  INPUT_TEXT : {
    width: 250,
    height: 30,
    paddingLeft: 10,
    marginLeft: 0,
    marginRight: 0
  }
};

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
