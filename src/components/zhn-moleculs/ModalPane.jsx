import useClickOutside from '../hooks/useClickOutside';
import useKeyEscape from '../hooks/useKeyEscape';

const S_DIV = { backgroundColor: '#4d4d4d' }
, FN_NOOP = () => {};

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
  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (
    <div
       {...restProps}
       ref={_ref}
       className={className}
       style={{...S_DIV, ...style}}
       hidden={!isShow}
       onKeyDown={isShow ? _hKeyEscape : void 0}
    >
      {children}
    </div>
  );
  /*eslint-enable jsx-a11y/no-static-element-interactions*/
};

export default ModalPane
