import React from 'react';

const styles = {
  inputText : {
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

const InputText = React.createClass({
  displayName : 'InputText',
  propTypes : {
    initValue : React.PropTypes.string,
    style : React.PropTypes.object
  },

  getInitialState(){
    return {
      value : this.props.initValue || ''
    }
  },

  componentWillReceiveProps(nextProps){
    if ( nextProps !== this.props &&
         typeof nextProps.initValue !== "undefined")
    {
      this.setState({ value : nextProps.initValue });
    }
  },

  _handlerInputChange(event){
    this.setState({ value : event.target.value })
  },

  _handlerInputKeyDown(event){
     if (event.keyCode === 27){
       this.setState({ value : '' })
     }
  },

  render(){
    const { style, placeholder='' } = this.props
        , {value} = this.state;
    return (
      <input
        type="text"
        style={Object.assign({}, styles.inputText, style)}
        value={value}
        translate={false}
        placeholder={placeholder}
        onChange={this._handlerInputChange}
        onKeyDown={this._handlerInputKeyDown}
      />
    )
  },

  getValue(){
    return this.state.value.trim();
  },
  setValue(value){
    this.setState({ value });
  }
})

export default InputText
