import {
  useRef,
  useCallback
} from '../uiApi';
import useRefInit from '../hooks/useRefInit';
import useRerender from '../hooks/useRerender';
import useListen from '../hooks/useListen';
import useValidationMessages from './useValidationMessages';

import SelectGroupList from './SelectGroupList';
import ValidationMessages from '../dialogs/rows/ValidationMessages';
import RowButtons from './RowButtons';

const _getRefValue = ref => ref.current
, _setRefValue = (ref, value) => ref.current = value;

const ListDeletePane = ({
  store,
  actionCompleted,
  forActionType,
  msgOnNotSelect,
  onDelete,
  onClose
}) => {
  const _refGroupList = useRef()
  , [
    groupOptions,
    _refGroupOptions
  ] = useRefInit(store.getWatchGroups)
  , _rerenderComp = useRerender()
  , [
    validationMessages,
    setValidationMessages,
    _hClear
  ] = useValidationMessages()
  /* eslint-disable react-hooks/exhaustive-deps */
  , _hDelete = useCallback(() => {
     const _selectGroupListComp = _getRefValue(_refGroupList)
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

  useListen(store, (actionType, data) => {
    if (actionType === actionCompleted){
      if (data && data.forActionType === forActionType) {
        _hClear()
      }
      _setRefValue(_refGroupOptions, store.getWatchGroups())
      _rerenderComp()
    }
  })

  return (
    <div>
       <SelectGroupList
         ref={_refGroupList}
         store={store}
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
