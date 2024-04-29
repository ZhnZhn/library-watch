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

const ListCreatePane = ({
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

  return (
    <div>
      <RowInputSelect
         caption="In Group"
         options={groupOptions}
         onSelect={_hSelectGroup}
      />
      <RowInputText
         refEl={_refInputText}
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
