import React, { Component, PropTypes } from 'react';

const STYLE = {
  INPUT : {
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '26px',
    paddingLeft: '5px',
    color: 'green',
    width: '40px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor : '#E1E1CB',
    marginLeft : '5px',
    marginRight : '5px',
    display : 'inline'
  }
}

class InputText extends Component {
  static propTypes = {
    initValue : PropTypes.string,
    style : PropTypes.object
  }
  static defaultProps = {
    initValue : ''
  }

  constructor(props){
    super()
    this.state = {
      value : props.initValue
    }
  }

  componentWillReceiveProps(nextProps){
    if ( nextProps !== this.props &&
         typeof nextProps.initValue !== "undefined")
    {
      this.setState({ value : nextProps.initValue });
    }
  }

  _handlerInputChange = (event) => {
    this.setState({ value : event.target.value })
  }

  _handlerInputKeyDown = (event) => {
     if (event.keyCode === 27){
       this.setState({ value : '' })
     }
  }

  render(){
    const { style, placeholder='' } = this.props
        , { value } = this.state;
    return (
      <input
        type="text"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        style={{...STYLE.INPUT, ...style }}
        value={value}
        placeholder={placeholder}
        onChange={this._handlerInputChange}
        onKeyDown={this._handlerInputKeyDown}
      />
    )
  }

  getValue(){
    return this.state.value.trim();
  }
  setValue(value){
    this.setState({ value });
  }
}


export default InputText
