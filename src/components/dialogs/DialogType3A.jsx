import {
  useRef,
  getRefValue
} from '../uiApi';
import useToggle from '../hooks/useToggle';
import useDialog from './useDialog';
import useDialogButtons from './useDialogButtons';
import memoIsShow from './memoIsShow';

import Dialog from './Dialog';
import D from './DialogCell';

const _crValidationMessages = (
  repo,
  isValid,
  datesMsg,
  oneTitle
) => {
    const msg = [];
    if (!repo) {
       msg.push(`${oneTitle} is required`);
    }
    if (!isValid) {
      msg.push(datesMsg);
    }
    msg.isValid = (msg.length === 0)
    return msg;
};

const DialogType3A = memoIsShow(({
  isShow,
  caption,
  requestType,
  oneTitle,
  onePlaceholder,
  onLoad,
  onShow,
  onClose
}) => {
  const [
    isShowDate,
    toggleIsShowDate
  ] = useToggle()
  , [
    MENU_MODEL,
    TOOLBAR_BUTTONS,
    isToolbar,
    isShowLabels
  ] = useDialog(toggleIsShowDate)
  , _refInputOne = useRef()
  , _refInputDates = useRef()
  , [
    validationMessages,
    COMMAND_BUTTONS,
    hClose,
    hLoad
  ] = useDialogButtons((
    setValidationMessages,
    clearValidationMessages
  ) => {
    const repo = getRefValue(_refInputOne).getValue()
    , _datesInst = getRefValue(_refInputDates)
    , { isValid, datesMsg } = _datesInst.getValidation()
    , { fromDate, toDate } = _datesInst.getValues()
    , _validationMessage = _crValidationMessages(
      repo, isValid, datesMsg, oneTitle
    )
    if (_validationMessage.isValid){
      onLoad({
        repo,
        requestType,
        fromDate,
        toDate
      });
      clearValidationMessages()
    } else {
      setValidationMessages(_validationMessage)
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
      <D.RowInputDatePeriod
        ref={_refInputDates}
        isShow={isShowDate}
        isShowLabels={isShowLabels}
      />
    </Dialog>
  );
});

export default DialogType3A
