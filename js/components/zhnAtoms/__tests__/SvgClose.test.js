'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _SvgClose = require('../../../../js/components/zhnAtoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
  return (0, _enzyme.shallow)(_react2.default.createElement(_SvgClose2.default, props));
};

(0, _ava2.default)('render root div with class `svg-close`', function (t) {
  var wrapper = _fnGetWrapper();

  t.true(wrapper.is('div'));
  t.true(wrapper.hasClass('svg-close'));
});

(0, _ava2.default)('should use prop style for custom styling root', function (t) {
  var style = { color: 'green' },
      wrapper = _fnGetWrapper({ style: style });

  t.is(wrapper.props().style.color, style.color);
});

(0, _ava2.default)('should use prop onClose for click event on root', function (t) {
  var onCloseSpy = _sinon2.default.spy(),
      wrapper = _fnGetWrapper({ onClose: onCloseSpy });

  wrapper.simulate('click');
  t.true(onCloseSpy.calledOnce);
});
//# sourceMappingURL=SvgClose.test.js.map