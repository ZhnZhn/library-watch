import {
  useRef,
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

import { ymdToUTCSecond } from './helperFns';

const _SORT_OPTIONS = [
  { caption: "Activity, Recent Day", value: "activity" },
  { caption: "Creation Date", value: "creation"},
  { caption: "Score", value: "votes" },
  { caption: "Hot Tab", value: "hot" },
  { caption: "Hot Week Tab", value: "week" },
  { caption: "Hot Month Tab", value: "month" }
];

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

const DialogType2 = memoIsShow(({
  isShow,
  caption,
  requestType,
  oneTitle,
  onePlaceholder,
  onShow,
  onLoad,
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
    , _datesInst = getRefValue(_refInputDates)
    , { isValid, datesMsg } = _datesInst.getValidation()
    , { fromDate, toDate } = _datesInst.getValues()
    , _validationMessage = _createValidationMessages(
      isValid, datesMsg
    )
    if (_validationMessage.isValid){
      onLoad({
        repo,
        requestType,
        sort: getRefItemValue(_refSortBy),
        fromdate: ymdToUTCSecond(fromDate),
        todate: ymdToUTCSecond(toDate)
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
         isShowLabel={isShowLabels}
         caption="Sort By"
         placeholder="Default: Hot Week Tab"
         options={_SORT_OPTIONS}
         onSelect={_hSelectSortBy}
      />
      <RowInputDatePeriod
        refEl={_refInputDates}
        isShow={isShowDate}
        isShowLabels={isShowLabels}
      />
    </Dialog>
  );
});

export default DialogType2
