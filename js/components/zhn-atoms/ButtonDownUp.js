'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonDownUp = require('./ButtonDownUp.Style');

var _ButtonDownUp2 = _interopRequireDefault(_ButtonDownUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonDownUp = function ButtonDownUp(props) {
  var style = props.style,
      isUp = props.isUp,
      _props$caption = props.caption,
      caption = _props$caption === undefined ? '' : _props$caption,
      _props$title = props.title,
      title = _props$title === undefined ? '' : _props$title,
      onClick = props.onClick,
      _style = isUp ? _ButtonDownUp2.default.ROOT_UP : _ButtonDownUp2.default.ROOT_DOWN,
      _circleStyle = isUp ? _ButtonDownUp2.default.CIRCLE_UP : _ButtonDownUp2.default.CIRCLE_DOWN;

  return _react2.default.createElement(
    'button',
    {
      title: title,
      style: (0, _extends3.default)({}, _ButtonDownUp2.default.ROOT, style, _style),
      onClick: onClick
    },
    _react2.default.createElement('span', { style: (0, _extends3.default)({}, _ButtonDownUp2.default.CIRCLE, _circleStyle) }),
    _react2.default.createElement(
      'span',
      { style: _ButtonDownUp2.default.ITEM },
      caption
    )
  );
};

/*
ButtonDownUp.propTypes = {
  style: PropTypes.object,
  isUp: PropTypes.bool,
  caption: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}
*/

//import PropTypes from "prop-types";

exports.default = ButtonDownUp;
//# sourceMappingURL=ButtonDownUp.js.map