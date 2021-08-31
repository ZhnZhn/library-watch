import { useRef, useEffect } from 'react';

const _fnNoop = () => {};

const MenuAriaItem = ({
  onClick,
  onReg=_fnNoop,
  children,
  ...rest
}) => {
  const _refNode = useRef()
  , _onKeyDown = evt => {
    if (evt.which === 13 || evt.which === 32) {
      onClick()
    }
  };

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => onReg(_refNode.current), [])
  //onReg
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      {...rest}
      ref={_refNode}
      role="menuitem"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={_onKeyDown}
    >
      {children}
    </div>
  );
};

export default MenuAriaItem
