import {
  forwardRef,
  useRef,
  useImperativeHandle
} from '../../uiApi';
import ShowHide from '../../zhn-atoms/ShowHide';
import InputDate from '../../zhn-atoms/InputDate';
import Row from './Row';
import Caption from './Caption';

import {
  getFromDate,
  getToDate,
  isYmd
} from '../../../utils/DateUtils';

const INITIAL_FROM_DATE = getFromDate(1)
, INITIAL_TO_DATE = getToDate()

, ERROR_FORMAT = "YYYY-MM-DD format must be"
, FROM_DATE = "From Date"
, TO_DATE = "To Date"
, ERROR_FROM_NEAR_TO = "From Date is near that To Date"
, DF_MSG_ON_NOT_VALID_FORMAT = item => `${item} is not in valid format`
, FN_NOOP = () => {}
, DF_DATE_COMP = {
   isValid: () => false,
   getValue: FN_NOOP,
   setValue: FN_NOOP,
   focus: FN_NOOP
}
, _getRefValue = ref => ref.current || DF_DATE_COMP;

const RowInputDatePeriod = forwardRef(({
  isShow,
  isShowLabels=true,
  msgOnNotValidFormat=DF_MSG_ON_NOT_VALID_FORMAT,
  initialFromDate=INITIAL_FROM_DATE,
  initialToDate=INITIAL_TO_DATE,
  onTestDate=isYmd
}, ref) => {
  const _refFromDate = useRef()
  , _refToDate = useRef();

  useImperativeHandle(ref, () => ({
     getValues: () => ({
       fromDate: _getRefValue(_refFromDate).getValue(),
       toDate: _getRefValue(_refToDate).getValue()
     }),
     setValues: (fromDate, toDate) => {
        _getRefValue(_refFromDate).setValue(fromDate)
        _getRefValue(_refToDate).setValue(toDate)
     },
     getValidation: () => {
       const datesMsg = []
       , _fromDate = _getRefValue(_refFromDate)
       , _toDate = _getRefValue(_refToDate);

       if (!_fromDate.isValid()) {
         datesMsg.push(msgOnNotValidFormat(FROM_DATE))
       }
       if (!_toDate.isValid()) {
         datesMsg.push(msgOnNotValidFormat(TO_DATE))
       }

       if (_fromDate.getValue().trim() > _toDate.getValue().trim()) {
         datesMsg.push(ERROR_FROM_NEAR_TO)
       }

       return datesMsg.length>0
         ? { isValid: false, datesMsg }
         : { isValid: true };
     },
     focusInput: () => {
       _getRefValue(_refFromDate).focus()
     },
     focusNotValidInput: () => {
       const _fromDate = _getRefValue(_refFromDate)
       , _toDate = _getRefValue(_refToDate);

       if (!_fromDate.isValid()){
          _fromDate.focus()
          return true;
       }
       if (!_toDate.isValid()){
         _toDate.focus()
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
           ref={_refFromDate}
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
           ref={_refToDate}
           initialValue={initialToDate}
           errorMsg={ERROR_FORMAT}
           onTest={onTestDate}
        />
     </Row>
   </ShowHide>
  );
});

export default RowInputDatePeriod
