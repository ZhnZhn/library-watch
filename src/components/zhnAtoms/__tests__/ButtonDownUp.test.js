import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import ButtonDownUp from '../../../../js/components/zhnAtoms/ButtonDownUp';
import STYLE from '../../../../js/components/zhnAtoms/ButtonDownUp.Style';

const _fnGetWrapper = (props) => {
  return shallow(<ButtonDownUp {...props} />);
}

test('render root span with empty title, caption by default', t => {
  const wrapper = _fnGetWrapper();

   t.true(wrapper.is('span'))
   t.is(wrapper.props().title, '')
   t.is(wrapper.text(), '')
})

test('should use prop title, caption, styleRoot', t => {
  const title = 'title'
      , caption = 'caption'
      , styleRoot = { paddingLeft : '20px' }
      , wrapper = _fnGetWrapper({ title, caption, styleRoot });

   t.is(wrapper.props().title, title)
   t.is(wrapper.props().style.paddingLeft, styleRoot.paddingLeft)
   t.is(wrapper.text(), caption)
})


test('should use prop isUp', t => {
   const wrapper = _fnGetWrapper({ isUp: true })

   t.is(wrapper.props().style.color, STYLE.ROOT_UP.color)
   const spanCircle = wrapper.childAt(0)
   t.is(spanCircle.props().style.borderColor, STYLE.CIRCLE_UP.borderColor)
})


test('should use prop onClick on event click root', t => {
    const onClickSpy = spy()
         , wrapper = _fnGetWrapper({ onClick : onClickSpy })

    wrapper.simulate('click')
    t.true(onClickSpy.calledOnce)
})
