//import PropTypes from "prop-types";
import { Component } from 'react';

const S_ROOT = {
  position: 'relative',
  display: 'inline-block',
  width: 250,
  backgroundColor: '#e1e1cb',
}
, S_INPUT = {
  background: 'transparent none repeat scroll 0 0',
  border: 'medium none',
  outline: 'medium none',
  color: 'green',
  width: '100%',
  height: 30,
  paddingLeft: 10,
  fontSize: '16px',
  fontWeight: 'bold'
}
, S_HR = {
  borderWidth: 'medium medium 1px',
  borderStyle: 'none none solid',
  borderColor: 'red',
  borderImage: 'none',
  width: 230,
  margin: '0 0 5px 10px'
}
, S_HR_VALID = { borderColor: '#1b75bb' }
, S_HR_NOT_VALID = { borderColor: '#f44336' }
, S_ERR_MSG = {
  color: '#f44336',
  padding: '0 0 5px 10px',
  fontSize: '12px',
  fontWeight: 'bold'
};

class InputDate extends Component {
  /*
  static propTypes = {
    initValue: PropTypes.string,
    errorMsg: PropTypes.string,
    onTest: PropTypes.func
  }
  */
  static defaultProps = {
    initValue: '',
    onTest: () => {}
  }

  constructor(props){
    super()
    this.state = {
      value: props.initValue,
      errorInput: null,
      isValid: true
    }
  }

  setValue = (value) => {
    if (!this.props.onTest(value)) {
      this.setState({
         value : value,
         isValid : false
      });
    } else {
      this.setState({
        value: value,
        isValid : true,
        errorInput : null
      });
    }
  }

  _handleChangeValue = (event) => {
    this.setValue(event.target.value);
  }

  _handleBlurValue = () => {
    if (!this.props.onTest(this.state.value)) {
      this.setState({
          isValid : false,
          errorInput : this.props.errorMsg
      });
    } else {
      this.setState({
          isValid : true,
          errorInput : null
      });
    }
  }

  render(){
    const {
      value,
      isValid,
      errorInput
    } = this.state
    , _hrStyle = isValid
        ? S_HR_VALID
        : S_HR_NOT_VALID;

    return (
      <div style={S_ROOT}>
        <input
           ref={c => this.inputComp = c}
           type="text"
           name="date"
           autoComplete="new-date"
           autoCorrect="off"
           autoCapitalize="off"
           spellCheck={false}
           style={S_INPUT}
           placeholder="YYYY-MM-DD"
           value={value}
           onChange={this._handleChangeValue}
           onBlur={this._handleBlurValue}
        />
        <hr style={{...S_HR, ..._hrStyle}} />
        <div style={S_ERR_MSG}>
          {errorInput}
        </div>
      </div>
    );
  }

  getValue(){
    return this.state.value;
  }

  isValid(){
    return this.state.isValid;
  }

  focus(){
    this.inputComp.focus()
  }
}

export default InputDate
