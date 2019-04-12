import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Tab from '../../../../js/components/zhnAtoms/Tab';

const _fnGetWrapper = (props) => {
  return shallow(<Tab {...props} />);
}

test('render root li with props title text', t => {
  const title = 'title'
      , wrapper = _fnGetWrapper({ title })

  t.true(wrapper.is('li'));
  t.is(wrapper.text(), title);
})

test('should use props isSelected for inner style root', t => {
   const selected = {
             borderColor : 'rgba(164, 135, 212, 1)',
             color : 'rgba(164, 135, 212, 1)'
         }
       , wrapper = _fnGetWrapper({ isSelected : true })

   t.is(wrapper.props().style.color, selected.color);
   t.is(wrapper.props().style.borderColor, selected.borderColor);
})

test('should use prop onClick for click event on root', t => {
    const onClickSpy = sinon.spy()
        , wrapper = _fnGetWrapper({ onClick : onClickSpy })

    wrapper.simulate('click')
    t.true(onClickSpy.calledOnce);
})
