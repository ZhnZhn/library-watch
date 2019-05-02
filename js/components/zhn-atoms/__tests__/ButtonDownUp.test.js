'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _ButtonDownUp = require('../../../../js/components/zhn-atoms/ButtonDownUp');

var _ButtonDownUp2 = _interopRequireDefault(_ButtonDownUp);

var _ButtonDownUp3 = require('../../../../js/components/zhn-atoms/ButtonDownUp.Style');

var _ButtonDownUp4 = _interopRequireDefault(_ButtonDownUp3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
   return (0, _enzyme.shallow)(_react2.default.createElement(_ButtonDownUp2.default, props));
};

(0, _ava2.default)('render root button with empty title, caption by default', function (t) {
   var wrapper = _fnGetWrapper();

   t.true(wrapper.is('button'));
   t.is(wrapper.props().title, '');
   t.is(wrapper.text(), '');
});

(0, _ava2.default)('should use prop title, caption, style', function (t) {
   var title = 'title',
       caption = 'caption',
       style = { paddingLeft: '20px' },
       wrapper = _fnGetWrapper({ title: title, caption: caption, style: style });

   t.is(wrapper.props().title, title);
   t.is(wrapper.props().style.paddingLeft, style.paddingLeft);
   t.is(wrapper.text(), caption);
});

(0, _ava2.default)('should use prop isUp', function (t) {
   var wrapper = _fnGetWrapper({ isUp: true });

   t.is(wrapper.props().style.color, _ButtonDownUp4.default.ROOT_UP.color);
   var spanCircle = wrapper.childAt(0);
   t.is(spanCircle.props().style.borderColor, _ButtonDownUp4.default.CIRCLE_UP.borderColor);
});

(0, _ava2.default)('should use prop onClick on event click root', function (t) {
   var onClickSpy = (0, _sinon.spy)(),
       wrapper = _fnGetWrapper({ onClick: onClickSpy });

   wrapper.simulate('click');
   t.true(onClickSpy.calledOnce);
});
//# sourceMappingURL=ButtonDownUp.test.js.map