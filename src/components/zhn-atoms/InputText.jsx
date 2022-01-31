//import PropTypes from "prop-types";
import { Component } from 'react';

import has from '../has';

const CL_FIELD = 'm-field'
, CL_INPUT = 'm-field__input'
, CL_BT_CLEAR = 'm-field__bt-clear';

const { HAS_TOUCH } = has;

const _isKeyClean = ({ keyCode }) => keyCode === 27
 || keyCode === 46;
const _isKeyEnter = ({ keyCode }) => keyCode === 13;

const _isStr = str => typeof str === 'string';

const BtClear = ({
  isValue,
  onClick
}) => (
  <button
    class={CL_BT_CLEAR}
    tabIndex="-1"
    onClick={onClick}
  >
    {isValue ? 'x' : ''}
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
    super(props)
    this.state = {
      value: props.initValue
    }
  }

  static getDerivedStateFromProps({ isUpdateInitValue, initValue }){
    return isUpdateInitValue && _isStr(initValue)
      ?  { value: initValue }
      : null;
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
      <div className={CL_FIELD}>
        <input
          ref={this._refInput}
          type="text"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          className={CL_INPUT}
          style={style}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={this._hChange}
          onKeyDown={this._hKeyDown}
        />
        {
          HAS_TOUCH && <BtClear
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
