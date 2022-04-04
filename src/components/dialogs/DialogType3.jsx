import {
  useRef,
  useCallback,
  getRefValue,
  setRefValue
} from '../uiApi';
import useToggle from '../hooks/useToggle';
import useDialog from './useDialog';
import useDialogButtons from './useDialogButtons';
import memoIsShow from './memoIsShow';

import Dialog from './Dialog';
import D from './DialogCell';

import helperFns from './helperFns/helperFns';

const {
  dateConfig,
  toUTCSecond
} = helperFns;

const _SORT_OPTIONS = [
  { caption: "Activity, Recent Day", value: "activity" },
  { caption: "Creation Date", value: "creation"},
  { caption: "Score", value: "votes" },
  { caption: "Relevance", value: "relevance" }
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
    msg.push(datesMsg)
  }
  msg.isValid = (msg.length === 0);
  return msg;
};

const DialogType3 = memoIsShow(({
  isShow,
  caption,
  oneTitle,
  onePlaceholder,
  twoTitle,
  twoPlaceholder,
  requestType,
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
  , _refInputTwo = useRef()
  , _refInputDates = useRef()
  , _refSortByItem = useRef({})
  , _hSelectSortBy = useCallback(item => {
    setRefValue(_refSortByItem, item)
  }, [])
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
    , intitle = getRefValue(_refInputTwo).getValue()
    , _dateInst = getRefValue(_refInputDates)
    , { isValid, datesMsg } = _dateInst.getValidation()
    , { fromDate, toDate } = _dateInst.getValues()
    , _validationMessage = _createValidationMessages(
      isValid, datesMsg
    )
    if (_validationMessage.isValid) {
      onLoad({
        repo,
        requestType,
        intitle,
        sort: (getRefValue(_refSortByItem) || {}).value,
        fromdate: toUTCSecond(fromDate),
        todate: toUTCSecond(toDate)
      })
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
      <D.RowInputText
         ref={_refInputTwo}
         isShowLabel={isShowLabels}
         caption={twoTitle}
         placeholder={twoPlaceholder}
      />
      <D.RowInputSelect
         isShowLabel={isShowLabels}
         caption="Sort By"
         placeholder="Default: Activity"
         options={_SORT_OPTIONS}
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

export default DialogType3
