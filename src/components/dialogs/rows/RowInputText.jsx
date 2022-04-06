import { forwardRef } from '../../uiApi';
import InputText from '../../zhn-atoms/InputText';
import Caption from './Caption';

const S_DIV = {
  margin: 5,
  lineHeight: 2
}
, S_INPUT_TEXT = {
  width: 250,
  height: 30,
  paddingLeft: 10,
  marginLeft: 0,
  marginRight: 0
};

const RowInputText = forwardRef(({
  isShowLabel,
  caption,
  placeholder,
  onEnter
}, ref) => {
  const _placeholder = isShowLabel
    ? placeholder
    : placeholder || caption;

  return (
    <div style={S_DIV}>
       <Caption
         is={isShowLabel}
         caption={caption}
       />
       <InputText
          ref={ref}
          style={S_INPUT_TEXT}
          placeholder={_placeholder}
          onEnter={onEnter}
       />
    </div>
  );
});

export default RowInputText
