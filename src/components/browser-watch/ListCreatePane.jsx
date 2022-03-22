import {
  useRef,
  useState,
  useCallback
} from '../uiApi';
import useListen from '../hooks/useListen';
import useValidationMessages from './useValidationMessages';

import RowInputSelect from './RowInputSelect';
import RowInputText from './RowInputText';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import RowButtons from './RowButtons';

const _getRefValue = ref => ref.current
, _setRefValue = (ref, value) => ref.current = value;

const ListCreatePane = ({
  store,
  actionCompleted,
  actionFailed,
  forActionType,
  msgOnNotSelect,
  msgOnIsEmptyName,
  onCreate,
  onClose
}) => {
  const _refInputText = useRef()
  , _refCaptionGroup = useRef()
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
  , _hSelectGroup = useCallback(item => {
    _setRefValue(_refCaptionGroup, item && item.caption || null)
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hCreate = useCallback(() => {
    const captionList = _getRefValue(_refInputText).getValue()
    , captionGroup = _getRefValue(_refCaptionGroup);
    if (captionGroup && captionList){
      onCreate({
         captionGroup,
         captionList
      });
    } else {
      const msg = [];
      if (!captionGroup) { msg.push(msgOnNotSelect('In Group')); }
      if (!captionList)  { msg.push(msgOnIsEmptyName('List')); }
      setValidationMessages(msg)
    }
  }, []);
  // onCreate, msgOnNotSelect, msgOnIsEmptyName,
  /*eslint-enable react-hooks/exhaustive-deps */

  useListen(store, (actionType, data) => {
    if (actionType === actionCompleted){
        if (data.forActionType === forActionType){
          _hClear();
        }
        setGroupOptions(store.getWatchGroups())
    } else if (actionType === actionFailed && data.forActionType === forActionType){
      setValidationMessages(data.messages)
    }
  })

  return (
    <div>
      <RowInputSelect
         caption="In Group"
         options={groupOptions}
         onSelect={_hSelectGroup}
      />
      <RowInputText
         ref={_refInputText}
         caption="List"
      />
      <ValidationMessages
         validationMessages={validationMessages}
      />
      <RowButtons
         caption="Create"
         onClick={_hCreate}
         onClear={_hClear}
         onClose={onClose}
      />
    </div>
  );
};

export default ListCreatePane
