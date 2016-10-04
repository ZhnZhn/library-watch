import React from 'react';

const styles = {
  rootDiv: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#E1E1CB',
    width: '250px'
  },
  inputText: {
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '30px',
    paddingLeft: '10px',
    color: 'green',
    width: '100%',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  inputHr: {
    borderWidth: 'medium medium 1px',
    borderStyle: 'none none solid',
    borderColor: 'red',
    borderImage: 'none',
    margin: 0,
    marginLeft: '10px',
    marginBottom: '5px',
    width: '230px'
  },
  errMsg: {
    color: '#F44336',
    paddingLeft: '10px',
    paddingBottom: '5px',
    fontSize: '12px',
    fontWeight: 'bold'
  }
};


const InputDate = React.createClass({
  getInitialState(){
      const initValue = this.props.initValue || '';

      return {
        value: initValue,
        errorInput: null,
        isValid: true
      }
  },

  setValue(value){
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
  },

  _handlerChangeValue(event){
    this.setValue(event.target.value);
  },

  _handlerBlurValue(){
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
  },

  render(){
    const { value, isValid, errorInput } = this.state
        , styleHr = isValid
                    ? { borderColor: '#1B75BB' }
                    : { borderColor: '#F44336' };

    return (
      <div style={styles.rootDiv}>
        <input
           ref="inputDate"
           type="text"
           style={styles.inputText}
           translate={false}
           placeholder="YYYY-MM-DD"
           value={value}
           onChange={this._handlerChangeValue}
           onBlur={this._handlerBlurValue}
        >
        </input>
        <hr style={Object.assign({}, styles.inputHr, styleHr)}></hr>
        <div style={styles.errMsg}>
          {errorInput}
        </div>
      </div>
    );
  },

  getValue(){
    return this.state.value;
  },

  isValid(){
    return this.state.isValid;
  },

  focusInput(){
    this.refs.inputDate.focus();
  }

});

export default InputDate;
