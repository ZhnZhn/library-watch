import React, { Component } from 'react';

//import PropTypes from "prop-types";

import STYLE from './DateAgo.Style'

class DateAgo extends Component {
  /*
  static propTypes = {
     isShowDate: PropTypes.bool,
     style: PropTypes.object
  }
  */

  constructor(props){
    super(props)

    this.state = {
      isShowDate : !!props.isShowDate
    }
  }

  _hClick = (event) => {
     event.preventDefault()
     event.stopPropagation()
     this.setState(prevState => ({
       isShowDate: !prevState.isShowDate
     }))
  }

  render(){
     const { style, dateAgo, date } = this.props
         , { isShowDate } = this.state
         , _styleDate = isShowDate
               ? STYLE.INLINE_BLOCK
               : STYLE.NONE;
     return (
       <span>
         <span
            style={{ ...STYLE.DATE_AGO, ...style }}
            onClick={date ? this._hClick : void 0}
         >
           {dateAgo}
         </span>
         <span style={{ ...STYLE.DATE, ..._styleDate }}>
            {date}
         </span>
       </span>
     );
  }
}

export default DateAgo
