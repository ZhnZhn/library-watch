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
  style,
  caption,
  labelId
}) => is ? (
   <span
      id={labelId}
      style={{...S_LABEL_SPAN, ...style}}       
    >
     {caption}
   </span>
 ) : null;

export default Caption
