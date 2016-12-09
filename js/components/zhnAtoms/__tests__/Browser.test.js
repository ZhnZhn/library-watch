'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _Browser = require('../../../../js/components/zhnAtoms/Browser');

var _Browser2 = _interopRequireDefault(_Browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
   return (0, _enzyme.shallow)(_react2.default.createElement(_Browser2.default, props));
};

(0, _ava2.default)('render root div display none by default', function (t) {
   var wrapper = _fnGetWrapper();

   t.true(wrapper.is('div'));
   t.is(wrapper.node.props.style.display, 'none');
});

(0, _ava2.default)('should use prop isShow', function (t) {
   var wrapper = _fnGetWrapper({ isShow: true });

   t.true(wrapper.hasClass('show-popup'));
   t.is(wrapper.node.props.style.display, 'block');
});

(0, _ava2.default)('should use prop style', function (t) {
   var style = { color: "green" },
       wrapper = _fnGetWrapper({ isShow: true, style: style });

   t.is(wrapper.node.props.style.display, 'block');
   t.is(wrapper.node.props.style.color, style.color);
});
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\__tests__\Browser.test.js.map