import { useId } from '../../uiApi';

import InputSelect from '../../zhn-select/InputSelect';
import Row from './Row';
import Caption from './Caption';

const RowInputSelect = ({
  isShowLabel,
  captionStyle,
  caption,
  width = "250",
  placeholder,
  options,
  onSelect
}) => {
  const labelId = useId();
  return (
    <Row>
      <Caption
        is={isShowLabel}        
        caption={caption}
        style={captionStyle}
        labelId={labelId}
      />
      <InputSelect
        width={width}
        placeholder={placeholder}
        options={options}
        labelId={labelId}
        onSelect={onSelect}
      />
    </Row>
  );
};

export default RowInputSelect
