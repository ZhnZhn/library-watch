import {
  forwardRef,
  useRef,
  useImperativeHandle,
  getRefValue
} from '../uiApi';
import InputText from '../zhn-atoms/InputText';
import styles from '../styles/DialogStyles';
import crRowCaption from './crRowCaption';

const S_ROW_DIV = { lineHeight: 2 }
, S_CAPTION = { width: 120 }
, S_INPUT_TEXT = {
  width: 250,
  marginLeft: 0,
  marginRight: 0,
  paddingLeft: 10,
  height: 30
};

const RowInputText = forwardRef(({
  caption
}, ref) => {
  const _refInput = useRef();

  useImperativeHandle(ref, () => ({
    getValue: () => getRefValue(_refInput)
      .getValue()
      .trim(),
    setValue: (value) => getRefValue(_refInput)
      .setValue(value)
  }))

  return (
    <div style={{...styles.rowDiv, ...S_ROW_DIV}}>
       <span style={{...styles.labelSpan, ...S_CAPTION}}>
         {crRowCaption(caption)}
       </span>
       <InputText
          ref={_refInput}
          style={S_INPUT_TEXT}
       />
    </div>
  );
});

export default RowInputText
