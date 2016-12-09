import React from 'react';

import STYLE from './DateAgo.Style'

const DateAgo = React.createClass({
  getInitialState(){
    return {
      isShowDate : (this.props.isShowDate) ? true : false
    }
  },

  _handleClickDateAgo(event){
     event.preventDefault();
     event.stopPropagation();
     this.setState({ isShowDate: !this.state.isShowDate });
  },

  render(){
     const { dateAgo, date } = this.props
         , { isShowDate } = this.state
         , _styleDate = (isShowDate)
               ? STYLE.DISPLAY_INLINE_BLOCK
               : STYLE.DISPLAY_NONE
     return (
       <span>
         <span
            style={STYLE.DATE_AGO}
            onClick={this._handleClickDateAgo}
         >
           {dateAgo}
         </span>
         <span
            style={Object.assign({}, STYLE.DATE, _styleDate)}
         >
            {date}
         </span>
       </span>
     );
  }
});

export default DateAgo
