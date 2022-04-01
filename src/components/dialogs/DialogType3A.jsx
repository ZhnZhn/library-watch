import {
  useRef,
  useCallback,
  getRefValue
} from '../uiApi';
import useToggle from '../hooks/useToggle';
import useValidationMessages from '../hooks/useValidationMessages';
import useMenuMore from './useMenuMore';
import useToolbarButtons from './useToolbarButtons';
import useCommandButtons from './useCommandButtons';
import memoIsShow from './memoIsShow';

import has from '../has';
import D from './DialogCell';
import helperFns from './helperFns/helperFns';

const { dateConfig } = helperFns;

const {
  _initFromDate,
  _initToDate,
  _onTestDate
} = dateConfig;

const _createValidationMessages = (
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
      ? true : false;
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
    isShowLabels,
    _toggleIsShowLabels
  ] = useToggle(has.wideWidth)
  , [
    isToolbar,
    _toggleIsToolbar
  ] = useToggle(true)
  , [
    isShowDate,
    _toggleIsShowDate
  ] = useToggle()
  , [
    validationMessages,
    setValidationMessages,
    _clearValidationMessages
  ] = useValidationMessages()
  , _refInputOne = useRef()
  , _refInputDates = useRef()
  , _MENU_MORE = useMenuMore(
     _toggleIsShowLabels,
     _toggleIsToolbar,
     _toggleIsShowDate
  )
  , _TOOLBAR_BUTTONS = useToolbarButtons(
     _toggleIsShowLabels,
     _toggleIsShowDate
  )
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
     const repo = getRefValue(_refInputOne).getValue()
     , _datesInst = getRefValue(_refInputDates)
     , { isValid, datesMsg } = _datesInst.getValidation()
     , { fromDate, toDate } = _datesInst.getValues()
     , _validationMessage = _createValidationMessages(
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
     <D.ShowHide isShow={isShowDate}>
       <D.Dates
           ref={_refInputDates}
           isShowLabels={isShowLabels}
           initFromDate={_initFromDate}
           initToDate={_initToDate}
           onTestDate={_onTestDate}
       />
     </D.ShowHide>
     <D.ValidationMessages
        validationMessages={validationMessages}
     />
   </D.DraggableDialog>
  );
});

export default DialogType3A
