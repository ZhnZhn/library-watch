import {
  useRef,
  getRefValue
} from '../uiApi';

import { memoIsShow } from '../hoc/memoFn';

import useDialog from './useDialog';
import useDialogButtons from './useDialogButtons';
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
  , _refInputOne = useRef()
  , [
    validationMessages,
    COMMAND_BUTTONS,
    hClose,
    hLoad
  ] = useDialogButtons((
    setValidationMessages,
    clearValidationMessages
  ) => {
    const value = getRefValue(_refInputOne).getValue()
    , _validationMessages = _crValidationMessages(value, oneTitle)
    if (_validationMessages.isValid){
      onLoad({
        repo: value,
        requestType
      });
      clearValidationMessages()
    } else {
      setValidationMessages(_validationMessages)
    }
  }, onClose);

  return (
    <Dialog
       isShow={isShow}
       isToolbar={isToolbar}
       caption={caption}
       menuModel={MENU_MODEL}
       toolbarButtons={TOOLBAR_BUTTONS}
       commandButtons={COMMAND_BUTTONS}
       validationMessages={validationMessages}
       onShow={onShow}
       onClose={hClose}
    >
      <D.RowInputText
         ref={_refInputOne}
         isShowLabel={isShowLabels}
         caption={oneTitle}
         placeholder={onePlaceholder}
         onEnter={hLoad}
      />
    </Dialog>
   );
 });

export default DialogType1
