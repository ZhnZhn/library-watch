'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

process.env.NODE_ENV !== "production" ? ButtonCircle.propTypes = {
  caption: _react.PropTypes.string,
  title: _react.PropTypes.string,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  isWithoutDefault: _react.PropTypes.bool,
  onClick: _react.PropTypes.func
} : void 0;

exports.default = ButtonCircle;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\ButtonCircle.js.map