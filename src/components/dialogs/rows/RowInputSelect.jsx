import InputSelect from '../../zhn-select/InputSelect'
import STYLE from '../../styles/DialogStyles'
import Caption from './Caption'

const S_CAPTION = { width: 120 };

const RowInputSelect = ({
  isShowLabel=true,
  caption,
  placeholder,
  options,
  onSelect
}) => (
  <div style={STYLE.rowDiv}>
    <Caption
      is={isShowLabel}
      style={{...STYLE.labelSpan, ...S_CAPTION}}
      caption={caption}
    />
     <InputSelect
        width="250"
        placeholder={placeholder}
        options={options}
        onSelect={onSelect}
     />
  </div>
);

export default RowInputSelect
