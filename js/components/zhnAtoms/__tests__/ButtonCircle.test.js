'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _ButtonCircle = require('../../../../js/components/zhnAtoms/ButtonCircle');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
   return (0, _enzyme.shallow)(_react2.default.createElement(_ButtonCircle2.default, props));
};

(0, _ava2.default)('render root span, with class .not-selected', function (t) {
   var wrapper = _fnGetWrapper();

   t.true(wrapper.is('span'));
   t.true(wrapper.hasClass('not-selected'));
});

(0, _ava2.default)('should use prop className for add custom class', function (t) {
   var className = "bt",
       wrapper = _fnGetWrapper({ className: className });

   t.true(wrapper.hasClass(className + ' not-selected'));
});

(0, _ava2.default)('should use prop caption for custom text', function (t) {
   var caption = 'caption',
       wrapper = _fnGetWrapper({ caption: caption });

   t.is(wrapper.text(), caption);
});

(0, _ava2.default)('should use prop style for custom style root', function (t) {
   var style = { color: 'green' },
       wrapper = _fnGetWrapper({ style: style });

   t.is(wrapper.node.props.style.color, style.color);
});

(0, _ava2.default)('should use prop onClick for click event on root', function (t) {
   var onClickStub = _sinon2.default.spy(),
       wrapper = _fnGetWrapper({ onClick: onClickStub });

   wrapper.simulate('click');
   t.true(onClickStub.calledOnce);
});
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\__tests__\ButtonCircle.test.js.map