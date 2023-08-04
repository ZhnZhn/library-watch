//import PropTypes from 'prop-types'
import {
  useCallback,
  getRefValue
} from '../uiApi';

import useValidationMessages from '../hooks/useValidationMessages';
import useRefItemCaption from './useRefItemCaption';
import useWatchList from './useWatchList';

import RowInputSelect from '../dialogs/rows/RowInputSelect';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import RowButtons from './RowButtons';

const GroupDeletePane = ({
  forActionType,
  msgOnNotSelect,
  onDelete,
  onClose
}) => {
  const [
     _refCaption,
     _hSelectGroup
  ] = useRefItemCaption()
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages()
  , groupOptions = useWatchList(
     forActionType,
     setValidationMessages,
     _hClear
  )
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hDeleteGroup = useCallback(() => {
    const caption = getRefValue(_refCaption);
    if (caption) {
      onDelete({ caption })
    } else {
      setValidationMessages([msgOnNotSelect('Group')])
    }
  }, [])
  // onDelete, msgOnNotSelect
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div>
      <RowInputSelect
        caption="Group"
        options={groupOptions}
        onSelect={_hSelectGroup}
      />
      <ValidationMessages
        validationMessages={validationMessages}
      />
      <RowButtons
        caption="Delete"
        onClick={_hDeleteGroup}
        onClose={onClose}
      />
   </div>
  );
};

/*
GroupDeletePane.propTypes = {  
  forActionType: PropTypes.string,
  msgOnNotSelect: PropTypes.func,
  onDelete: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default GroupDeletePane
