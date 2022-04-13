const S_LABEL_SPAN = {
  color: '#1b75bb',
  display: 'inline-block',
  width: 120,
  paddingRight: 5,
  textAlign: 'right',
  fontSize: '16px',
  fontWeight: 'bold'
};

const _crCaption = caption => caption
 && caption.indexOf(':') === -1
   ? caption + ':'
   : '';

const Caption = ({
  is=true,
  caption
}) => is ? (
   <span style={S_LABEL_SPAN}>
     {_crCaption(caption)}
   </span>
 ) : null;

export default Caption
