import {
  useRef,
  useCallback,
  getRefValue
} from '../uiApi';
import useValidationMessages from '../hooks/useValidationMessages';
import useDialog from './useDialog';
import useCommandButtons from './useCommandButtons';
import memoIsShow from './memoIsShow';

import D from './DialogCell';
import Dialog from './Dialog';

const _crValidationMessages = (
  value,
  oneTitle
) => {
  const msg = [];
  if (!value) {
    msg.push(`${oneTitle} is required`)
  }
  msg.isValid = (msg.length === 0)
  return msg;
};

const DialogType1 = memoIsShow(({
  isShow,
  caption,
  oneTitle,
  onePlaceholder,
  requestType,
  onShow,
  onLoad,
  onClose
}) => {
  const [
    MENU_MODEL,
    TOOLBAR_BUTTONS,
    isToolbar,
    isShowLabels
  ] = useDialog()
  , [
    validationMessages,
    setValidationMessages,
    _clearValidationMessages
  ] = useValidationMessages()
  , _refInputOne = useRef()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
    const value = getRefValue(_refInputOne).getValue()
    , _validationMessages = _crValidationMessages(value, oneTitle)
    if (_validationMessages.isValid){
      onLoad({
        repo: value,
        requestType
      });
      _clearValidationMessages()
    } else {
      setValidationMessages(_validationMessages)
    }
  }, [])
  // oneTitle, requestType, onLoad, _clearValidationMessages
  /*eslint-enable react-hooks/exhaustive-deps */
  , _COMMAND_BUTTONS = useCommandButtons(_hLoad)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClose = useCallback(() => {
     _clearValidationMessages()
     onClose();
  }, [])
  // _clearValidationMessages, onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <Dialog
       isShow={isShow}
       isToolbar={isToolbar}
       caption={caption}
       menuModel={MENU_MODEL}
       toolbarButtons={TOOLBAR_BUTTONS}
       commandButtons={_COMMAND_BUTTONS}
       validationMessages={validationMessages}
       onShow={onShow}
       onClose={_hClose}
    >
      <D.RowInputText
         ref={_refInputOne}
         isShowLabel={isShowLabels}
         caption={oneTitle}
         placeholder={onePlaceholder}
         onEnter={_hLoad}
      />
    </Dialog>
   );
 });

export default DialogType1
