import {
  forwardRef,
  useRef,
  useImperativeHandle
} from '../../uiApi';
import InputDate from '../../zhn-atoms/InputDate';
import styles from '../../styles/DialogStyles';
import Caption from './Caption';

const ERROR_FORMAT = "YYYY-MM-DD format must be"
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

const Dates = forwardRef(({
  isShowLabels=true,
  msgOnNotValidFormat=DF_MSG_ON_NOT_VALID_FORMAT,
  initFromDate,
  initToDate,
  onTestDate
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
    <div>
      <div style={styles.rowDiv}>
        <Caption
          is={isShowLabels}
          style={styles.labelSpan}
          caption="From Date"
        />
        <InputDate
           ref={_refFromDate}
           initValue={initFromDate}
           errorMsg={ERROR_FORMAT}
           onTest={onTestDate}
        />
     </div>
     <div style={styles.rowDiv}>
       <Caption
           is={isShowLabels}
           style={styles.labelSpan}
           caption="To Date"
        />
        <InputDate
           ref={_refToDate}
           initValue={initToDate}
           errorMsg={ERROR_FORMAT}
           onTest={onTestDate}
        />
     </div>
   </div>
  );
});

/*
Dates.propTypes = {
  isShowLabels: PropTypes.bool,
  initFromDate: PropTypes.string,
  initToDate: PropTypes.string,
  onTestDate: PropTypes.func,
  msgOnNotValidFormat: PropTypes.func
}
*/

export default Dates
