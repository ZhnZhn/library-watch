import InputSelect from '../zhn-select/InputSelect';
import D from '../dialogs/DialogCell';

const RowInputSelect = ({
  caption,
  options,
  isUpdateOptions,
  onSelect
}) => (
  <D.Row>
     <D.Caption
       is={true}
       caption={caption}
     />
     <InputSelect
        width="250"
        options={options}
        isUpdateOptions={isUpdateOptions}
        onSelect={onSelect}
     />
  </D.Row>
);

export default RowInputSelect
