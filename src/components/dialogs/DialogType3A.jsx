import {
  useRef,
  useCallback,
  getRefValue
} from '../uiApi';
import useToggle from '../hooks/useToggle';
import useValidationMessages from '../hooks/useValidationMessages';
import useDialog from './useDialog';
import useCommandButtons from './useCommandButtons';
import memoIsShow from './memoIsShow';

import Dialog from './Dialog';
import D from './DialogCell';
import helperFns from './helperFns/helperFns';

const { dateConfig } = helperFns;

const {
  _initFromDate,
  _initToDate,
  _onTestDate
} = dateConfig;

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
    _toggleIsShowDate
  ] = useToggle()
  , [
    MENU_MODEL,
    TOOLBAR_BUTTONS,
    isToolbar,
    isShowLabels
  ] = useDialog(_toggleIsShowDate)
  , [
    validationMessages,
    setValidationMessages,
    _clearValidationMessages
  ] = useValidationMessages()
  , _refInputOne = useRef()
  , _refInputDates = useRef()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
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
       _clearValidationMessages()
     } else {
       setValidationMessages(_validationMessage)
     }
  }, [])
  // oneTitle, requestType, onLoad, _clearValidationMessages
  , _COMMAND_BUTTONS = useCommandButtons(_hLoad)
  , _hClose = useCallback(() => {
     _clearValidationMessages()
     onClose();
  }, [])
  // onClose, _clearValidationMessages
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
      <D.ShowHide isShow={isShowDate}>
        <D.Dates
            ref={_refInputDates}
            isShowLabels={isShowLabels}
            initFromDate={_initFromDate}
            initToDate={_initToDate}
            onTestDate={_onTestDate}
        />
      </D.ShowHide>
    </Dialog>
  );
});

export default DialogType3A
