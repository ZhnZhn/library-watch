import React from 'react';

const STYLE = {
  OPEN : {
    color: 'rgba(164, 135, 212, 1)'
  }
}

const MenuBadge = React.createClass({
  _handleClickBadge(event){
     event.stopPropagation();
     const { isOpen, onBadgeOpen, onBadgeClose } = this.props;
     if (isOpen){
       onBadgeClose();
     } else {
       onBadgeOpen();
     }
  },

  render(){
    const { counter, isOpen } = this.props
         , _styleSpan = isOpen ? STYLE.OPEN : null;
    return (
      <span
         className="menu__badge"
         style={_styleSpan}
         onClick={this._handleClickBadge}
      >
         {counter}
      </span>
    )
  }
});

export default MenuBadge
