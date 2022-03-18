import {
  forwardRef,
  useRef,
  useImperativeHandle
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
}
, _getRefValue = ref => ref.current;

const RowInputText = forwardRef(({
  caption
}, ref) => {
  const _refInput = useRef();

  useImperativeHandle(ref, () => ({
    getValue: () => _getRefValue(_refInput)
      .getValue()
      .trim(),
    setValue: (value) => _getRefValue(_refInput)
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
