import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';

import OpenClose2 from '../../../../js/components/zhnAtoms/OpenClose2';

const _fnGetWrapper = (props) => {
  return shallow(<OpenClose2 {...props} />);
}

test('render root div with div `not-selected`, close by default', t=> {
  const wrapper = _fnGetWrapper()

  t.true(wrapper.is('div'))
  t.false(wrapper.state('isOpen'))
  t.true(wrapper.find('.not-selected').is('div'))
})

test('should use prop isClose', t => {
   const wrapper = _fnGetWrapper({ isClose: true })

   t.false(wrapper.state('isOpen'))
})

test('should use prop style for root styling', t => {
  const style = { color: 'green '}
      , wrapper = _fnGetWrapper({ style })

  t.is(wrapper.props().style.color, style.color);
})

test('should use prop caption for span text', t => {
  const caption = "caption"
      , wrapper = _fnGetWrapper({ caption })

  t.is(wrapper.find('span').text(), caption)
})

test('should use prop styleCaption for span styling', t => {
  const styleCaption = { color: 'green '}
      , wrapper = _fnGetWrapper({ styleCaption })

  t.is(wrapper.find('span').props().style.color, styleCaption.color);
})


test('should change isOpen state on click `div.not-selected` and use prop fillOpen, fillClose', t => {
  const  fillOpen = 'green'
       , fillClose = 'yellow'
       , wrapper = _fnGetWrapper({ fillOpen, fillClose })
       , div = wrapper.find('div.not-selected')

  t.false(wrapper.state('isOpen'))
  t.is(wrapper.find('path').props().fill, fillClose);

  div.simulate('click')
  t.true(wrapper.state('isOpen'))
  t.is(wrapper.find('path').props().fill, fillOpen);

  div.simulate('click')
  t.false(wrapper.state('isOpen'))
  t.is(wrapper.find('path').props().fill, fillClose);
})
