
import test from 'ava';

import DateUtils from '../../../js/utils/DateUtils';

const fn = DateUtils.formatTo
    
test('should convert date in millisecond to DD-MM-YYY', t => {
  t.is( fn(0), '01-01-1970');
  t.is( fn(1*24*60*60*1000), '02-01-1970');
  t.is( fn(2*24*60*60*1000), '03-01-1970');
})
