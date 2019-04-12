'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _ShowHide = require('../../../../js/components/zhnAtoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
  return (0, _enzyme.shallow)(_react2.default.createElement(_ShowHide2.default, props));
};

(0, _ava2.default)('render root div', function (t) {
  var wrapper = _fnGetWrapper();
  t.true(wrapper.is('div'));
});

(0, _ava2.default)('should use prop style', function (t) {
  var style = { color: 'green' },
      wrapper = _fnGetWrapper({ style: style });

  t.is(wrapper.props().style.color, style.color);
});

(0, _ava2.default)('should have display none with prop isShow false', function (t) {
  var notShowStyle = { display: 'none' },
      style = { display: 'block' },
      wrapper = _fnGetWrapper({ isShow: false, style: style });

  //t.true(wrapper.hasClass(''));
  t.is(wrapper.props().style.display, notShowStyle.display);
});

(0, _ava2.default)('should have class `show-popup` and display block with prop isShow true', function (t) {
  var showStyle = { display: 'block' },
      style = { display: 'none' },
      wrapper = _fnGetWrapper({ isShow: true, style: style });

  t.true(wrapper.hasClass('show-popup'));
  t.is(wrapper.props().style.display, showStyle.display);
});
//# sourceMappingURL=ShowHide.test.js.map