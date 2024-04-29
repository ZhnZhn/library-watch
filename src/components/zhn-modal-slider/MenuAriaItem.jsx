const FN_NOOP = () => {};

const MenuAriaItem = ({
  refEl,
  onClick,
  onReg=FN_NOOP,
  children,
  ...rest
}) => {
  const _onKeyDown = evt => {
    if (evt.which === 13 || evt.which === 32) {
      onClick()
    }
  };

  return (
    <div
      {...rest}
      ref={refEl}
      role="menuitem"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={_onKeyDown}
    >
      {children}
    </div>
  );
}

export default MenuAriaItem
