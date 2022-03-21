import FlatButton from '../zhn-m/FlatButton';

const S_DIV_BTS = {
  textAlign: 'right',
  margin: '8px 4px 10px 0',
  cursor: 'default'
};

const RowButtons = ({
  caption,
  onClick,
  onClear,
  onClose
}) => (
  <div style={S_DIV_BTS}>
     <FlatButton
        isPrimary={true}
        caption={caption}
        timeout={0}
        onClick={onClick}
     />
     {onClear && <FlatButton
        caption="Clear"
        timeout={0}
        onClick={onClear}
     />}
     <FlatButton
        caption="Close"
        timeout={0}
        onClick={onClose}
     />
 </div>
);

export default RowButtons
