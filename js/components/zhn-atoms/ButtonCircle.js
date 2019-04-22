'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var CL = {
  ROOT: 'zhn-bt-circle',
  NOT: 'not-selected'
};

var ButtonCircle = function ButtonCircle(props) {
  var isWithoutDefault = props.isWithoutDefault,
      _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className,
      style = props.style,
      _props$caption = props.caption,
      caption = _props$caption === undefined ? '' : _props$caption,
      title = props.title,
      onClick = props.onClick,
      _className = isWithoutDefault ? className + ' ' + CL.NOT : CL.ROOT + ' ' + className + ' ' + CL.NOT;

  return _react2.default.createElement(
    'button',
    {
      className: _className,
      style: style,
      title: title,
      onClick: onClick
    },
    _react2.default.createElement(
      'div',
      null,
      caption
    )
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