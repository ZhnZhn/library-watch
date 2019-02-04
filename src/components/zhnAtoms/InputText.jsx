import React, { Component } from 'react';

//import PropTypes from "prop-types";

const CL = {
  FIELD: 'm-field',
  INPUT:  'm-field__input',
  BT_CLEAR: 'm-field__bt-clear'
};

const IS_TOUCH = document &&
 'ontouchstart' in document.documentElement;

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
    initValue : PropTypes.string,
    style : PropTypes.object
  }
  */
  static defaultProps = {
    initValue: '',
    maxLength: 50,
    onEnter: () => {}
  }

  constructor(props){
    super()
    this.state = {
      value: props.initValue
    }
  }

  componentWillReceiveProps(nextProps){
    if ( nextProps !== this.props &&
         typeof nextProps.initValue !== "undefined")
    {
      this.setState({ value: nextProps.initValue });
    }
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
  }

  render(){
    const {
      style, placeholder='',
      maxLength
    } = this.props
    , { value } = this.state;
    return (
      <div class={CL.FIELD}>
        <input
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
}


export default InputText
