//import PropTypes from 'prop-types'
import {
  useRef,
  useState,
  useCallback
} from '../uiApi';
import useListen from '../hooks/useListen';
import useValidationMessages from './useValidationMessages';

import RowInputSelect from './RowInputSelect';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import RowButtons from './RowButtons';

const _getRefValue = ref => ref.current
, _setRefValue = (ref, value) => ref.current = value;

const GroupDeletePane = ({
  store,
  actionCompleted,
  forActionType,
  msgOnNotSelect,
  onDelete,
  onClose
}) => {
  const _refCaption = useRef(null)
  , [
    groupOptions,
    setGroupOptions
  ] = useState(store.getWatchGroups)
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages()
  , _hSelectGroup = useCallback(item => {
     _setRefValue(_refCaption, item && item.caption || null)
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hDeleteGroup = useCallback(() => {
    const caption = _getRefValue(_refCaption);
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
