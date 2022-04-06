import { forwardRef } from '../../uiApi';
import ShowHide from '../../zhn-atoms/ShowHide';
import Dates from './Dates';
import { dateConfig } from '../helperFns';

const {
  initialFromDate,
  initialToDate,
  onTestDate
} = dateConfig;

const RowInputDates = forwardRef(({
  isShow,
  isShowLabels
}, ref) => (
  <ShowHide isShow={isShow}>
    <Dates
        ref={ref}
        isShowLabels={isShowLabels}
        initFromDate={initialFromDate}
        initToDate={initialToDate}
        onTestDate={onTestDate}
    />
  </ShowHide>
));

export default RowInputDates
