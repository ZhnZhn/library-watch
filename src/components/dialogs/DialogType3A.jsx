import {
  useRef,
  getRefValue
} from '../uiApi';

import { isNumber } from '../../utils/isTypeFn';

import {
  getToDate,
  subtractMonths
} from '../../utils/dateFn';

import { memoIsShow } from '../hoc/memoFn';

import useRefInit from '../hooks/useRefInit';
import useToggle from '../hooks/useToggle';
import useDialog from './useDialog';
import useDialogButtons from './useDialogButtons';

import Dialog from './Dialog';
import D from './DialogCell';

const INITIAL_TO_DATE = getToDate();

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
  fromDate,
  onePlaceholder,
  onLoad,
  onShow,
  onClose
}) => {
  const [initialFromDate] = useRefInit(() => isNumber(fromDate)
    && fromDate < 36
    ? subtractMonths(INITIAL_TO_DATE, fromDate)
    : void 0
  ),
  [
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
         refEl={_refInputOne}
         isShowLabel={isShowLabels}
         caption={oneTitle}
         placeholder={onePlaceholder}
         onEnter={hLoad}
      />
      <D.RowInputDatePeriod
        refEl={_refInputDates}
        isShow={isShowDate}
        isShowLabels={isShowLabels}
        initialFromDate={initialFromDate}
        initialToDate={INITIAL_TO_DATE}
      />
    </Dialog>
  );
});

export default DialogType3A
