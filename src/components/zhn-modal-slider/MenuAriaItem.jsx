import { forwardRef } from '../uiApi';

const FN_NOOP = () => {};

const MenuAriaItem = forwardRef(({
  onClick,
  onReg=FN_NOOP,
  children,
  ...rest
}, ref) => {
  const _onKeyDown = evt => {
    if (evt.which === 13 || evt.which === 32) {
      onClick()
    }
  };

  return (
    <div
      {...rest}
      ref={ref}
      role="menuitem"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={_onKeyDown}
    >
      {children}
    </div>
  );
});

export default MenuAriaItem
