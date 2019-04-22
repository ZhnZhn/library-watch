
import React from 'react'
import test from 'ava';
import { shallow } from 'enzyme';

import FormattedInteger from '../../../../js/components/zhn-atoms/FormattedInteger';

const _fnGetWrapper = (props) => {
  return shallow(<FormattedInteger {...props} />)
}

test('render root span', t => {
   const wrapper = _fnGetWrapper({ value: 100 })

   t.true(wrapper.is('span'))
})

test ('should use prop style for custom styling', t => {
    const style = { color: 'green'}
        , wrapper = _fnGetWrapper({ value: 100, style })

    t.is(wrapper.props().style.color, style.color);
})

test('should insert comma to separate groups of thousands', t => {
   t.is(_fnGetWrapper({ value : 1000 }).text(), '1,000')
   t.is(_fnGetWrapper({ value : 10000 }).text(), '10,000')
   t.is(_fnGetWrapper({ value : 100000 }).text(), '100,000')
   t.is(_fnGetWrapper({ value : 1000000 }).text(), '1,000,000')
})

test('should return unmodified integer if provided integer is less than 1000', t => {
  t.is(_fnGetWrapper({ value : 0 }).text(), '0')
  t.is(_fnGetWrapper({ value : 1 }).text(), '1')
  t.is(_fnGetWrapper({ value : 10 }).text(), '10')
  t.is(_fnGetWrapper({ value : 100 }).text(), '100')
})
