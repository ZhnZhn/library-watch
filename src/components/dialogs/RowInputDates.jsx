import { forwardRef } from '../uiApi';
import D from './DialogCell';
import helperFns from './helperFns/helperFns';

const { dateConfig } = helperFns
, {
  _initFromDate,
  _initToDate,
  _onTestDate
} = dateConfig;

const RowInputDates = forwardRef(({
  isShow,
  isShowLabels
}, ref) => (
  <D.ShowHide isShow={isShow}>
    <D.Dates
        ref={ref}
        isShowLabels={isShowLabels}
        initFromDate={_initFromDate}
        initToDate={_initToDate}
        onTestDate={_onTestDate}
    />
  </D.ShowHide>
));

export default RowInputDates
