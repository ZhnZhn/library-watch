import {
  useRef,
  useImperativeHandle,
  isRefInputValid,
  getRefInputValue,
  setRefInputValue,
  focusRefInput
} from '../../uiApi';
import ShowHide from '../../zhn-atoms/ShowHide';
import InputDate from '../../zhn-atoms/InputDate';
import Row from './Row';
import Caption from './Caption';

import {
  getFromDate,
  getToDate,
  isYmd
} from '../../../utils/dateFn';

const INITIAL_FROM_DATE = getFromDate(1)
, INITIAL_TO_DATE = getToDate()

, ERROR_FORMAT = "YYYY-MM-DD format must be"
, FROM_DATE = "From Date"
, TO_DATE = "To Date"
, ERROR_FROM_NEAR_TO = "From Date is near that To Date"
, DF_MSG_ON_NOT_VALID_FORMAT = item => `${item} is not in valid format`
, _getTrimRefInputValue = ref => (getRefInputValue(ref) || "").trim();

const RowInputDatePeriod = ({
  refEl,
  isShow,
  isShowLabels=true,
  msgOnNotValidFormat=DF_MSG_ON_NOT_VALID_FORMAT,
  initialFromDate=INITIAL_FROM_DATE,
  initialToDate=INITIAL_TO_DATE,
  onTestDate=isYmd
}) => {
  const _refFromDate = useRef()
  , _refToDate = useRef();

  useImperativeHandle(refEl, () => ({
     getValues: () => ({
       fromDate: getRefInputValue(_refFromDate),
       toDate: getRefInputValue(_refToDate)
     }),
     setValues: (fromDate, toDate) => {
       setRefInputValue(_refFromDate, fromDate)
       setRefInputValue(_refToDate, toDate)
     },
     getValidation: () => {
       const datesMsg = [];

       if (!isRefInputValid(_refFromDate)) {
         datesMsg.push(msgOnNotValidFormat(FROM_DATE))
       }
       if (!isRefInputValid(_refToDate)) {
         datesMsg.push(msgOnNotValidFormat(TO_DATE))
       }

       if (_getTrimRefInputValue(_refFromDate) > _getTrimRefInputValue(_refToDate)) {
         datesMsg.push(ERROR_FROM_NEAR_TO)
       }

       return datesMsg.length>0
         ? { isValid: false, datesMsg }
         : { isValid: true };
     },
     focusInput: () => {
       focusRefInput(_refFromDate)
     },
     focusNotValidInput: () => {
       if (!isRefInputValid(_refFromDate)){
          focusRefInput(_refFromDate)
          return true;
       }
       if (!isRefInputValid(_refToDate)){
         focusRefInput(_refToDate)
         return true;
       }
       return false;
     }
  }), [msgOnNotValidFormat])

  return (
    <ShowHide isShow={isShow}>
      <Row>
        <Caption
          is={isShowLabels}
          caption="From Date"
        />
        <InputDate
           refEl={_refFromDate}
           initialValue={initialFromDate}
           errorMsg={ERROR_FORMAT}
           onTest={onTestDate}
        />
     </Row>
     <Row>
       <Caption
           is={isShowLabels}
           caption="To Date"
        />
        <InputDate
           refEl={_refToDate}
           initialValue={initialToDate}
           errorMsg={ERROR_FORMAT}
           onTest={onTestDate}
        />
     </Row>
   </ShowHide>
  );
};

export default RowInputDatePeriod
