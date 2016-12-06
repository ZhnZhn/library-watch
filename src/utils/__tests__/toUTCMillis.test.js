
import test from 'ava';

import DateUtils from '../../../js/utils/DateUtils';

const fn = DateUtils.toUTCMillis

test('should convert YYYY-MM-DD to milliseconds', t => {
  t.is( fn('1970-01-01'), 0);
  t.is( fn('1970-01-02'), 1*24*60*60*1000);
  t.is( fn('1970-01-03'), 2*24*60*60*1000);
})
