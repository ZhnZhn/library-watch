import { useCallback } from 'react';
//import PropTypes from 'prop-types'
import ButtonCircle2 from './ButtonCircle2';

const CL_MENU_BADGE = "menu__badge"
, S_OPEN = { color: '#a487d4' }

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
  , _style = isOpen ? S_OPEN : null;
  return (
    <ButtonCircle2
      className={CL_MENU_BADGE}
      style={_style}
      caption={counter}
      onClick={_hClickBadge}
    />
  );
};

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
