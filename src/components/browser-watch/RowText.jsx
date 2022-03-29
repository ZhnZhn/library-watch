import styles from '../styles/DialogStyles';
import crRowCaption from './crRowCaption';

const RowText = ({
  style,
  caption,
  textStyle,
  text
}) => (
  <div style={{...styles.rowDiv, ...style}}>
    <span style={styles.labelSpan}>
     {crRowCaption(caption)}
    </span>
    <span style={textStyle}>
       {text}
    </span>
  </div>
);

export default RowText
