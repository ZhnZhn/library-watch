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

const _createValidationMessages = (
  value,
  oneTitle
) => {
  const msg = [];
  if (!value) {
    msg.push(`${oneTitle} is required`)
  }
  msg.isValid = (msg.length === 0)
    ? true : false;
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
    _MENU_MORE,
    _TOOLBAR_BUTTONS,
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
    , _validationMessages = _createValidationMessages(value, oneTitle)
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
    <D.DraggableDialog
        isShow={isShow}
        caption={caption}
        menuModel={_MENU_MORE}
        commandButtons={_COMMAND_BUTTONS}
        onShowChart={onShow}
        onClose={_hClose}
    >
     <D.Toolbar
        isShow={isToolbar}
        buttons={_TOOLBAR_BUTTONS}
     />
     <D.RowInputText
        ref={_refInputOne}
        isShowLabel={isShowLabels}
        caption={oneTitle}
        placeholder={onePlaceholder}
        onEnter={_hLoad}
     />
     <D.ValidationMessages
        validationMessages={validationMessages}
     />
   </D.DraggableDialog>
  );
});

export default DialogType1
