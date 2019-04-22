'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonDownUp = require('./ButtonDownUp.Style');

var _ButtonDownUp2 = _interopRequireDefault(_ButtonDownUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonDownUp = function ButtonDownUp(props) {
  var caption = props.caption,
      title = props.title,
      isUp = props.isUp,
      styleRoot = props.styleRoot,
      onClick = props.onClick,
      _styleRoot = isUp ? _ButtonDownUp2.default.ROOT_UP : _ButtonDownUp2.default.ROOT_DOWN,
      _styleCircle = isUp ? _ButtonDownUp2.default.CIRCLE_UP : _ButtonDownUp2.default.CIRCLE_DOWN;

  return _react2.default.createElement(
    'span',
    {
      title: title,
      style: Object.assign({}, _ButtonDownUp2.default.ROOT, styleRoot, _styleRoot),
      onClick: onClick
    },
    _react2.default.createElement('span', { style: Object.assign({}, _ButtonDownUp2.default.CIRCLE, _styleCircle) }),
    _react2.default.createElement(
      'span',
      { style: _ButtonDownUp2.default.ITEM },
      caption
    )
  );
};

/*
ButtonDownUp.propTypes = {
  caption: PropTypes.string,
  title: PropTypes.string,
  isUp: PropTypes.bool,
  styleRoot: PropTypes.object,
  onClick: PropTypes.func
}
*/


//import PropTypes from "prop-types";

ButtonDownUp.defaultProps = {
  caption: '',
  title: '',
  onClick: function onClick() {}
};

exports.default = ButtonDownUp;
//# sourceMappingURL=ButtonDownUp.js.map