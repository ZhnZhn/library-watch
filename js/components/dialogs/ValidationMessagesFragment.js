'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ROOT_DIV: {
    paddingLeft: '10px',
    paddingTop: '5px',
    color: '#F44336'
  },

  NUMBER_DIV: {
    display: 'inline-block',
    width: '22px',
    height: '22px',
    border: 'solid 2px #F44336',
    borderRadius: '50%',
    textAlign: 'center',
    marginRight: '5px'
  },

  MSG_SPAN: {
    whiteSpace: 'pre',
    fontWeight: 'bold'
  }
};

var ValidationMessage = function ValidationMessage(props) {
  var index = props.index;
  var msg = props.msg;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: STYLE.NUMBER_DIV },
      index + 1
    ),
    _react2.default.createElement(
      'span',
      { style: STYLE.MSG_SPAN },
      msg
    )
  );
};

var ValidationMessagesFragment = function ValidationMessagesFragment(props) {
  var validationMessages = props.validationMessages;


  if (!Array.isArray(validationMessages)) {
    return undefined;
  }

  var _renderValidationMessages = function _renderValidationMessages(msgs) {
    return msgs.map(function (msg, index) {
      return _react2.default.createElement(ValidationMessage, { key: index, msg: msg, index: index });
    });
  };

  return _react2.default.createElement(
    'div',
    { style: STYLE.ROOT_DIV },
    _renderValidationMessages(validationMessages)
  );
};

exports.default = ValidationMessagesFragment;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\dialogs\ValidationMessagesFragment.js.map