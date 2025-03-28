import {
  useRef,
  useMemo,
  getRefValue
} from '../uiApi';

import { memoIsShow } from '../hoc/memoFn';

import useToggle from '../hooks/useToggle';
import useDialog from './useDialog';
import useSelectItem from './useSelectItem';
import useDialogButtons from './useDialogButtons';
import getRefItemValue from './getRefItemValue';

import Dialog from './Dialog';
import RowInputText from './rows/RowInputText';
import RowInputSelect from './rows/RowInputSelect';
import RowInputDatePeriod from './rows/RowInputDatePeriod';

import { getRowSelectProps } from './getRowSelectProps';
import { ymdToUTCSecond } from './helperFns';

const _createValidationMessages = (
  isValid,
  datesMsg
) => {
   const msg = [];
   if (!isValid) {
     msg.push(datesMsg);
   }
   msg.isValid = (msg.length === 0);
   return msg;
};

const _getDateTuple = (_datesInst) => {
  if (_datesInst) {
    const {
      isValid,
      datesMsg
    } = _datesInst.getValidation()
    , {
      fromDate,
      toDate
    } = _datesInst.getValues()
    return [isValid, datesMsg, fromDate, toDate];
  }
  return [true, ""];
}

const _ymdToUTCSecond = (ymd) => ymd
  ? ymdToUTCSecond(ymd)
  : void 0;

const DialogType2 = memoIsShow(({
  isShow,
  caption,
  requestType,
  oneTitle,
  onePlaceholder,
  isPeriod,
  onShow,
  onLoad,
  onClose
}) => {
  const inputSelectProps = useMemo(
    () => getRowSelectProps(requestType),
    [requestType]
  )
  , [
    isShowDate,
    toggleIsShowDate
  ] = useToggle()
  , [
    MENU_MODEL,
    TOOLBAR_BUTTONS,
    isToolbar,
    isShowLabels
  ] = useDialog(isPeriod ? toggleIsShowDate : void 0)
  , _refInputOne = useRef()
  , _refInputDates = useRef()
  , [
    _refSortBy,
    _hSelectSortBy
  ] = useSelectItem()
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
    , [
      isValid,
      datesMsg,
      fromDate,
      toDate
    ] = _getDateTuple(getRefValue(_refInputDates))
    , _validationMessage = _createValidationMessages(
      isValid,
      datesMsg
    )
    if (_validationMessage.isValid){
      onLoad({
        repo,
        requestType,
        sort: getRefItemValue(_refSortBy),
        fromdate: _ymdToUTCSecond(fromDate),
        todate: _ymdToUTCSecond(toDate)
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
      <RowInputText
         refEl={_refInputOne}
         isShowLabel={isShowLabels}
         caption={oneTitle}
         placeholder={onePlaceholder}
         onEnter={hLoad}
      />
      <RowInputSelect
         {...inputSelectProps}
         isShowLabel={isShowLabels}         
         onSelect={_hSelectSortBy}
      />
      {isPeriod && <RowInputDatePeriod
        refEl={_refInputDates}
        isShow={isShowDate}
        isShowLabels={isShowLabels}
      />}
    </Dialog>
  );
});

export default DialogType2
