import { crMenuItemRole } from '../a11yFn';

const FN_NOOP = () => {};

const MenuAriaItem = ({
  refEl,
  onClick,
  onReg=FN_NOOP,
  children,
  ...restProps
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
  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (
    <div
      {...restProps}
      {...crMenuItemRole()}
      ref={refEl}
      onClick={onClick}
      onKeyDown={_onKeyDown}
      onKeyUp={_onKeyUp}
    >
      {children}
    </div>
  );
  /*eslint-enable jsx-a11y/no-static-element-interactions*/
}

export default MenuAriaItem
