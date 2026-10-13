import useClickOutside from '../hooks/useClickOutside';
import { useKeyEscape } from '../hooks/fUseKey';
import { useFocusPrevElement } from '../hooks/useFocus';

import { crCnBgColor } from '../styleFn';

const FN_NOOP = () => {};

const ModalPane = ({
  isShow,
  className,
  style,
  onClose=FN_NOOP,
  children,
  ...restProps
}) => {
  const _ref = useClickOutside(isShow, onClose)
  , _hKeyEscape = useKeyEscape(onClose);

  useFocusPrevElement(isShow)
  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (
    <div
       {...restProps}
       ref={_ref}
       className={crCnBgColor(className)}
       style={style}
       hidden={!isShow}
       onKeyDown={isShow ? _hKeyEscape : void 0}
    >
      {children}
    </div>
  );
  /*eslint-enable jsx-a11y/no-static-element-interactions*/
};

export default ModalPane
