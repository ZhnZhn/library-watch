'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _ScrollPane = require('../../../../js/components/zhn-atoms/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
   return (0, _enzyme.shallow)(_react2.default.createElement(_ScrollPane2.default, props));
};

(0, _ava2.default)('render root div with class `with-scroll`', function (t) {
   var wrapper = _fnGetWrapper();

   t.true(wrapper.is('div'));
   t.true(wrapper.hasClass('with-scroll'));
});

(0, _ava2.default)('should use prop className', function (t) {
   var className = 'some-class',
       wrapper = _fnGetWrapper({ className: className });

   t.true(wrapper.hasClass('with-scroll ' + className));
});

(0, _ava2.default)('should use prop style', function (t) {
   var style = { color: 'green' },
       wrapper = _fnGetWrapper({ style: style });

   t.is(wrapper.props().style.color, style.color);
});
//# sourceMappingURL=ScrollPane.test.js.map