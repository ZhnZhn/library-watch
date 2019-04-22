import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';


import zhnSpy from '../../../../js/components/zhn-atoms/__tests__/zhnSpy';
import DateAgo from '../../../../js/components/zhn-atoms/DateAgo';
import STYLE from '../../../../js/components/zhn-atoms/DateAgo.Style';

const _fnGetWrapper = (props) => {
  return shallow(<DateAgo {...props} />);
}

test('render root span with props dateAgo and `display: none` date', t => {
   const dateAgo = '3 mins ago'
       , wrapper = _fnGetWrapper({ dateAgo })

   t.true(wrapper.is('span'))
   t.true(!wrapper.state('isShowDate'));
   t.is(wrapper.children().length, 2)


   const spanDateAgo = wrapper.childAt(0)
   t.deepEqual(spanDateAgo.text(), dateAgo)
   t.deepEqual(spanDateAgo.props().style, STYLE.DATE_AGO)

   const spanDate = wrapper.childAt(1)
   t.is(spanDate.props().style.display, STYLE.NONE.display)
})

test('should on click on dateAgo preventDefault, stopPropagation and change state isShowDate', t => {
  const preventDefaultSpy = zhnSpy.createValueSpy()
      , stopPropagationSpy = zhnSpy.createValueSpy()
      , wrapper = _fnGetWrapper()
      , spanDateAgo = wrapper.childAt(0)

  spanDateAgo.simulate('click', {
    preventDefault: preventDefaultSpy,
    stopPropagation: stopPropagationSpy
  })

  t.true(wrapper.state('isShowDate'))
  t.true(preventDefaultSpy.isCalledOnce())
  t.true(stopPropagationSpy.isCalledOnce())
})
