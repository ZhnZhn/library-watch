import React, { Component } from 'react';
//import PropTypes from "prop-types";

import is from '../../utils/is'

const CL = {
  FIELD: 'm-field',
  INPUT:  'm-field__input',
  BT_CLEAR: 'm-field__bt-clear'
};

const { isTouchable } = is;
const IS_TOUCH = isTouchable();

const _isKeyClean = ({ keyCode }) => keyCode === 27
 || keyCode === 46;
const _isKeyEnter = ({ keyCode }) => keyCode === 13;

const BtClear = ({ isValue, onClick }) => (
  <button
    class={CL.BT_CLEAR}
    tabIndex="-1"
    onClick={onClick}
  >
    { isValue ? 'x' : '' }
  </button>
);

class InputText extends Component {
  /*
  static propTypes = {
    isUpdateInitValue: PropTypes.bool,
    initValue: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.object
    onEnter: PropTypes.func
  }
  */
  static defaultProps = {
    isUpdateInitValue: false,
    initValue: '',
    placeholder: '',
    maxLength: 50,
    onEnter: () => {}
  }

  constructor(props){
    super()
    this.state = {
      value: props.initValue
    }
  }

  static getDerivedStateFromProps({ isUpdateInitValue, initValue }){
    return isUpdateInitValue
     && typeof initValue === "string"
      ?  { value: initValue }
      : void 0;
  }

  _hChange = (event) => {
    this.setState({ value: event.target.value })
  }

  _hKeyDown = (event) => {
     if ( _isKeyClean(event) ){
       this.setState({ value: '' })
     } else if ( _isKeyEnter(event) ) {
       this.props.onEnter(event.target.value)
     }
  }

  _hClean = () => {
    this.setState({ value: '' })
    this.focus()
  }

  _refInput = element => this._inputElement = element

  render(){
    const {
      style,
      placeholder,
      maxLength
    } = this.props
    , { value } = this.state;
    return (
      <div class={CL.FIELD}>
        <input
          ref={this._refInput}
          type="text"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          class={CL.INPUT}
          style={style}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={this._hChange}
          onKeyDown={this._hKeyDown}
        />
        {
          IS_TOUCH && <BtClear
            isValue={Boolean(value)}
            onClick={this._hClean}
          />
        }
     </div>
   );
  }

  getValue(){
    return this.state.value.trim();
  }
  setValue(value){
    this.setState({ value });
  }
  focus(){
    if (this._inputElement) {
      this._inputElement.focus()
    }
  }
}


export default InputText
