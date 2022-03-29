import InputSelect from '../zhn-select/InputSelect';
import styles from '../styles/DialogStyles';
import crRowCaption from './crRowCaption';

const RowInputSelect = ({
  caption,
  options,
  isUpdateOptions,
  onSelect
}) => (
  <div style={styles.rowDiv}>
     <span style={styles.labelSpan}>
       {crRowCaption(caption)}
     </span>
     <InputSelect
        width="250"
        options={options}
        isUpdateOptions={isUpdateOptions}
        onSelect={onSelect}
     />
  </div>
);

export default RowInputSelect
