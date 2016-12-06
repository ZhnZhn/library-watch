'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _FormattedInteger = require('../../../../js/components/zhnAtoms/FormattedInteger');

var _FormattedInteger2 = _interopRequireDefault(_FormattedInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
   return (0, _enzyme.shallow)(_react2.default.createElement(_FormattedInteger2.default, props));
};

(0, _ava2.default)('render root span', function (t) {
   var wrapper = _fnGetWrapper({ value: 100 });

   t.true(wrapper.is('span'));
});

(0, _ava2.default)('should use prop style for custom styling', function (t) {
   var style = { color: 'green' },
       wrapper = _fnGetWrapper({ value: 100, style: style });

   t.is(wrapper.node.props.style.color, style.color);
});

(0, _ava2.default)('should insert comma to separate groups of thousands', function (t) {
   t.is(_fnGetWrapper({ value: 1000 }).text(), '1,000');
   t.is(_fnGetWrapper({ value: 10000 }).text(), '10,000');
   t.is(_fnGetWrapper({ value: 100000 }).text(), '100,000');
   t.is(_fnGetWrapper({ value: 1000000 }).text(), '1,000,000');
});

(0, _ava2.default)('should return unmodified integer if provided integer is less than 1000', function (t) {
   t.is(_fnGetWrapper({ value: 0 }).text(), '0');
   t.is(_fnGetWrapper({ value: 1 }).text(), '1');
   t.is(_fnGetWrapper({ value: 10 }).text(), '10');
   t.is(_fnGetWrapper({ value: 100 }).text(), '100');
});
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\__tests__\FormattedInteger.test.js.map