import BtSvgX from '../zhn/BtSvgX';

const CL_ITEM_CAPTION = 'item-caption'
, CL_BT_CLOSE = `${CL_ITEM_CAPTION}__bt-close`;

const ItemCaption = (
  props
) => (
  <div className={CL_ITEM_CAPTION} style={props.style}>
    {props.children}
    <BtSvgX
      ariaLabel="Remove item"
      className={CL_BT_CLOSE}
      onClose={props.onClose}
    />
  </div>
);

export default ItemCaption
