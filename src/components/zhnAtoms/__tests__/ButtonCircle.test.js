
import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ButtonCircle from '../../../../js/components/zhnAtoms/ButtonCircle';

const _fnGetWrapper = (props) => {
  return shallow(<ButtonCircle {...props} />);
}

test('render root button, with class .not-selected', t => {
   const wrapper = _fnGetWrapper();

   t.true(wrapper.is('button'));
   t.true(wrapper.hasClass('not-selected'));
});


test('should use prop className for add custom class', t => {
   const className="bt"
      ,  wrapper = _fnGetWrapper({ className })

   t.true(wrapper.hasClass(`${className} not-selected`));
});

test('should use prop caption for custom text', t => {
   const caption = 'caption'
        , wrapper = _fnGetWrapper({ caption })

   t.is(wrapper.text(), caption );
});


test('should use prop style for custom style root', t => {
   const style = { color: 'green' }
       , wrapper = _fnGetWrapper({ style })

   t.is(wrapper.props().style.color, style.color);
});


test('should use prop onClick for click event on root', t => {
  const onClickStub = sinon.spy()
      , wrapper = _fnGetWrapper({ onClick: onClickStub })

  wrapper.simulate('click');
  t.true(onClickStub.calledOnce);
});
