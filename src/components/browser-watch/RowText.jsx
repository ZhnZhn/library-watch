import Caption from '../dialogs/rows/Caption';
import Row from '../dialogs/rows/Row';

const RowText = ({
  style,
  caption,
  isCaption=true,
  textStyle,
  text
}) => (
  <Row style={style}>
    <Caption
      is={isCaption}
      caption={caption}
    />
    <span style={textStyle}>
       {text}
    </span>
  </Row>
);

export default RowText
