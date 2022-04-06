import InputSelect from '../../zhn-select/InputSelect';
import Row from './Row';
import Caption from './Caption';

const RowInputSelect = ({
  isShowLabel,
  caption,
  placeholder,
  options,
  onSelect
}) => (
  <Row>
    <Caption
      is={isShowLabel}
      caption={caption}
    />
     <InputSelect
        width="250"
        placeholder={placeholder}
        options={options}
        onSelect={onSelect}
     />
  </Row>
);

export default RowInputSelect
