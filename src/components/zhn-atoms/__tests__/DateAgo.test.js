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

test('should on click on dateAgo with date call preventDefault, stopPropagation and change state isShowDate', t => {
  const preventDefaultSpy = zhnSpy.createValueSpy()
      , stopPropagationSpy = zhnSpy.createValueSpy()
      , date = '01-01-1970'
      , wrapper = _fnGetWrapper({ date })
      , spanDateAgo = wrapper.childAt(0)
      , spanDate = wrapper.childAt(1);

  t.false(wrapper.state('isShowDate'))
  t.is(spanDate.prop('style').display, 'none')
  t.is(spanDate.text(), date)

  spanDateAgo.simulate('click', {
    preventDefault: preventDefaultSpy,
    stopPropagation: stopPropagationSpy
  })

  const spanDate2 = wrapper.childAt(1);
  t.true(preventDefaultSpy.isCalledOnce())
  t.true(stopPropagationSpy.isCalledOnce())
  t.true(wrapper.state('isShowDate'))
  t.is(spanDate2.prop('style').display, 'inline-block')
  t.is(spanDate2.text(), date)
})
