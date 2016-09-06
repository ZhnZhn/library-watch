import React from 'react';

const WITHOUT_LIMIT = '';
const STYLE = {
  LABEL : {
    display: 'inline-block',
    color:'#2f7ed8',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '16px',
    fontWeight: 'bold'
  }
}

const LimitRemainingLabel = React.createClass({
  getInitialState(){
    return {
      value : ''
    }
  },
  componentWillMount(){
    const { store } = this.props;
    this.unsubscribe = store.listenLimitRemaining(this._onStore);
  },
  componentWillUnmount(){
    this.unsubscribe();
  },

  _onStore(value){
    if ( !(value == null) ) {
      this.setState({ value: value });
    } else if (this.state.value !== WITHOUT_LIMIT){
      this.setState({ value: WITHOUT_LIMIT });
    }
  },

  render(){
    const { style } = this.props
        , { value } = this.state

    return (
       <span style={Object.assign({}, STYLE.LABEL, style)}>
         {value}
       </span>
    );
  }
})

export default LimitRemainingLabel
