import {
  useRef,
  useState,
  useCallback
} from '../uiApi';
import useListen from '../hooks/useListen'
import useRefItemCaption from './useRefItemCaption';
import useValidationMessages from './useValidationMessages';

import RowInputSelect from './RowInputSelect';
import RowInputText from './RowInputText';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import RowButtons from './RowButtons';

const _getRefValue = ref => ref.current

const GroupEditPane = ({
  store,
  actionCompleted,
  actionFailed,
  forActionType,
  msgOnNotSelect,
  msgOnIsEmptyName,
  onRename,
  onClose
}) => {
  const _refInputText = useRef()
  , [
     _refCaptionFrom,
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
  ] = useValidationMessages(
    () => _getRefValue(_refInputText).setValue('')
  )
  /* eslint-disable react-hooks/exhaustive-deps */
  , _hRename = useCallback(() => {
    const captionTo = _getRefValue(_refInputText).getValue()
    , captionFrom = _getRefValue(_refCaptionFrom);
    if (captionTo && captionFrom) {
      onRename({
        captionFrom,
        captionTo
      });
    } else {
      const msg = [];
      if (!captionFrom){
        msg.push(msgOnNotSelect('Group From'));
      }
      if (!captionTo){
        msg.push(msgOnIsEmptyName('Group To'));
      }
      setValidationMessages(msg)
    }
  }, [])
  // onRename, msgOnNotSelect, msgOnIsEmptyName, setValidationMessages
  /* eslint-enable react-hooks/exhaustive-deps */

  useListen(store, (actionType, data) => {
    if (actionType === actionCompleted){
      if (data && data.forActionType === forActionType){
        _hClear();
      }
      setGroupOptions(store.getWatchGroups())
    } else if (actionType === actionFailed
         && data.forActionType === forActionType) {
      setValidationMessages(data.messages)
    }
  })

  return (
    <div>
       <RowInputSelect
          caption="Group From"
          options={groupOptions}
          onSelect={_hSelectGroup}
       />
      <RowInputText
        ref={_refInputText}
        caption="Group To"
      />
      <ValidationMessages
        validationMessages={validationMessages}
      />
      <RowButtons
        caption="Rename"
        onClick={_hRename}
        onClear={_hClear}
        onClose={onClose}
      />
    </div>
  );
};

export default GroupEditPane
