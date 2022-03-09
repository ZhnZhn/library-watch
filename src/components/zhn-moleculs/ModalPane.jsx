import useClickOutside from '../hooks/useClickOutside';

const S_DIV = { backgroundColor: '#4d4d4d' }
, FN_NOOP = () => {};

const ModalPane = ({
  isShow,
  onClose=FN_NOOP,
  children
}) => {
  const _ref = useClickOutside(isShow, onClose);
  return (
    <div
       ref={_ref}
       style={S_DIV}
    >
      {children}
    </div>
  );
};

export default ModalPane
