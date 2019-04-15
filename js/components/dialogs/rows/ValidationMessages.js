'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var S = {
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

var ValidationMessage = function ValidationMessage(_ref) {
  var index = _ref.index,
      msg = _ref.msg;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: S.NUMBER_DIV },
      index + 1
    ),
    _react2.default.createElement(
      'span',
      { style: S.MSG_SPAN },
      msg
    )
  );
};
/*
ValidationMessage.propTypes = {
  index: PropTypes.number,
  msg: PropTypes.string
}
*/

var ValidationMessages = function ValidationMessages(props) {
  var validationMessages = props.validationMessages;


  if (!Array.isArray(validationMessages)) {
    return null;
  }

  var _renderValidationMessages = function _renderValidationMessages(msgs) {
    return msgs.map(function (msg, index) {
      return _react2.default.createElement(ValidationMessage, { key: index, msg: msg, index: index });
    });
  };

  return _react2.default.createElement(
    'div',
    { style: S.ROOT_DIV },
    _renderValidationMessages(validationMessages)
  );
};

/*
ValidationMessagesFragment.propTypes = {
  validationMessages: PropTypes.arrayOf(
    PropTypes.shape({
      msg: PropTypes.string
    })
  )
}
*/

exports.default = ValidationMessages;
//# sourceMappingURL=ValidationMessages.js.map