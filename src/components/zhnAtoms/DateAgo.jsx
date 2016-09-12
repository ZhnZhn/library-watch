import React from 'react';

const STYLE = {
  ROOT : {
    display : 'inline-block',
    cursor : 'pointer'
  },
  DATE_AGO : {
    color : 'gray'
  },
  DATE : {
    display : 'inline-block',
    color : 'black',
    marginLeft : '10px'
  }
}

const DateAgo = React.createClass({
  getInitialState(){
    const _isShowDate = (this.props.isShowDate)
              ? true
              : false;
    return {
      isShowDate : _isShowDate
    }
  },

  _handlerClickDateAgo(event){
     event.preventDefault();
     event.stopPropagation();
     this.setState({ isShowDate: !this.state.isShowDate });
  },

  render(){
     const { dateAgo, date } = this.props
         , { isShowDate } = this.state
         , _dateStyle = (isShowDate)
               ? { display : 'inline-block' }
               : { display : 'none' }
     return (
       <span>
         <span
            style={STYLE.DATE_AGO}
            onClick={this._handlerClickDateAgo}
         >
           {dateAgo}
         </span>
         <span
            style={Object.assign({}, STYLE.DATE, _dateStyle)}
         >
            {date}
         </span>
       </span>
     );
  }
});

export default DateAgo
