const S_LABEL_SPAN = {
  color: '#1b75bb',
  display: 'inline-block',
  width: 120,
  paddingRight: 8,
  textAlign: 'right',
  fontSize: '16px',
  fontWeight: 'bold'
};

const Caption = ({
  is=true,
  caption,
  labelId
}) => is ? (
   <span style={S_LABEL_SPAN} id={labelId}>
     {caption}
   </span>
 ) : null;

export default Caption
