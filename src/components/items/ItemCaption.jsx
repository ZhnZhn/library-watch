import SvgClose from '../zhn-atoms/SvgClose';

const CL = {
  ROOT: 'item-caption',
  BT_CLOSE: 'item-caption__bt-close'
};

const ItemCaption = ({
  style,
  children,
  onClose
}) => (
  <div className={CL.ROOT} style={style}>
    {children}
    <SvgClose
      className={CL.BT_CLOSE}
      onClose={onClose}
    />
  </div>
);

export default ItemCaption
