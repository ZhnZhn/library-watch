import SvgClose from '../zhn-atoms/SvgClose';

const CL_ROOT = 'item-caption'
, CL_BT_CLOSE = 'item-caption__bt-close';

const ItemCaption = ({
  style,
  children,
  onClose
}) => (
  <div className={CL_ROOT} style={style}>
    {children}
    <SvgClose
      className={CL_BT_CLOSE}
      onClose={onClose}
    />
  </div>
);

export default ItemCaption
