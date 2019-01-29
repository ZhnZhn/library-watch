import React, { Component } from 'react';

//import PropTypes from "prop-types";

import STYLE from './DateAgo.Style'

class DateAgo extends Component {
  /*
  static propTypes = {
     isShowDate : PropTypes.bool
  }
  */

  constructor(props){
    super()
    this.state = {
      isShowDate : !!props.isShowDate
    }
  }

  _handleClickDateAgo = (event) => {
     event.preventDefault()
     event.stopPropagation()
     this.setState({ isShowDate: !this.state.isShowDate })
  }

  render(){
     const { dateAgo, date } = this.props
         , { isShowDate } = this.state
         , _styleDate = (isShowDate)
               ? STYLE.INLINE_BLOCK
               : STYLE.NONE;
     return (
       <span>
         <span
            style={STYLE.DATE_AGO}
            onClick={this._handleClickDateAgo}
         >
           {dateAgo}
         </span>
         <span
            style={{ ...STYLE.DATE, ..._styleDate }}
         >
            {date}
         </span>
       </span>
     );
  }
}

export default DateAgo
