import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';

import zhnSpy from '../../../../js/components/zhn-atoms/__tests__/zhnSpy';
import MenuBadge from '../../../../js/components/zhn-atoms/MenuBadge';

const _fnGetWrapper = (props) => {
  return shallow(<MenuBadge {...props} />);
}

/*
test('render root span with class `menu__badge`', t => {
   const wrapper = _fnGetWrapper()

   t.true(wrapper.is('span'))
   t.true(wrapper.hasClass('menu__badge'))
})
*/

/*
test('should use prop counter', t => {
    const counter = 10
        , wrapper = _fnGetWrapper({ counter})

    t.is(parseInt(wrapper.text(), 10), counter);
})
*/



test('should call stopPropagation and onBadgeOpen on root click if isOpen falsy', t => {
   const //onBadgeOpenSpy = sinon.spy()
      //,  onBadgeCloseSpy = sinon.spy()
         onBadgeOpenSpy = zhnSpy.createValueSpy()
       , onBadgeCloseSpy = zhnSpy.createValueSpy()
       , stopPropagationSpy = zhnSpy.createValueSpy()
       , wrapper = _fnGetWrapper({
           onBadgeOpen: onBadgeOpenSpy,
           onBadgeClose: onBadgeCloseSpy
         })

     wrapper.simulate('click', { stopPropagation: stopPropagationSpy });
     t.true(stopPropagationSpy.isCalledOnce())
     t.true(onBadgeOpenSpy.isCalledOnce());
     t.true(!onBadgeCloseSpy.isCalledOnce());
})

test('should call stopPropagation and onBadgeClose on root click if isOpen true', t => {
  const onBadgeOpenSpy = zhnSpy.createValueSpy()
      , onBadgeCloseSpy = zhnSpy.createValueSpy()
      , stopPropagationSpy = zhnSpy.createValueSpy()
      , wrapper = _fnGetWrapper({
          isOpen : true,
          onBadgeOpen: onBadgeOpenSpy,
          onBadgeClose: onBadgeCloseSpy
        })

    wrapper.simulate('click', { stopPropagation: stopPropagationSpy });
    t.true(stopPropagationSpy.isCalledOnce())
    t.true(onBadgeCloseSpy.isCalledOnce());
    t.true(!onBadgeOpenSpy.isCalledOnce());
})
