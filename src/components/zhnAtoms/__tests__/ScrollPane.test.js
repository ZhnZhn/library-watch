import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';

import ScrollPane from '../../../../js/components/zhnAtoms/ScrollPane';

const _fnGetWrapper = (props) => {
  return shallow(<ScrollPane {...props} />);
}

test('render root div with class `with-scroll`', t => {
   const wrapper = _fnGetWrapper();

   t.true(wrapper.is('div'));
   t.true(wrapper.hasClass('with-scroll'));
})

test('should use prop className', t => {
  const className = 'some-class'
      , wrapper = _fnGetWrapper({ className });

  t.true(wrapper.hasClass(`with-scroll ${className}`))
})


test('should use prop style', t => {
   const style = { color : 'green'}
       , wrapper = _fnGetWrapper({ style });

    t.is(wrapper.props().style.color, style.color);
})
