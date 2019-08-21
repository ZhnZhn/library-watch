'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _InputText = require('../../../../js/components/zhn-atoms/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
  return (0, _enzyme.shallow)(_react2.default.createElement(_InputText2.default, props));
};

(0, _ava2.default)('render input type text with state value equal prop initValue', function (t) {
  var initValue = 'initValue',
      wrapper = _fnGetWrapper({ initValue: initValue }),
      input = wrapper.find('input');

  t.true(wrapper.is('div'));
  t.is(input.prop('type'), "text");
  t.is(input.prop('value'), initValue);
  t.is(wrapper.state('value'), initValue);
});

(0, _ava2.default)('should use prop style', function (t) {
  var style = { color: 'green ' },
      wrapper = _fnGetWrapper({ style: style }),
      input = wrapper.find('input');

  t.is(input.props().style.color, style.color);
});

(0, _ava2.default)('should use prop placeholder', function (t) {
  var placeholder = "input text",
      wrapper = _fnGetWrapper({ placeholder: placeholder });

  t.is(wrapper.find('input').prop('placeholder'), placeholder);
});

(0, _ava2.default)('should change state value onChange', function (t) {
  var value1 = 'a',
      value2 = 'ab',
      wrapper = _fnGetWrapper(),
      input = wrapper.find('input');

  input.simulate('change', { target: { value: value1 } });
  t.is(wrapper.state('value'), value1);
  input.simulate('change', { target: { value: value2 } });
  t.is(wrapper.state('value'), value2);
  input.simulate('change', { target: { value: value1 } });
  t.is(wrapper.state('value'), value1);
});

(0, _ava2.default)('should clear state value onKeyDown 27', function (t) {
  var initValue = 'initValue',
      wrapper = _fnGetWrapper({ initValue: initValue }),
      input = wrapper.find('input');

  t.is(wrapper.state('value'), initValue);
  input.simulate('keydown', { keyCode: 27 });
  t.is(wrapper.state('value'), '');
});

(0, _ava2.default)('should update state value on new prop initValue with isUpdateInitValue true', function (t) {
  var initValue1 = 'initValue1',
      initValue2 = 'initValue2',
      wrapper = _fnGetWrapper({ initValue: initValue1 });

  t.is(wrapper.state('value'), initValue1);
  wrapper.setProps({ initValue: initValue2, isUpdateInitValue: true });
  t.is(wrapper.state('value'), initValue2);
});

(0, _ava2.default)('should not update state value on new prop initValue without isUpdateInitValue true', function (t) {
  var initValue1 = 'initValue1',
      initValue2 = 'initValue2',
      wrapper = _fnGetWrapper({ initValue: initValue1 });

  t.is(wrapper.state('value'), initValue1);
  wrapper.setProps({ initValue: initValue2 });
  t.is(wrapper.state('value'), initValue1);
});

(0, _ava2.default)('should instance method getValue return trim value', function (t) {
  var initValue = 'initValue ',
      wrapper = _fnGetWrapper({ initValue: initValue }),
      input = wrapper.find('input');

  t.is(wrapper.instance().getValue(), initValue.trim());
  input.simulate('change', { target: { value: initValue + ' ' } });
  t.is(wrapper.instance().getValue(), initValue.trim());
});

(0, _ava2.default)('should instance method setValue set state value', function (t) {
  var initValue = 'initValue',
      value = 'value',
      wrapper = _fnGetWrapper({ initValue: initValue });

  t.is(wrapper.state('value'), initValue);
  wrapper.instance().setValue(value);
  t.is(wrapper.state('value'), value);
});
//# sourceMappingURL=InputText.test.js.map