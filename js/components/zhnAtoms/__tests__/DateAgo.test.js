'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _zhnSpy = require('../../../../js/components/zhnAtoms/__tests__/zhnSpy');

var _zhnSpy2 = _interopRequireDefault(_zhnSpy);

var _DateAgo = require('../../../../js/components/zhnAtoms/DateAgo');

var _DateAgo2 = _interopRequireDefault(_DateAgo);

var _DateAgo3 = require('../../../../js/components/zhnAtoms/DateAgo.Style');

var _DateAgo4 = _interopRequireDefault(_DateAgo3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
  return (0, _enzyme.shallow)(_react2.default.createElement(_DateAgo2.default, props));
};

(0, _ava2.default)('render root span with props dateAgo and `display: none` date', function (t) {
  var dateAgo = '3 mins ago',
      wrapper = _fnGetWrapper({ dateAgo: dateAgo });

  t.true(wrapper.is('span'));
  t.true(!wrapper.state('isShowDate'));
  t.is(wrapper.children().length, 2);

  var spanDateAgo = wrapper.childAt(0);
  t.deepEqual(spanDateAgo.text(), dateAgo);
  t.deepEqual(spanDateAgo.props().style, _DateAgo4.default.DATE_AGO);

  var spanDate = wrapper.childAt(1);
  t.is(spanDate.props().style.display, _DateAgo4.default.DISPLAY_NONE.display);
});

(0, _ava2.default)('should on click on dateAgo preventDefault, stopPropagation and change state isShowDate', function (t) {
  var preventDefaultSpy = _zhnSpy2.default.createValueSpy(),
      stopPropagationSpy = _zhnSpy2.default.createValueSpy(),
      wrapper = _fnGetWrapper(),
      spanDateAgo = wrapper.childAt(0);

  spanDateAgo.simulate('click', {
    preventDefault: preventDefaultSpy,
    stopPropagation: stopPropagationSpy
  });

  t.true(wrapper.state('isShowDate'));
  t.true(preventDefaultSpy.isCalledOnce());
  t.true(stopPropagationSpy.isCalledOnce());
});
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\__tests__\DateAgo.test.js.map