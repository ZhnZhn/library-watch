import { useId } from '../../uiApi';

import InputText from '../../zhn/InputText';
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

const RowInputText = ({
  refEl,
  isShowLabel,
  caption,
  placeholder,
  onEnter
}) => {
  const labelId = useId()
  , _placeholder = isShowLabel
    ? placeholder
    : placeholder || caption;

  return (
    <div style={S_DIV}>
       <Caption
         is={isShowLabel}
         caption={caption}
         labelId={labelId}
       />
       <InputText
          refEl={refEl}
          style={S_INPUT_TEXT}
          placeholder={_placeholder}
          labelId={labelId}
          onEnter={onEnter}
       />
    </div>
  );
};

export default RowInputText
