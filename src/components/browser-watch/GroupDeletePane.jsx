//import PropTypes from 'prop-types'
import {
  useRef,
  useState,
  useCallback
} from '../uiApi';
import useListen from '../hooks/useListen';

import RowInputSelect from './RowInputSelect';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import FlatButton from '../zhn-m/FlatButton';

const S_DIV_BTS = {
  textAlign: 'right',
  margin: '8px 4px 10px 0',
  cursor: 'default'
}
, _getRefValue = ref => ref.current
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
    setValidationMesages
  ] = useState([])
  , _hSelectGroup = useCallback(item => {
     _setRefValue(_refCaption, item && item.caption || null)
  }, [])
  , _hClear = useCallback(() => {
    setValidationMesages(
      prevState => prevState.length > 0
        ? []
        : prevState
    )
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hDeleteGroup = useCallback(() => {
    const caption = _getRefValue(_refCaption);
    if (caption) {
      onDelete({ caption })
    } else {
      setValidationMesages([msgOnNotSelect('Group')])
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
      <div style={S_DIV_BTS}>
        <FlatButton
          isPrimary={true}
          caption="Delete"
          timeout={0}
          onClick={_hDeleteGroup}
        />
        <FlatButton
          caption="Close"
          timeout={0}
          onClick={onClose}
        />
      </div>
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
