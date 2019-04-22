
import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';

import Browser from '../../../../js/components/zhn-atoms/Browser';

const _fnGetWrapper = (props) => {
  return shallow(<Browser {...props} />);
}

test('render root div display none by default', t => {
  const wrapper = _fnGetWrapper();

  t.true(wrapper.is('div'))
  t.is(wrapper.props().style.display, 'none')
})

test('should use prop isShow', t => {
   const wrapper = _fnGetWrapper({ isShow: true })

   t.true(wrapper.hasClass('show-popup'))
   t.is(wrapper.props().style.display, 'block');
})


test('should use prop style', t => {
   const style = { color : "green" }
      , wrapper = _fnGetWrapper({ isShow: true, style })

   t.is(wrapper.props().style.display, 'block');
   t.is(wrapper.props().style.color, style.color);
})
