import React from 'react';

import test from 'ava';
import { shallow } from 'enzyme';
import sinon from 'sinon';


import LinkImg from '../../../../js/components/zhnAtoms/LinkImg';

const _fnGetWrapper = (props) => {
  return shallow(<LinkImg {...props} />)
}

test('render a with href and child img with imgSrc, imgClass root props', t => {
   const href = "http://www.example.com"
       , imgSrc = "http://www.example.com/image.png"
       , imgClass = "img"
       , wrapper = _fnGetWrapper({ href, imgSrc, imgClass })

   t.true(wrapper.is('a'))
   t.is(wrapper.prop('href'), href)
   const imgWrapper = wrapper.childAt(0)
   t.is(imgWrapper.type(), 'img')
   t.is(imgWrapper.prop('src'), imgSrc)
   t.true(imgWrapper.hasClass(imgClass))
})

test('should call prop onError on erro event on image', t => {
   const onErrorSpy = sinon.spy()
        , wrapper = _fnGetWrapper({ onError : onErrorSpy })

  wrapper.find('img').simulate('error', {})
  t.true(onErrorSpy.calledOnce)   
})
