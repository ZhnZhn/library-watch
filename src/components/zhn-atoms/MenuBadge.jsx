import React, { useCallback } from 'react';
//import PropTypes from 'prop-types'
import Button from './ButtonCircle2'

const CL = "menu__badge";

const S = {
  OPEN : {
    color: '#a487d4'
  }
}

const MenuBadge = ({
  isOpen,
  counter,
  onBadgeOpen,
  onBadgeClose
}) => {
  const _hClickBadge = useCallback(event => {
    event.preventDefault()
    event.stopPropagation()
    if (isOpen){
      onBadgeClose()
    } else {
      onBadgeOpen()
    }
  }, [isOpen, onBadgeOpen, onBadgeClose])
  , _style = isOpen ? S.OPEN : void 0;
  return (
    <Button
      className={CL}
      style={_style}
      caption={counter}
      onClick={_hClickBadge}
    />
  );
}

/*
MenuBadge.propTypes = {
  isOpen : PropTypes.bool,
  counter : PropTypes.oneOfType([
      PropTypes.number, PropTypes.string
  ]),
  onBadgeOpen : PropTypes.func,
  onBadgeClose : PropTypes.func
}
*/


export default MenuBadge
