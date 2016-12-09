import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import CaptionRow from '../../../../js/components/zhnAtoms/CaptionRow';
import STYLE from '../../../../js/components/zhnAtoms/CaptionRow.Style';

const _fnGetWrapper = (props) => {
  return shallow(<CaptionRow {...props} />);
}

test('render root div', t => {
   const wrapper = _fnGetWrapper()

   t.true(wrapper.is('div'))
   t.deepEqual(wrapper.props().style, STYLE.captionDiv)
   const spanCaption = wrapper.childAt(0)
   t.deepEqual(spanCaption.props().style, STYLE.captionSpan)
})

test('should use props caption, styleRoot', t => {
   const caption = "caption"
       , styleRoot = { color : "green"}
       , wrapper = _fnGetWrapper({ caption, styleRoot })

    const spanCaption = wrapper.childAt(0)
    t.is(spanCaption.text(), caption)
    t.is(wrapper.props().style.color, styleRoot.color)
})

test('should pass prop onClose for SvgClose', t => {
  const onCloseSpy = spy()
      , wrapper = _fnGetWrapper({ onClose: onCloseSpy })

    const svgClose = wrapper.find('SvgClose')
    t.is(svgClose.props().onClose, onCloseSpy)
})
