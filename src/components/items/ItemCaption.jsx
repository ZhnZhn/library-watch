import SvgClose from '../zhn/SvgClose';

const CL_ITEM_CAPTION = 'item-caption'
, CL_BT_CLOSE = `${CL_ITEM_CAPTION}__bt-close`;

const ItemCaption = ({
  style,
  children,
  onClose
}) => (
  <div className={CL_ITEM_CAPTION} style={style}>
    {children}
    <SvgClose
      className={CL_BT_CLOSE}
      onClose={onClose}
    />
  </div>
);

export default ItemCaption
