import { useId } from '../../uiApi';

import InputSelect from '../../zhn-select/InputSelect';
import Row from './Row';
import Caption from './Caption';

const RowInputSelect = ({
  isShowLabel,
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
