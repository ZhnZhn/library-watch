'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _LinkImg = require('../../../../js/components/zhnAtoms/LinkImg');

var _LinkImg2 = _interopRequireDefault(_LinkImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
   return (0, _enzyme.shallow)(_react2.default.createElement(_LinkImg2.default, props));
};

(0, _ava2.default)('render a with href and child img with imgSrc, imgClass root props', function (t) {
   var href = "http://www.example.com",
       imgSrc = "http://www.example.com/image.png",
       imgClass = "img",
       wrapper = _fnGetWrapper({ href: href, imgSrc: imgSrc, imgClass: imgClass });

   t.true(wrapper.is('a'));
   t.is(wrapper.prop('href'), href);
   var imgWrapper = wrapper.childAt(0);
   t.is(imgWrapper.type(), 'img');
   t.is(imgWrapper.prop('src'), imgSrc);
   t.true(imgWrapper.hasClass(imgClass));
});

(0, _ava2.default)('should call prop onError on erro event on image', function (t) {
   var onErrorSpy = _sinon2.default.spy(),
       wrapper = _fnGetWrapper({ onError: onErrorSpy });

   wrapper.find('img').simulate('error', {});
   t.true(onErrorSpy.calledOnce);
});
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\__tests__\LinkImg.test.js.map