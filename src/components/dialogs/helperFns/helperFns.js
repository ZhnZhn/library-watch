import DateUtils from '../../../utils/DateUtils'

import crMenuMore from './crMenuMore'
import crButtons from './crButtons'

const {
  getFromDate, getToDate, isValidDate,
  toUTCMillis, toUTCSecond
} = DateUtils;

const crDateConfig = (fromDate=1) => ({
  _initFromDate: getFromDate(fromDate),
  _initToDate: getToDate(),
  _onTestDate: isValidDate
})

const helperFns = {
  crMenuMore,
  crButtons,
  crDateConfig,
  toUTCSecond,
  toUTCMillis,
  dateConfig: crDateConfig()
};

export default helperFns
