import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import SvgClose from '../../../../js/components/zhn-atoms/SvgClose';

const _fnGetWrapper = (props) => {
  return shallow(<SvgClose {...props} />);
}

test('render root div with class `svg-close`', t => {
  const wrapper = _fnGetWrapper()

  t.true(wrapper.is('div'));
  t.true(wrapper.hasClass('svg-close'));
})

test('should use prop style for custom styling root', t => {
   const style = { color: 'green' }
       , wrapper = _fnGetWrapper({ style })

   t.is(wrapper.props().style.color, style.color)
})

test('should use prop onClose for click event on root', t => {
    const onCloseSpy = sinon.spy()
        , wrapper = _fnGetWrapper({ onClose : onCloseSpy })

    wrapper.simulate('click')
    t.true(onCloseSpy.calledOnce);
})
