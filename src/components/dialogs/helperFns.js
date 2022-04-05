import DateUtils from '../../utils/DateUtils';

const {
  getFromDate,
  getToDate,
  isValidDate,
} = DateUtils;

const _crDateConfig = fromDate => ({
  initialFromDate: getFromDate(fromDate),
  initialToDate: getToDate(),
  onTestDate: isValidDate
});

export const toUTCSecond = DateUtils.toUTCSecond
export const dateConfig = _crDateConfig(1)
