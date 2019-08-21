'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _OpenClose = require('../../../../js/components/zhn-atoms/OpenClose2');

var _OpenClose2 = _interopRequireDefault(_OpenClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
  return (0, _enzyme.shallow)(_react2.default.createElement(_OpenClose2.default, props));
};

(0, _ava2.default)('render root div with div `not-selected`, close by default', function (t) {
  var wrapper = _fnGetWrapper();

  t.true(wrapper.is('div'));
  t.false(wrapper.state('isOpen'));
  t.true(wrapper.find('.not-selected').is('div'));
});

(0, _ava2.default)('should use prop isClose', function (t) {
  var wrapper = _fnGetWrapper({ isClose: true });

  t.false(wrapper.state('isOpen'));
});

(0, _ava2.default)('should use prop style for root styling', function (t) {
  var style = { color: 'green ' },
      wrapper = _fnGetWrapper({ style: style });

  t.is(wrapper.props().style.color, style.color);
});

(0, _ava2.default)('should use prop caption for span text', function (t) {
  var caption = "caption",
      wrapper = _fnGetWrapper({ caption: caption });

  t.is(wrapper.find('span').text(), caption);
});

(0, _ava2.default)('should use prop styleCaption for span styling', function (t) {
  var styleCaption = { color: 'green ' },
      wrapper = _fnGetWrapper({ styleCaption: styleCaption });

  t.is(wrapper.find('span').props().style.color, styleCaption.color);
});

(0, _ava2.default)('should change isOpen state on click `div.not-selected` and use prop fillOpen, fillClose', function (t) {
  var fillOpen = 'green',
      fillClose = 'yellow',
      wrapper = _fnGetWrapper({ fillOpen: fillOpen, fillClose: fillClose }),
      div = wrapper.find('div.not-selected');

  t.false(wrapper.state('isOpen'));
  t.is(wrapper.find('path').props().fill, fillClose);

  div.simulate('click');
  t.true(wrapper.state('isOpen'));
  t.is(wrapper.find('path').props().fill, fillOpen);

  div.simulate('click');
  t.false(wrapper.state('isOpen'));
  t.is(wrapper.find('path').props().fill, fillClose);
});
//# sourceMappingURL=OpenClose2.test.js.map