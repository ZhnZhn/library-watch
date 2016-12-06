'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _Tab = require('../../../../js/components/zhnAtoms/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
  return (0, _enzyme.shallow)(_react2.default.createElement(_Tab2.default, props));
};

(0, _ava2.default)('render root li with props title text', function (t) {
  var title = 'title',
      wrapper = _fnGetWrapper({ title: title });

  t.true(wrapper.is('li'));
  t.is(wrapper.text(), title);
});

(0, _ava2.default)('should use props isSelected for inner style root', function (t) {
  var selected = {
    borderColor: 'rgba(164, 135, 212, 1)',
    color: 'rgba(164, 135, 212, 1)'
  },
      wrapper = _fnGetWrapper({ isSelected: true });

  t.is(wrapper.node.props.style.color, selected.color);
  t.is(wrapper.node.props.style.borderColor, selected.borderColor);
});

(0, _ava2.default)('should use prop onClick for click event on root', function (t) {
  var onClickSpy = _sinon2.default.spy(),
      wrapper = _fnGetWrapper({ onClick: onClickSpy });

  wrapper.simulate('click');
  t.true(onClickSpy.calledOnce);
});
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\__tests__\Tab.test.js.map