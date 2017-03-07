import React, { Component, PropTypes } from 'react';


const ROOT_CLASS = "menu__badge"

const STYLE = {
  OPEN : {
    color: 'rgb(164, 135, 212)'
  }
}

class MenuBadge extends Component {
  static propTypes = {
    counter : PropTypes.oneOfType([
                 PropTypes.number, PropTypes.string
              ]),
    isOpen : PropTypes.bool,
    onBadgeOpen : PropTypes.func,
    onBadgeClose : PropTypes.func
  }

  _handleClickBadge = (event) => {
     event.stopPropagation()
     const { isOpen, onBadgeOpen, onBadgeClose } = this.props
     if (isOpen){
       onBadgeClose()
     } else {
       onBadgeOpen()
     }
  }

  render(){
    const { counter, isOpen } = this.props
         , _style = isOpen ? STYLE.OPEN : null;
    return (
      <span
         className={ROOT_CLASS}
         style={_style}
         onClick={this._handleClickBadge}
      >
         {counter}
      </span>
    )
  }
}

export default MenuBadge
