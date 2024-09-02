import {
  S_BLOCK,
  S_NONE
} from '../styleFn';

const CL_INIT = 'modal-root'
, CL_SHOWING = 'modal-root show-modal';

const ModalDialogContainer = ({
  isShow,
  onClose,
  children
}) => {
  const [_className, _style] = isShow
    ? [CL_SHOWING, S_BLOCK]
    : [CL_INIT, S_NONE];

  return (
    <div
      role="presentation"
      className={_className}
      style={_style}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default ModalDialogContainer
