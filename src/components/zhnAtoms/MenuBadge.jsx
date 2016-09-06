import React from 'react';

const MenuBadge = React.createClass({
  _handlerClickBadge(event){
     event.stopPropagation();
     const { isOpen, onBadgeOpen, onBadgeClose } = this.props;
     if (isOpen){
       onBadgeClose();       
     } else {
       onBadgeOpen();
     }
  },

  render(){
    const { counter, isOpen } = this.props;
    const spanStyle = isOpen ? {color: 'rgba(164, 135, 212, 1)'} : null;
    return (
      <span
         className="menu__badge"
         style={spanStyle}
         onClick={this._handlerClickBadge}>
         {counter}
      </span>
    )
  }
});

export default MenuBadge
