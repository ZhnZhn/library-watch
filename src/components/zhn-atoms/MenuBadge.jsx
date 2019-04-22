import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import Button from './ButtonCircle2'


const CL = "menu__badge";

const STYLE = {
  OPEN : {
    color: 'rgb(164, 135, 212)'
  }
}

class MenuBadge extends Component {
  /*
  static propTypes = {
    counter : PropTypes.oneOfType([
                 PropTypes.number, PropTypes.string
              ]),
    isOpen : PropTypes.bool,
    onBadgeOpen : PropTypes.func,
    onBadgeClose : PropTypes.func
  }
  */

  _handleClickBadge = (event) => {
     event.stopPropagation()
     const { isOpen, onBadgeOpen, onBadgeClose } = this.props
     if (isOpen){
       onBadgeClose()
     } else {
       onBadgeOpen()
     }
  }

  /*
  <span
     className={CL}
     style={_style}
     onClick={this._handleClickBadge}
  >
     {counter}
  </span>
  */

  render(){
    const { counter, isOpen } = this.props
         , _style = isOpen
             ? STYLE.OPEN : undefined;
    return (
      <Button
        className={CL}
        style={_style}
        caption={counter}
        onClick={this._handleClickBadge}
      />
    );
  }
}

export default MenuBadge
