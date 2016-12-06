import test from 'ava';

import StringUtil from '../../../js/utils/StringUtil';

test('should setFirstToUpperCase', t => {
  const fn = StringUtil.setFirstToUpperCase

  t.is(fn('abc'), 'Abc');
  t.is(fn('aBC'), 'ABC');
  t.is(fn('Abc'), 'Abc');
  
  t.is(fn(null), null);
  t.is(typeof fn(undefined), "undefined")
})
