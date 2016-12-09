'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _ButtonDownUp = require('../../../../js/components/zhnAtoms/ButtonDownUp');

var _ButtonDownUp2 = _interopRequireDefault(_ButtonDownUp);

var _ButtonDownUp3 = require('../../../../js/components/zhnAtoms/ButtonDownUp.Style');

var _ButtonDownUp4 = _interopRequireDefault(_ButtonDownUp3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
   return (0, _enzyme.shallow)(_react2.default.createElement(_ButtonDownUp2.default, props));
};

(0, _ava2.default)('render root span with empty title, caption by default', function (t) {
   var wrapper = _fnGetWrapper();

   t.true(wrapper.is('span'));
   t.is(wrapper.node.props.title, '');
   t.is(wrapper.text(), '');
});

(0, _ava2.default)('should use prop title, caption, styleRoot', function (t) {
   var title = 'title',
       caption = 'caption',
       styleRoot = { paddingLeft: '20px' },
       wrapper = _fnGetWrapper({ title: title, caption: caption, styleRoot: styleRoot });

   t.is(wrapper.node.props.title, title);
   t.is(wrapper.node.props.style.paddingLeft, styleRoot.paddingLeft);
   t.is(wrapper.text(), caption);
});

(0, _ava2.default)('should use prop isUp', function (t) {
   var wrapper = _fnGetWrapper({ isUp: true });

   t.is(wrapper.node.props.style.color, _ButtonDownUp4.default.ROOT_UP.color);
   var spanCircle = wrapper.childAt(0);
   t.is(spanCircle.node.props.style.borderColor, _ButtonDownUp4.default.CIRCLE_UP.borderColor);
});

(0, _ava2.default)('should use prop onClick on event click root', function (t) {
   var onClickSpy = (0, _sinon.spy)(),
       wrapper = _fnGetWrapper({ onClick: onClickSpy });

   wrapper.simulate('click');
   t.true(onClickSpy.calledOnce);
});
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\__tests__\ButtonDownUp.test.js.map