'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var STYLE = {
  ROOT: {
    display: 'inline-block',
    color: '#80c040',
    border: '2px solid #80c040',
    borderRadius: '50%',
    width: '22px',
    height: '22px',
    textAlign: 'center',
    cursor: 'pointer'
  }
};

var ButtonCircle = function ButtonCircle(props) {
  var caption = props.caption,
      title = props.title,
      className = props.className,
      style = props.style,
      isWithoutDefault = props.isWithoutDefault,
      onClick = props.onClick,
      _className = className ? className + ' not-selected' : 'not-selected',
      _style = isWithoutDefault ? style : (0, _extends3.default)({}, STYLE.ROOT, style);

  return _react2.default.createElement(
    'span',
    {
      className: _className,
      style: _style,
      title: title,
      onClick: onClick
    },
    caption
  );
};

/*
ButtonCircle.propTypes = {
  caption : PropTypes.string,
  title : PropTypes.string,
  className : PropTypes.string,
  style : PropTypes.object,
  isWithoutDefault : PropTypes.bool,
  onClick : PropTypes.func
}
*/

exports.default = ButtonCircle;
//# sourceMappingURL=ButtonCircle.js.map