import D from '../dialogs/DialogCell';

const RowText = ({
  style,
  caption,
  isCaption=true,
  textStyle,
  text
}) => (
  <D.Row style={style}>
    <D.Caption
      is={isCaption}
      caption={caption}
    />
    <span style={textStyle}>
       {text}
    </span>
  </D.Row>
);

export default RowText
