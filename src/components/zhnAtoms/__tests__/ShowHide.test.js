import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';

import ShowHide from '../../../../js/components/zhnAtoms/ShowHide';

const _fnGetWrapper = (props) => {
  return shallow(<ShowHide {...props} />);
}

test('render root div', t => {
  const wrapper = _fnGetWrapper();
  t.true(wrapper.is('div'));
})

test('should use prop style', t => {
   const style = { color: 'green'}
       , wrapper = _fnGetWrapper({ style });

    t.is(wrapper.node.props.style.color, style.color);
})

test('should have display none with prop isShow false', t => {
  const notShowStyle = { display : 'none'}
      , style = { display: 'block'}
      , wrapper = _fnGetWrapper({ isShow : false, style });

  //t.true(wrapper.hasClass(''));
  t.is(wrapper.node.props.style.display, notShowStyle.display);
})


test('should have class `show-popup` and display block with prop isShow true', t => {
  const showStyle = { display : 'block'}
      , style = { display: 'none'}
      , wrapper = _fnGetWrapper({ isShow : true, style });

  t.true(wrapper.hasClass('show-popup'))
  t.is(wrapper.node.props.style.display, showStyle.display);
})
