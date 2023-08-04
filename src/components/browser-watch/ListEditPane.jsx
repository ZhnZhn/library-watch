import {
 useRef,
 useCallback,
 getRefValue
} from '../uiApi';

import useValidationMessages from '../hooks/useValidationMessages';
import useRerender from '../hooks/useRerender';
import useWatchList from './useWatchList';

import SelectGroupList from './SelectGroupList';
import RowInputText from '../dialogs/rows/RowInputText';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import RowButtons from './RowButtons';

const ListEditPane = ({
  getWatchListsByGroup,
  forActionType,
  msgOnIsEmptyName,
  msgOnNotSelect,
  onRename,
  onClose
}) => {
  const _refGroupList = useRef()
  , _refInputText = useRef()
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages(
    () => getRefValue(_refInputText).setValue('')
  )
  , rerender = useRerender()
  , groupOptions = useWatchList(
     forActionType,
     setValidationMessages,
     _hClear,
     rerender
  )
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hRename = useCallback(() => {
    const {
      captionGroup,
      captionList
    } = getRefValue(_refGroupList).getValue()
    , captionListTo = getRefValue(_refInputText).getValue();
    if (captionGroup && captionList && captionListTo){
      onRename({
        captionGroup,
        captionListFrom: captionList,
        captionListTo
      })
    } else {
      const msg = [];
      if (!captionGroup) { msg.push(msgOnNotSelect('Group')); }
      if (!captionList)  { msg.push(msgOnNotSelect('List From')); }
      if (!captionListTo){ msg.push(msgOnIsEmptyName('List To')); }
      setValidationMessages(msg)
    }
  }, [])
  // onRename, msgOnIsEmptyName, msgOnNotSelect
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div>
       <SelectGroupList
         ref={_refGroupList}
         getWatchListsByGroup={getWatchListsByGroup}
         groupCaption="In Group"
         groupOptions={groupOptions}
         listCaption="List From"
       />
       <RowInputText
          ref={_refInputText}
          caption="List To"
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

export default ListEditPane
