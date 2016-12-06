
import test from 'ava';

import DateUtils from '../../../js/utils/DateUtils';

const fn = DateUtils.isWeekend    

test('should return is day (YYYY, MM, DD) weekend', t => {
  t.false( fn('1970', '01', '01')); //Thursday
  t.false( fn('1970', '01', '02')); //Friday
  t.true( fn('1970', '01', '03'));  //Saturday
  t.true( fn('1970', '01', '04'));  //Sunday
  t.false( fn('1970', '01', '05')); //Monday
  t.false( fn('1970', '01', '06')); //Tuesday
  t.false( fn('1970', '01', '07')); //Wensday
})
