
import test from 'ava';

import DateUtils from '../../../js/utils/DateUtils';

test('should formatTo convert date in millisecond to DD-MM-YYY', t => {
  const fn = DateUtils.formatTo;

  t.is( fn(0), '01-01-1970');
  t.is( fn(1*24*60*60*1000), '02-01-1970');
  t.is( fn(2*24*60*60*1000), '03-01-1970');
})

test('should isWeekend return is day (YYYY, MM, DD) weekend', t => {
  const fn = DateUtils.isWeekend;

  t.false( fn('1970', '01', '01')); //Thursday
  t.false( fn('1970', '01', '02')); //Friday
  t.true( fn('1970', '01', '03'));  //Saturday
  t.true( fn('1970', '01', '04'));  //Sunday
  t.false( fn('1970', '01', '05')); //Monday
  t.false( fn('1970', '01', '06')); //Tuesday
  t.false( fn('1970', '01', '07')); //Wensday
})

test('should toUTCMillis convert YYYY-MM-DD to milliseconds', t => {
  const fn = DateUtils.toUTCMillis;

  t.is( fn('1970-01-01'), 0);
  t.is( fn('1970-01-02'), 1*24*60*60*1000);
  t.is( fn('1970-01-03'), 2*24*60*60*1000);
})
