import {
  useRef,
  useCallback,
  getRefValue,
  setRefValue
} from '../uiApi';
import useToggle from '../hooks/useToggle';
import useValidationMessages from '../hooks/useValidationMessages';
import useDialog from './useDialog';
import useCommandButtons from './useCommandButtons';
import memoIsShow from './memoIsShow';

import Dialog from './Dialog';
import D from './DialogCell';

import helperFns from './helperFns/helperFns';

const {
  dateConfig,
  toUTCSecond
} = helperFns;

const _sortOptions = [
  { caption: "Activity, Recent Day", value: "activity" },
  { caption: "Creation Date", value: "creation"},
  { caption: "Score", value: "votes" },
  { caption: "Hot Tab", value: "hot" },
  { caption: "Hot Week Tab", value: "week" },
  { caption: "Hot Month Tab", value: "month" }
];

const {
  _initFromDate,
  _initToDate,
  _onTestDate
} = dateConfig;

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
  , _refSortByItem = useRef({})
  , _hSelectSortBy = useCallback(item => {
    setRefValue(_refSortByItem, item)
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hLoad = useCallback(() => {
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
          sort: (getRefValue(_refSortByItem) || {}).value,
          fromdate: toUTCSecond(fromDate),
          todate: toUTCSecond(toDate)
        });
        _clearValidationMessages()
      } else {
        setValidationMessages(_validationMessage)
      }
  }, [])
  // requestType, onLoad, _clearValidationMessages
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
      <D.RowInputSelect
         isShowLabel={isShowLabels}
         caption="Sort By"
         placeholder="Default: Hot Week Tab"
         options={_sortOptions}
         onSelect={_hSelectSortBy}
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

export default DialogType2
