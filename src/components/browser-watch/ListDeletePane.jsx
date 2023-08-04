import {
  useRef,
  useCallback,
  getRefValue
} from '../uiApi';

import useValidationMessages from '../hooks/useValidationMessages';
import useRerender from '../hooks/useRerender';
import useWatchList from './useWatchList';

import SelectGroupList from './SelectGroupList';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import RowButtons from './RowButtons';

const ListDeletePane = ({
  getWatchListsByGroup,
  forActionType,
  msgOnNotSelect,
  onDelete,
  onClose
}) => {
  const _refGroupList = useRef()
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages()
  , rerender = useRerender()
  , groupOptions = useWatchList(
     forActionType,
     setValidationMessages,
     _hClear,
     rerender
  )
  /* eslint-disable react-hooks/exhaustive-deps */
  , _hDelete = useCallback(() => {
     const _selectGroupListComp = getRefValue(_refGroupList)
     , {
       captionGroup,
       captionList
     } = _selectGroupListComp.getValue();
     if (captionGroup && captionList){
       onDelete({
         captionGroup,
         captionList
       })
     } else {
       const msg = [];
       if (!captionGroup) {msg.push(msgOnNotSelect('Group'));}
       if (!captionList)  {msg.push(msgOnNotSelect('List')); }
       setValidationMessages(msg)
     }
  }, [])
  // onDelete, msgOnNotSelect
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <div>
       <SelectGroupList
         ref={_refGroupList}
         getWatchListsByGroup={getWatchListsByGroup}         
         groupCaption="In Group"
         groupOptions={groupOptions}
         listCaption="List"
       />
       <ValidationMessages
          validationMessages={validationMessages}
       />
       <RowButtons
         caption="Delete"
         onClick={_hDelete}
         onClear={_hClear}
         onClose={onClose}
       />
    </div>
  );
};

export default ListDeletePane
