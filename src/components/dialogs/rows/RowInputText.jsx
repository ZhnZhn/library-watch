import { forwardRef } from 'react';
import InputText from '../../zhn-atoms/InputText';
import Caption from './Caption'

const S_ROW_DIV = { margin: 5 }
, S_LABEL_SPAN = {
  color: '#1b75bb',
  display: 'inline-block',
  width: 100,
  paddingRight: 5,
  textAlign: 'right',
  fontSize: '16px',
  fontWeight: 'bold'
}
, S_ROOT = { lineHeight: 2 }
, S_CAPTION = { width: 120 }
, S_INPUT_TEXT = {
  width: 250,
  height: 30,
  paddingLeft: 10,
  marginLeft: 0,
  marginRight: 0
};

const RowInputText = forwardRef(({
  isShowLabel=true,
  caption='',
  placeholder,
  onEnter
}, ref) => {
  const _placeholder = isShowLabel
    ? placeholder
    : placeholder || caption;

  return (
    <div style={{...S_ROW_DIV, ...S_ROOT}}>
       <Caption
         is={isShowLabel}
         style={{...S_LABEL_SPAN, ...S_CAPTION}}
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
