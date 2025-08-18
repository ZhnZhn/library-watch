const FN_NOOP = () => {};

const MenuAriaItem = ({
  refEl,
  onClick,
  onReg=FN_NOOP,
  children,
  ...rest
}) => {
  const _onKeyDown = evt => {
    if (evt.keyCode === 32) {
      evt.preventDefault()
    }
  }
  , _onKeyUp = evt => {
    if (evt.keyCode === 13 || evt.keyCode === 32) {
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
      onKeyUp={_onKeyUp}
    >
      {children}
    </div>
  );
}

export default MenuAriaItem
