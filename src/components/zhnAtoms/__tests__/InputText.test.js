import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';
import sinon from 'sinon';


import InputText from '../../../../js/components/zhnAtoms/InputText';

const _fnGetWrapper = (props) => {
  return shallow(<InputText {...props} />);
}

test('render input type text with state value equal prop initValue', t => {
  const initValue = 'initValue'
      , wrapper = _fnGetWrapper({ initValue });

  t.true(wrapper.is('input'));
  t.is(wrapper.prop('type'), "text");
  t.is(wrapper.prop('value'), initValue);
  t.is(wrapper.state('value'), initValue);
})

test('should use prop style', t => {
  const style = { color: 'green '}
      , wrapper = _fnGetWrapper({ style })

  t.is(wrapper.node.props.style.color, style.color);
})

test('should use prop placeholder', t => {
   const placeholder = "input text"
       , wrapper = _fnGetWrapper({ placeholder })

   t.is(wrapper.prop('placeholder'), placeholder);
})

test('should change state value onChange', t => {
   const value1 = 'a'
      , value2 = 'ab'
      , wrapper = _fnGetWrapper();

   wrapper.simulate('change', { target: { value: value1}} )
   t.is(wrapper.state('value'), value1);
   wrapper.simulate('change', { target: { value: value2}} )
   t.is(wrapper.state('value'), value2);
   wrapper.simulate('change', { target: { value: value1}} )
   t.is(wrapper.state('value'), value1);
})

test('should clear state value onKeyDown 27', t => {
   const initValue = 'initValue'
        , wrapper = _fnGetWrapper({ initValue })

  t.is(wrapper.state('value'), initValue)
  wrapper.simulate('keydown', { keyCode : 27 })
  t.is(wrapper.state('value'), '')
})

test('should update state value on new prop initValue', t => {
  const initValue1 = 'initValue1'
      , initValue2 = 'initValue2'
      , wrapper = _fnGetWrapper({ initValue : initValue1 });

  t.is(wrapper.state('value'), initValue1)
  wrapper.setProps({ initValue : initValue2 })
  t.is(wrapper.state('value'), initValue2)
})

test('should instance method getValue return trim value', t => {
  const initValue = 'initValue '
      , wrapper = _fnGetWrapper({ initValue })

   t.is(wrapper.instance().getValue(), initValue.trim())
   wrapper.simulate('change', { target: { value: initValue + ' '}})
   t.is(wrapper.instance().getValue(), initValue.trim())
})

test('should instance method setValue set state value', t => {
   const initValue = 'initValue'
        , value = 'value'
        , wrapper = _fnGetWrapper({ initValue })

    t.is(wrapper.state('value'), initValue)
    wrapper.instance().setValue(value)
    t.is(wrapper.state('value'), value)
})
