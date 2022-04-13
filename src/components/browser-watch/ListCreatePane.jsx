import {
  useRef,
  useState,
  useCallback,
  getRefValue
} from '../uiApi';
import useValidationMessages from '../hooks/useValidationMessages';
import useListen from '../hooks/useListen';
import useRefItemCaption from './useRefItemCaption';

import RowInputText from './RowInputText';
import RowInputSelect from '../dialogs/rows/RowInputSelect';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import RowButtons from './RowButtons';

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
  , [
    _refCaptionGroup,
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
    () => getRefValue(_refInputText).setValue('')
  )
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hCreate = useCallback(() => {
    const captionList = getRefValue(_refInputText).getValue()
    , captionGroup = getRefValue(_refCaptionGroup);
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
