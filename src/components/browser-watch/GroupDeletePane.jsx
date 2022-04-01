//import PropTypes from 'prop-types'
import {
  useState,
  useCallback,
  getRefValue
} from '../uiApi';
import useValidationMessages from '../hooks/useValidationMessages';
import useListen from '../hooks/useListen';
import useRefItemCaption from './useRefItemCaption';

import RowInputSelect from './RowInputSelect';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import RowButtons from './RowButtons';

const GroupDeletePane = ({
  store,
  actionCompleted,
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
     groupOptions,
     setGroupOptions
  ] = useState(store.getWatchGroups)
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages()
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

  useListen(store, (actionType, data) => {
    if (actionType === actionCompleted) {
      if (data.forActionType === forActionType){
        _hClear();
      }
      setGroupOptions(store.getWatchGroups())
    }
  })

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
  store: PropTypes.object,
  actionCompleted: PropTypes.string,
  forActionType: PropTypes.string,
  msgOnNotSelect: PropTypes.func,
  onDelete: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default GroupDeletePane
