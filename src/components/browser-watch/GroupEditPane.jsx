import {
  useRef,
  useCallback,
  getRefValue
} from '../uiApi';

import useValidationMessages from '../hooks/useValidationMessages';
import useRefItemCaption from './useRefItemCaption';
import useWatchList from './useWatchList';

import RowInputSelect from '../dialogs/rows/RowInputSelect';
import RowInputText from '../dialogs/rows/RowInputText';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import RowButtons from './RowButtons';

const GroupEditPane = ({
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
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages(
    () => getRefValue(_refInputText).setValue('')
  )
  , groupOptions = useWatchList(
     forActionType,
     setValidationMessages,
     _hClear
  )
  /* eslint-disable react-hooks/exhaustive-deps */
  , _hRename = useCallback(() => {
    const captionTo = getRefValue(_refInputText).getValue()
    , captionFrom = getRefValue(_refCaptionFrom);
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

  return (
    <div>
       <RowInputSelect
          caption="Group From"
          options={groupOptions}
          onSelect={_hSelectGroup}
       />
      <RowInputText
        refEl={_refInputText}
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
