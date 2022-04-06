import {
  forwardRef,
  useRef,
  useImperativeHandle,
  getRefValue
} from '../uiApi';
import InputText from '../zhn-atoms/InputText';
import D from '../dialogs/DialogCell';

const S_ROW_DIV = { lineHeight: 2 }
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
    <D.Row style={S_ROW_DIV}>
       <D.Caption
         is={true}
         caption={caption}
       />
       <InputText
          ref={_refInput}
          style={S_INPUT_TEXT}
       />
    </D.Row>
  );
});

export default RowInputText
