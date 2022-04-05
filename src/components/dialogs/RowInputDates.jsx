import { forwardRef } from '../uiApi';
import D from './DialogCell';
import { dateConfig } from './helperFns';

const {
  initialFromDate,
  initialToDate,
  onTestDate
} = dateConfig;

const RowInputDates = forwardRef(({
  isShow,
  isShowLabels
}, ref) => (
  <D.ShowHide isShow={isShow}>
    <D.Dates
        ref={ref}
        isShowLabels={isShowLabels}
        initFromDate={initialFromDate}
        initToDate={initialToDate}
        onTestDate={onTestDate}
    />
  </D.ShowHide>
));

export default RowInputDates
