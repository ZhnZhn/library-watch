import { useId } from '../../uiApi';

import InputText from '../../zhn/InputText';
import Row from './Row';
import Caption from './Caption';

const S_INPUT_TEXT = {
  width: 240,
  height: 38,
  paddingLeft: 5
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
    <Row>
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
    </Row>
  );
};

export default RowInputText
