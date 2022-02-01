const S_CAPTION = {
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}
, DF_ITEM = {};

const ItemOption = ({ 
  item=DF_ITEM,
  propCaption
}) => (
  <div style={S_CAPTION}>
    {item[propCaption]}
  </div>
);

export default ItemOption
